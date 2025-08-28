import numpy as np
from surprise import Reader, Dataset, Prediction
from surprise import KNNWithZScore
from util.load_ratings import load_ratings
from util.load_movies_metadata import load_movies_metadata, get_movies_ids
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

def filter_non_existent_ids(predictions: list[Prediction]):
    movie_ids = get_movies_ids()
    new_predictions = [p for p in predictions if p.iid in movie_ids]
    return  new_predictions

def select_random_predictions(predictions):
    random.seed(42)
    if len(predictions) < 15:
        random_recommendation = predictions
    else:
        random_recommendation: list[Prediction] = random.sample(predictions, 15)
    random_recommendation = [x.iid for x in random_recommendation]
    return random_recommendation

def get_movies_by_ids(ids: list[int]):
    df = load_movies_metadata()
    columns_to_select  = [
        'id',
        'imdb_id',
        'title',
        'genres',
        'original_title',
        'original_language',
        'overview',
        'vote_average',
        'spoken_languages']
    selected_movies = df.loc[df['id'].isin(ids)]
    selected_movies = selected_movies[columns_to_select]
    selected_movies = selected_movies.to_dict(orient='records')

    return selected_movies

def recommend_items_to_user(user_id: int):
    inner_uid = algo.trainset.to_inner_uid(user_id)
    xrs = algo.xr  # users
    number_of_items = algo.n_y

    users_ratings: list[tuple] = xrs[inner_uid]
    not_rated_items = get_not_rated_items(users_ratings, number_of_items)

    predictions = get_predictions(not_rated_items, user_id)
    predictions = sort_predictions(predictions)
    predictions = filter_non_existent_ids(predictions)
    random_recommendation = select_random_predictions(predictions)
    random_recommendation = get_movies_by_ids(random_recommendation)
    return  random_recommendation


algo: KNNWithZScore = load_collaborative()


if __name__=='__main__':
    print(recommend_items_to_user(600))