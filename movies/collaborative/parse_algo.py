from surprise import KNNBasic, KNNWithMeans, SVD, KNNWithZScore


def parse_algo(name: str, similarity_options: dict):
    match name:
        case "knn_basic":
            return KNNBasic(sim_options=similarity_options)
        case "knn_with_means":
            return KNNWithMeans(sim_options=similarity_options)
        case "knn_with_zscore":
            return KNNWithZScore(sim_options=similarity_options)
        case "svd":
            return SVD(sim_options=similarity_options)
        case _:
            raise Exception(f"Unknown algorithm: {name}")

if __name__ == "__main__":
    sim_options = {
        "name": "cosine",
        "user_based": False
    }

    algo = parse_algo(name="test", similarity_options=sim_options)
    pass