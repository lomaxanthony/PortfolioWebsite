from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from extensions import db

app = Flask(__name__)
app.config.from_object(Config)
CORS(app) 
db.init_app(app)

from routes.routes import bp as main_bp
app.register_blueprint(main_bp)

if __name__ == '__main__':
    app.run(debug=True)