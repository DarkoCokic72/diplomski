from collaborative.run_collaborative import recommend_items_to_user
from flask import  Flask, request
from content_based.run_content_based import ContentBasedRecommender
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
content_based_recommender = ContentBasedRecommender()


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/collab/<int:user_id>', methods=["GET"])
def recommend_items_by_user_id(user_id: int):
    return recommend_items_to_user(user_id)

@app.route('/content-based', methods=["GET"])
def recommend_to_user_cb():
    req = request.get_json(force=True)
    search_string = req["search_string"]
    return content_based_recommender.recommend_content(search_string)

if __name__ == '__main__':
    app.run(debug=True)