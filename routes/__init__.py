
from .main import main_bp
from .catalogo import catalogo_bp


def register_routes(app):
    app.register_blueprint(main_bp)
    app.register_blueprint(catalogo_bp)
