from extensions import db

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    tech_stack = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'tech_stack': self.tech_stack
        }