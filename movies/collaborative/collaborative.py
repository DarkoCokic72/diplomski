from surprise import Reader, Dataset, KNNBasic, accuracy, KNNWithMeans
from surprise.model_selection import train_test_split
from parse_algo import parse_algo

from util.load_ratings import load_ratings

movie_ratings = load_ratings(verbose=False)
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(movie_ratings[['userId', 'movieId', 'rating']], reader)

train, test = train_test_split(data, test_size=0.3)
sim_options: dict = {
    "name": "cosine",
    "user_based": False
}

algo = parse_algo("knn_basic", similarity_options=sim_options)
algo.fit(train)
print(f"KNN Basic")
predictions = algo.test(test)
print(accuracy.rmse(predictions))
print(accuracy.mae(predictions))
print(accuracy.fcp(predictions))
print(accuracy.mse(predictions))

algo = KNNWithMeans()
algo.fit(train)

print(f"KNN with means")
predictions = algo.test(test)
print(accuracy.rmse(predictions))
print(accuracy.mae(predictions))
print(accuracy.fcp(predictions))
print(accuracy.mse(predictions))