
from flask import Blueprint, jsonify

catalogo_bp = Blueprint(
    "catalogo",
    __name__,
    url_prefix="/api/catalogo"
)

CATEGORIAS = [
    {
        "id": "milanesas",
        "nombre": "Milanesas"
    },
    {
        "id": "elaborados",
        "nombre": "Elaborados"
    },
    {
        "id": "congelados",
        "nombre": "Congelados"
    },
    {
        "id": "combos",
        "nombre": "Combos"
    },
    {
        "id": "vegetarianas",
        "nombre": "Vegetarianas"
    }
]


@catalogo_bp.route("/categorias")
def obtener_categorias():
    return jsonify(CATEGORIAS)
