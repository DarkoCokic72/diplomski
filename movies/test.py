import pandas as pd
import json

from pandas import DataFrame

CREDITS_FILE = "./data/credits.csv"  # ******
KEYWORDS_FILE = "./data/keywords.csv"  # ******
LINKS_FILE = "./data/links.csv"  # ******
RATINGS_FILE = "./data/ratings.csv"  # ******
RATINGS_SMALL_FILE = "./data/ratings_small.csv"  # ******
MOVIES_METADATA_FILE = "./data/movies_metadata.csv"  # ******


def load_file(filepath: str) -> DataFrame:
    return pd.read_csv(filepath)


def get_credits(verbose=True):
    df = load_file(CREDITS_FILE)
    error_count = 0
    for i, (cast, crew, cred_id) in enumerate(zip(df["cast"], df["crew"], df["id"])):
        try:
            cast_list = list(eval(cast))
            crew_list = list(eval(crew))
            df["cast"][i] = cast_list
            df["crew"][i] = crew_list
            if verbose:
                print(f"id: {cred_id}\ncast: {cast_list}\ncrew:  {crew_list}")

        except Exception as e:
            error_count += 1
            print(f"{error_count} Error: {str(e)}")

    return df


def get_keywords(verbose=True):
    df = load_file(KEYWORDS_FILE)
    error_count = 0

    for i, (keyword, keyword_id) in enumerate(zip(df["keywords"], df["id"])):
        try:
            keyword_list = list(eval(keyword))
            df["keywords"][i] = keyword_list
            if verbose:
                print(f"id: {keyword_id}\nkeywords: {keyword_list}")
        except Exception as e:
            error_count += 1
            print(f"{error_count} str: {keyword}")
            print(f"{error_count} Error: {str(e)}")

    return df


def get_links(verbose=True):
    df = load_file(LINKS_FILE)
    error_count = 0

    return df


def get_ratings(verbose=True):
    df = load_file(RATINGS_FILE)
    error_count = 0

    return df


def get_ratings_small(verbose=True):
    df = load_file(RATINGS_SMALL_FILE)
    error_count = 0
    df = df.drop(columns=["timestamp"], axis=1)

    return df


def get_movies_metadata(verbose=True):
    df = load_file(MOVIES_METADATA_FILE)
    error_count = 0
    df["overview"] = [x if type(x) == str else "No overview found" for x in df["overview"]]

    for i, (collection, genre, production, language, country, adult) \
            in enumerate(zip(df["belongs_to_collection"],
                             df["genres"],
                             df["production_companies"],
                             df["spoken_languages"],
                             df["production_countries"],
                             df["adult"])):
        try:
            collection_list = eval(collection) if type(collection) == str else None
            genre_list = list(eval(genre))
            production_list = list(eval(production))
            language_list = list(eval(language))
            country_list = list(eval(country))
            adult_bool = eval(adult)

            df["belongs_to_collection"][i] = collection_list
            df["genres"][i] = genre_list
            df["production_companies"][i] = production_list
            df["spoken_languages"][i] = language_list
            df["production_countries"][i] = country_list
            df["adult"][i] = adult_bool

            if verbose:
                print(f"collection_list: {collection_list}\ngenres: {genre_list}")
                print(
                    f"production_companies: {production_list}\nlanguages: {language_list}\nproduction_countries: {country_list}")


        except Exception as e:
            error_count += 1
            print(f"{error_count} str: {collection}")
            print(f"{error_count} Error: {str(e)}")

    return df


def get_movies_metadata_df():
    df = load_file(MOVIES_METADATA_FILE)
    error_count = 0

    return df
    pass


# keywords_df = get_keywords()
# credits_df = get_credits()
# links_df = get_links()
# get_ratings()
# movies_metadata_df = get_movies_metadata()
print()

if __name__ == "__main__":
    df = get_ratings_small()
    print()
    pass
