from pandas.core.interchange.dataframe_protocol import DataFrame
import pandas as pd
import ast

from util.load_file import load_file
from util.get_column_names import get_columns

def extract_list_genre_names(df: DataFrame):
    df_genres = [ast.literal_eval(genre_list) for genre_list in list(df["genres"])]
    df_genres = [[genre_dict["name"] for genre_dict in genre_list] for genre_list in df_genres]
    df["genres"] = df_genres

    return df


def load_movies_metadata(verbose: bool = True):
    filepath: str = f"../data/movies_metadata.csv"
    df = load_file(filepath, sep=",")
    df['id'] = pd.to_numeric(df['id'])

    df = extract_list_genre_names(df)

    return df

def get_movies_ids():
    df = load_movies_metadata()
    ids = list(df['id'])

    return ids

def load_movies_metadata_small(verbose: bool = True):
    filepath: str = f"../data/movies_metadata_small.csv"
    df = load_file(filepath, sep=",")
    return df


if __name__ == "__main__":
    movies: DataFrame = load_movies_metadata_small()

    print(get_columns(movies))
