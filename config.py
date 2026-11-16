
import os


class Config:
    SECRET_KEY = os.environ.get(
        "SECRET_KEY",
        "la-fabrica-milanesas-development-key"
    )

    DEBUG = True

    JSON_AS_ASCII = False
