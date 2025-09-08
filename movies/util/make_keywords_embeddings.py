from load_keywords import load_keywords
from langchain_ollama import OllamaEmbeddings
import pickle
import pandas as pd

def embed_keywords():
    model = 'llama3.2'
    embeddings: OllamaEmbeddings = OllamaEmbeddings(model=model)
    keywords = load_keywords()

    keywords = keywords[keywords["keywords"].astype(bool)]
    keywords = keywords.sample(n=200, random_state=42)

    vectorstore_name = f"../content_based/vectorstore/keywords_embeddings_llama3.2.pkl"

    vectorstore = []
    for i, row in keywords.iterrows():
        keyword = str(row["keywords"])
        metadata = row.to_dict()

        vector = embeddings.embed_query(keyword)
        print(vector)
        vectorstore.append({
            "metadata": metadata,
            "vector": vector
        })

    with open(vectorstore_name, 'wb') as f:
        # noinspection PyTypeChecker
        pickle.dump(vectorstore, f)

if __name__ == '__main__':
    embed_keywords()