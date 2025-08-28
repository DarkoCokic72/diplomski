import numpy as np
from surprise import Reader, Dataset, Prediction
from surprise import KNNWithZScore
from util.load_ratings import load_ratings
import pickle
import math
import random
import os

algo_saved_path = os.path.join('trained_model', "collaborative_model.pkl")


def train_collaborative():
    movie_ratings = load_ratings(verbose=False)
    reader = Reader(rating_scale=(1, 5))
    data = Dataset.load_from_df(movie_ratings[['userId', 'movieId', 'rating']], reader)
    full_trainset = data.build_full_trainset()
    sim_options = {
        "name": "pearson",
        "user_based": True,
        "min_support": 30
    }
    algo = KNNWithZScore(sim_options=sim_options)
    algo.fit(full_trainset)

    with open(algo_saved_path, 'wb') as file:
        # noinspection PyTypeChecker
        pickle.dump(algo, file)


def load_collaborative():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    load_path = os.path.join(script_dir, algo_saved_path)
    print(os.getcwd())
    with open(load_path, 'rb') as file:
        algo = pickle.load(file)

    return algo

def insertion_sort(bucket: list[Prediction]):
    for i in range(1, len(bucket)):
        key: Prediction = bucket[i]
        j = i - 1
        while j >= 0 and bucket[j].est < key.est:
            bucket[j + 1] = bucket[j]
            j -= 1
        bucket[j + 1] = key


def sort_predictions(predictions: list[Prediction]):
    buckets = [[] for _ in range(3)]
    while len(predictions) > 0:
        pred = predictions.pop(0)
        est_value_floored = math.floor(pred.est)
        bucket_index = 5 - est_value_floored
        buckets[bucket_index].append(pred)

    for bucket in buckets:
        insertion_sort(bucket)

    for bucket in buckets:
        predictions.extend(bucket)

    return predictions



def get_predictions(not_rated: list, userId: int):
    predictions = []
    for not_rated_movie in not_rated:

        res: Prediction = algo.predict(userId, not_rated_movie)
        if res.est >= 3:  # why bother showing items that user won't like
            predictions.append(res)

    return predictions

def get_not_rated_items(user_ratings: list[tuple], number_of_all_items: int):
    indices = np.array([x[0] for x in user_ratings])
    values = np.array([x[1] for x in user_ratings])

    user_vector = np.zeros(number_of_all_items)
    user_vector[indices] = values
    not_rated = np.where(user_vector == 0)[0]
    not_rated = [algo.trainset.to_raw_iid(it) for it in not_rated]

    return not_rated


def select_random_predictions(predictions):
    random.seed(42)
    if len(predictions) < 15:
        random_recommendation = predictions
    else:
        random_recommendation: list[Prediction] = random.sample(predictions, 15)
    random_recommendation = [x.iid for x in random_recommendation]
    return random_recommendation


def recommend_items_to_user(user_id: int):
    inner_uid = algo.trainset.to_inner_uid(user_id)
    xrs = algo.xr  # users
    number_of_items = algo.n_y

    users_ratings: list[tuple] = xrs[inner_uid]
    not_rated_items = get_not_rated_items(users_ratings, number_of_items)

    predictions = get_predictions(not_rated_items, user_id)
    predictions = sort_predictions(predictions)

    random_recommendation = select_random_predictions(predictions)
    return  random_recommendation


algo: KNNWithZScore = load_collaborative()


if __name__=='__main__':
    recommend_items_to_user(100)