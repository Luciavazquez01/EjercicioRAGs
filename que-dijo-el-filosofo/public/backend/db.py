
import os
import chromadb
from chromadb.config import Settings
from chromadb.utils import embedding_functions

PERSIST_DIR = os.path.join(os.path.dirname(__file__), "data")


ef = embedding_functions.SentenceTransformerEmbeddingFunction(
    model_name="all-MiniLM-L6-v2"
)

client = chromadb.Client(
    Settings(
        persist_directory=PERSIST_DIR,
        is_persistent=True,
    )
)

COLLECTION_NAME = "filosofia"

def get_collection():
    return client.get_or_create_collection(
        name=COLLECTION_NAME,
        embedding_function=ef
    )
