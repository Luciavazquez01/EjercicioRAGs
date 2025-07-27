
from db import get_collection

def main():
    col = get_collection()

    
    try:
        col.delete(where={})
    except Exception:
        pass

    citas = [
        # Platón
        ("platon_1", "El alma es inmortal y eterna, y se mueve por sí misma.", "Platón"),
        ("platon_2", "La filosofía es un silencioso diálogo del alma consigo misma.", "Platón"),
        ("platon_3", "La medida del hombre es su deseo.", "Platón"),
        ("platon_4", "El mayor bien es la armonía del alma.", "Platón"),
        ("platon_5", "La opinión es algo intermedio entre el conocimiento y la ignorancia.", "Platón"),
        ("platon_6", "La música es para el alma lo que la gimnasia para el cuerpo.", "Platón"),
        ("platon_7", "El cuerpo es la prisión del alma.", "Platón"),
        ("platon_8", "Conócete a ti mismo.", "Sócrates (según Platón)"),
        # Sócrates
        ("socrates_1", "Solo sé que no sé nada.", "Sócrates"),
        ("socrates_2", "Conócete a ti mismo.", "Sócrates"),
        ("socrates_3", "Una vida sin examen no merece ser vivida.", "Sócrates"),
        ("socrates_4", "El verdadero conocimiento existe en saber que no sabes nada.", "Sócrates"),
        ("socrates_5", "Prefiero la molesta verdad a la agradable ilusión.", "Sócrates"),
        ("socrates_6", "El principio de la sabiduría es la definición de los términos.", "Sócrates"),
        ("socrates_7", "La educación es el encendido de una llama, no el llenado de un vaso.", "Sócrates"),
        ("socrates_8", "El alma se cura con ciertos encantos: y esos encantos son las palabras hermosas.", "Sócrates"),
        # Aristóteles
        ("aristoteles_1", "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto sino un hábito.", "Aristóteles"),
        ("aristoteles_2", "El todo es más que la suma de sus partes.", "Aristóteles"),
        ("aristoteles_3", "La amistad es un alma que habita en dos cuerpos.", "Aristóteles"),
        ("aristoteles_4", "El fin último del hombre es la felicidad.", "Aristóteles"),
        ("aristoteles_5", "La virtud es un hábito selectivo que consiste en un término medio relativo a nosotros.", "Aristóteles"),
        ("aristoteles_6", "La prudencia es la virtud del entendimiento práctico.", "Aristóteles"),
        ("aristoteles_7", "El hombre es un animal político.", "Aristóteles"),
        ("aristoteles_8", "La educación es el mejor provisionamiento para la vejez.", "Aristóteles"),
        # Nietzsche
        ("nietzsche_1", "Dios ha muerto.", "Nietzsche"),
        ("nietzsche_2", "Lo que no me mata me hace más fuerte.", "Nietzsche"),
        ("nietzsche_3", "La voluntad de poder es la esencia de la vida.", "Nietzsche"),
        ("nietzsche_4", "El que tiene un porqué para vivir puede soportar casi cualquier cómo.", "Nietzsche"),
        ("nietzsche_5", "Sin música, la vida sería un error.", "Nietzsche"),
        ("nietzsche_6", "El hombre es algo que debe ser superado.", "Nietzsche"),
        ("nietzsche_7", "Vive peligrosamente.", "Nietzsche"),
        ("nietzsche_8", "No existen hechos, solo interpretaciones.", "Nietzsche"),
        # Kant
        ("kant_1", "Obra solo según aquella máxima por la cual puedas querer que se convierta, al mismo tiempo, en ley universal.", "Kant"),
        ("kant_2", "El cielo estrellado sobre mí y la ley moral dentro de mí.", "Kant"),
        ("kant_3", "La libertad es la propiedad de la voluntad de ser una ley para sí misma.", "Kant"),
        ("kant_4", "La ilustración es la salida del hombre de su autoculpable minoría de edad.", "Kant"),
        ("kant_5", "El tiempo no es algo objetivo, sino una forma de la intuición sensible.", "Kant"),
        ("kant_6", "La razón no se somete a ninguna autoridad externa.", "Kant"),
        ("kant_7", "La experiencia sin teoría es ciega, pero la teoría sin experiencia es mero juego intelectual.", "Kant"),
        ("kant_8", "La moral no es la doctrina de cómo hacernos felices, sino de cómo debemos ser dignos de la felicidad.", "Kant"),
    ]

    ids = [c[0] for c in citas]
    docs = [c[1] for c in citas]
    metadatas = [{"autor": c[2]} for c in citas]

    col.add(ids=ids, documents=docs, metadatas=metadatas)
    print(f"Insertadas {len(docs)} citas en la colección.")

if __name__ == "__main__":
    main()
