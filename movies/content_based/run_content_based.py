import pickle

import pandas as pd
from langchain_ollama import OllamaEmbeddings
from util.load_file import  load_file
import numpy as np
from sklearn.neighbors import NearestNeighbors
from .test_content_based import load_vector_store
from .test_content_based import train_knn
from util.load_movies_metadata import  load_movies_metadata_small
knn_params = {
    'n_neighbors': 20,
    'metric': 'cosine',
}

class ContentBasedRecommender:
    def __init__(
        self,
    ):
        self.vectorstore = pd.DataFrame(load_vector_store("llama3.2"))
        self.model = OllamaEmbeddings(model='llama3.2')
        vectors = np.array(self.vectorstore["vector"].tolist())
        self.knn = train_knn(vectors, knn_params)

    def embed_content(self, content: str):
        return  self.model.embed_query(content)

    def recommend_content(self, content: str):
        vector = self.embed_content(content)
        top_k = self.knn.kneighbors([vector], return_distance=False)
        top_k_indices = list(top_k[0])

        movies = load_movies_metadata_small()
        columns_to_select = [
            'id',
            'imdb_id',
            'title',
            'genres',
            'original_title',
            'original_language',
            'overview',
            'vote_average',
            'spoken_languages']
        selected_movies = movies.loc[top_k_indices]
        selected_movies = selected_movies[columns_to_select]

        selected_movies = selected_movies.to_dict(orient='records')
        return selected_movies



if __name__ == "__main__":
    content_based_recommender = ContentBasedRecommender()
    print(content_based_recommender.recommend_content("test"))