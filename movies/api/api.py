from collaborative.run_collaborative import recommend_items_to_user
from flask import  Flask, request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/collab/<int:user_id>', methods=["GET"])
def recommend_items_by_user_id(user_id: int):
    return recommend_items_to_user(user_id)

if __name__ == '__main__':
    app.run(debug=True)