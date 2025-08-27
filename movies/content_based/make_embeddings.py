import pickle

from util.load_movies_metadata import load_movies_metadata_small
from langchain_ollama import OllamaEmbeddings

movies = load_movies_metadata_small()
columns = ['id', 'imdb_id', 'title', 'original_title', 'overview', 'genres', 'vote_average']
movies = movies[columns]
movies = movies[movies["overview"].notna()]

embedding_models = [
    'llama3.2',
    'mistral',
    'granite3.3',
    'qwen3:4b'
]
for model in embedding_models:
    embeddings = OllamaEmbeddings(
        model=model,
    )

    vectorstore = []

    vectorstore_name = f"./vectorstore/{model.replace(':', '_')}_embeddings.pkl"

    for i, row in movies.iterrows():
        metadata = row.to_dict()
        overview = row["overview"]
        overview_vector = embeddings.embed_query(overview)

        print(f"model: {model}\n embedding movie: {row['id']}")

        vectorstore.append({
            "metadata": metadata,
            "vector": overview_vector
        })

    print(f"dumping vectorstore of model {model}")
    with open(vectorstore_name, 'wb') as f:
        # noinspection PyTypeChecker
        pickle.dump(vectorstore, f)



