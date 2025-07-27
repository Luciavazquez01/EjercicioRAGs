from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from db import get_collection

app = FastAPI(title="Mini RAG - ¿Qué dijo el Filósofo?")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class AskRequest(BaseModel):
    frase: str
    k: int = 3 

@app.post("/ask")
def ask(req: AskRequest):
    col = get_collection()
    res = col.query(query_texts=[req.frase], n_results=req.k)

    documentos = res.get("documents", [[]])[0]
    metadatas = res.get("metadatas", [[]])[0]

    contexto = "\n".join(
        [f"- {doc} ({meta.get('autor', 'Desconocido')})"
         for doc, meta in zip(documentos, metadatas)]
    )

    autores = list({m.get("autor", "Desconocido") for m in metadatas})

    return {
        "frase_usuario": req.frase,
        "autores": autores,
        "citas_contexto": [
            {"texto": d, "autor": m.get("autor", "Desconocido")}
            for d, m in zip(documentos, metadatas)
        ],
        "respuesta_sabio": "Contexto encontrado:\n" + contexto
    }
