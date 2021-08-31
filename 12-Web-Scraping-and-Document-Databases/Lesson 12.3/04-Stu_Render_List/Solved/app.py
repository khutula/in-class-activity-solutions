# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
app = Flask(__name__)

# @TODO:  Create a route and view function that takes in a list of strings and renders index.html template
@app.route("/")
def home():
    movie_list = ["Killers", "Confessions of a Shopaholic", "The Proposal"]

    return render_template("index.html", list=movie_list)

if __name__ == "__main__":
    app.run(debug=True)
