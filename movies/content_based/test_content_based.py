import pickle

import pandas as pd
from langchain_ollama import OllamaEmbeddings
from util.load_file import  load_file
import numpy as np
from sklearn.neighbors import NearestNeighbors
import os

def load_test_file():
    filepath = f'./test_data/content_test_data.csv'
    test_data = load_file(filepath)

    return  test_data

def load_knn_params():
    filepath = f'./nearest_neighbors_params.csv'
    knn_params = load_file(filepath)

    return knn_params

def get_embedding_model(model: str):
    return OllamaEmbeddings(
        model=model,
    )


def load_vector_store(model: str):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    vctrstr = os.path.join("vectorstore", f"{model.replace(':', '_')}_embeddings.pkl")
    # vectorstore_name = f"./vectorstore/{model.replace(':', '_')}_embeddings.pkl"
    vectorstore_name = os.path.join(script_dir, vctrstr)
    with open(vectorstore_name, 'rb') as f:
        vectorstore = pickle.load(f)

    return vectorstore

def test_similarity_search(model: str):
    vectorstore  = pd.DataFrame(load_vector_store(model))
    embedding_model = get_embedding_model(model)
    all_knn_params = load_knn_params()

    results = []
    for i, knn_param in all_knn_params.iterrows():
        ranks = []
        knn_params = knn_param.to_dict()
        print(knn_params)
        vectors = np.array(vectorstore["vector"].tolist())

        knn = train_knn(vectors, knn_params)
        test_data = load_test_file()
        for _, test_data_row in test_data.iterrows():
            original_string = test_data_row["original"]
            test_string = test_data_row["test"]

            original_vector, test_vector = get_original_and_test_vectors(embedding_model, original_string, test_string)

            original_index = np.where(np.all(vectors == np.array(original_vector), axis=1))[0][0]

            top_k = knn.kneighbors([test_vector], return_distance=False)
            top_k_indices = list(top_k[0])
            rank = top_k_indices.index(original_index) if original_index in top_k_indices else -1
            ranks.append(rank)

        print(ranks)
        cases_found = len([x for x in ranks if x != -1])
        cases_not_found = len([x for x in ranks if x == -1])
        avg_rank = np.average([x for x in ranks if x != -1])

        result = {
            **knn_params,
            "cases_found": cases_found,
            "cases_not_found": cases_not_found,
            "avg_rank": np.ceil(avg_rank)
        }

        results.append(result)

    save_results(model, results)
    pass


def save_results(model: str, results):
    results_path = f"./results/{model.replace(':', '_')}_content_based_results.csv"
    results = pd.DataFrame(results)
    results.to_csv(results_path, sep='\t')


def get_original_and_test_vectors(embedding_model: OllamaEmbeddings, original_string: str, test_string: str):
    test_vector = embedding_model.embed_query(test_string)
    original_vector = embedding_model.embed_query(original_string)
    return original_vector, test_vector


def train_knn(vectors, knn_params: dict):

    knn = NearestNeighbors(**knn_params)
    knn.fit(vectors)
    return knn


def print_decorated_string(text: str, char: str = '*') -> None:

    width = len(text) + 4
    border = char * width

    middle_line = f"{char} {text} {char}"

    print(border)
    print(middle_line)
    print(border)

if __name__ == '__main__':
    embedding_models: list[str] = [
        'llama3.2',
        'mistral',
        'granite3.3',
        'qwen3:4b'
    ]
    for model in embedding_models:
        print_decorated_string(model, char='+')
        test_similarity_search(model)
    # main()