# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
app = Flask(__name__)

# @TODO: Create a list of dictionaries
animals = [
    {"name": "Echo", "type": "dog"},
    {"name": "Scout", "type": "rabbit"},
    {"name": "Bob", "type": "fish"},
    {"name": "Alamo", "type": "horse"},
    {"name": "Nikki", "type": "dog"},
    {"name": "Kessie", "type": "dog"}
]

# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
@app.route("/")
def home():
    return render_template("index.html", list=animals)

if __name__ == "__main__":
    app.run(debug=True)
