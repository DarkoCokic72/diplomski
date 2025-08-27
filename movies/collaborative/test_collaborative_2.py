import pandas as pd
from surprise import Reader, Dataset, accuracy, KNNWithZScore
from surprise.model_selection import train_test_split

from util.load_ratings import load_ratings

movie_ratings = load_ratings(verbose=False)
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(movie_ratings[['userId', 'movieId', 'rating']], reader)

train, test = train_test_split(data, test_size=0.3)
min_support_nums = [x * 5 for x in range(1, 15)]
sim_options: dict = {
    "name": "pearson",
    "user_based": True
}

results = []

for min_support in min_support_nums:
    sim_options['min_support'] = min_support

    algo = KNNWithZScore(sim_options=sim_options)
    algo.fit(train)

    predictions = algo.test(test)
    rmse = accuracy.rmse(predictions)
    mae = accuracy.mae(predictions)
    mse = accuracy.mse(predictions)
    fcp = accuracy.fcp(predictions)

    result = {
        "min_support": min_support,
        "rmse": rmse,
        "mae": mae,
        "mse": mse,
        "fcp": fcp,
    }

    results.append(result)

results = pd.DataFrame(results)
results.to_csv(path_or_buf="./collaborative_results_min_support.csv", sep='\t')
