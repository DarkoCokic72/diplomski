from pandas.core.interchange.dataframe_protocol import DataFrame
import pandas as pd
import ast

from util.load_file import load_file
from util.get_column_names import get_columns


def load_keywords():
    filepath: str = f"../data/keywords.csv"
    df = load_file(filepath, sep=",")

    df = extract_list_keyword_names(df)

    return df


def extract_list_keyword_names(df: DataFrame):
    df_keywords = [ast.literal_eval(keyword_list) for keyword_list in list(df["keywords"])]
    df_keywords = [[keyword_dict["name"] for keyword_dict in keyword_list] for keyword_list in df_keywords]
    df["keywords"] = df_keywords

    return df


if __name__ == "__main__":
    keywords = load_keywords()
    print(get_columns(keywords))