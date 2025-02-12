# filepath: /c:/Users/lomax/Website/PortfolioWebsite/backend/routes.py
from flask import Blueprint, request, jsonify
from extensions import db
from models import Project

bp = Blueprint('main', __name__)

@bp.route('/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([project.__repr__() for project in projects])

@bp.route('/projects/<int:id>', methods=['GET'])
def get_project(id):
    project = Project.query.get_or_404(id)
    return jsonify(project.__repr__())

@bp.route('/projects', methods=['POST'])
def create_project():
    data = request.get_json()
    new_project = Project(
        title=data['title'],
        description=data['description'],
        tech_stack=data['tech_stack']
    )
    db.session.add(new_project)
    db.session.commit()
    return jsonify(new_project.__repr__()), 201

@bp.route('/projects/<int:id>', methods=['PUT'])
def update_project(id):
    data = request.get_json()
    project = Project.query.get_or_404(id)
    project.title = data['title']
    project.description = data['description']
    project.tech_stack = data['tech_stack']
    db.session.commit()
    return jsonify(project.__repr__())

@bp.route('/projects/<int:id>', methods=['DELETE'])
def delete_project(id):
    project = Project.query.get_or_404(id)
    db.session.delete(project)
    db.session.commit()
    return '', 204