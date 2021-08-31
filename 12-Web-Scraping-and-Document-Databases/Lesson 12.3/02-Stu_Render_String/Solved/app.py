# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
app = Flask(__name__)

# @TODO:  Create a route and view function that takes in a string and renders index.html template
@app.route("/")
def welcome():
    return render_template("index.html", name="Karina", hobby="wood-working")

@app.route("/bonus")
def bonus():
    return render_template("bonus.html", name="Karina", hobby="wood-working")

if __name__ == "__main__":
    app.run(debug=True)
