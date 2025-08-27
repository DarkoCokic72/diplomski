from util.load_file import load_file


def load_ratings(verbose: bool = True):
    filepath: str = f"../data/ratings_small.csv"
    df = load_file(filepath)
    return df