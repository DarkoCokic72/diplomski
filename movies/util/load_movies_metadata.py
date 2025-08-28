from pandas.core.interchange.dataframe_protocol import DataFrame
import pandas as pd

from util.load_file import load_file
from util.get_column_names import get_columns


def load_movies_metadata(verbose: bool = True):
    filepath: str = f"../data/movies_metadata.csv"
    df = load_file(filepath, sep=",")
    df['id'] = pd.to_numeric(df['id'])

    return df

def get_movies_ids():
    df = load_movies_metadata()
def load_movies_metadata_small(verbose: bool = True):
    filepath: str = f"../data/movies_metadata_small.csv"
    df = load_file(filepath, sep=",")
    return df


if __name__ == "__main__":
    movies: DataFrame = load_movies_metadata_small()

    print(get_columns(movies))
