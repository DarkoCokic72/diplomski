from pandas import DataFrame


def get_columns(df: DataFrame):
    columns = df.columns.to_list()
    return columns