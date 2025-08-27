import pandas as pd
from pandas import DataFrame


def load_file(filepath: str, sep: str = ",") -> DataFrame:
    return pd.read_csv(filepath, sep=sep)