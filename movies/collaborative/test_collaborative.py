import pandas as pd
from surprise import Reader, Dataset, accuracy
from surprise.model_selection import train_test_split

from load_sim_options import load_collaborative_sim_options
from parse_algo import parse_algo
from util.load_ratings import load_ratings

movie_ratings = load_ratings(verbose=False)
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(movie_ratings[['userId', 'movieId', 'rating']], reader)

train, test = train_test_split(data, test_size=0.3)
sim_options = load_collaborative_sim_options()

results = []

for i, sim_option in sim_options.iterrows():
    algo_name = sim_option["algo_name"]
    sim_name = sim_option["similarity_name"]
    is_user_based = sim_option["user_based"]

    print(f"algo_name: {algo_name} \nsim_name: {sim_name} \nuser_based: {is_user_based}")

    algo = parse_algo(algo_name, similarity_options={
        "name": sim_name,
        "user_based": is_user_based
    })
    algo.fit(train)
    predictions = algo.test(test)

    rmse = accuracy.rmse(predictions)
    mae = accuracy.mae(predictions)
    mse = accuracy.mse(predictions)
    fcp = accuracy.fcp(predictions)

    result = {
        "algo_name": algo_name,
        "sim_name": sim_name,
        "is_user_based": is_user_based,
        "rmse": rmse,
        "mae": mae,
        "mse": mse,
        "fcp": fcp,
    }

    results.append(result)

results = pd.DataFrame(results)
results.to_csv(path_or_buf="./collaborative_results.csv", sep='\t')