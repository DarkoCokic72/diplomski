from load_movies_metadata import load_movies_metadata

def make_small_movies_metadata():
    movies = load_movies_metadata()
    movies = movies[movies["overview"].notna()]

    movies = movies.sample(n=200, random_state=42)

    print()

    file_location: str = f"../data/movies_metadata_small.csv"
    movies.to_csv(path_or_buf=file_location, sep=',')

    pass

if __name__ == "__main__":
    make_small_movies_metadata()