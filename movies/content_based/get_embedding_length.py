from langchain_ollama import OllamaEmbeddings
import pandas as pd

from content_based.test_content_based import load_vector_store


def get_embedding_length():
    results = []
    embedding_models: list[str] = [
        'llama3.2',
        'mistral',
        'granite3.3',
        # 'qwen3:4b'
    ]

    test_string = """
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque placerat, nisi in lacinia bibendum, lectus ante vestibulum elit, id cursus lacus nisl a tellus. 
        In dignissim facilisis rutrum. Fusce facilisis in dui non lacinia. 
        Quisque magna sem, cursus vel laoreet ut, cursus eget mi. 
        Vestibulum ut semper ante. Morbi molestie nibh quis cursus condimentum. 
    """

    for model in embedding_models:
        print(f"{model=}")
        ollama_embedding = OllamaEmbeddings(model=model)
        vector = ollama_embedding.embed_query(test_string)
        vector_length = len(vector)

        result = {
            "model": model,
            "vector_length": vector_length
        }

        results.append(result)

    save_path = f"./embedding_lengths.csv"
    df = pd.DataFrame(results)
    df.to_csv(save_path, sep='\t')


def get_qwen_emb_length():
    model = "qwen3:4b"
    vectorstore  = pd.DataFrame(load_vector_store(model))
    first = vectorstore['vector'].to_list()[0]
    print(len(first))

    pass

if __name__ == '__main__':
    # get_embedding_length()
    get_qwen_emb_length()