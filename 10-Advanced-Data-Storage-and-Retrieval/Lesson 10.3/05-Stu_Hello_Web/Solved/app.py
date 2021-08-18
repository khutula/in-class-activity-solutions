# import dependencies
from flask import Flask

# create app instance
app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome to my API!"

@app.route("/about")
def about():
    return "My name is Anna, and I live on Earth."

@app.route("/contact")
def contact():
    return "You can email me at whatever@email.com"

if __name__ == "__main__":
    app.run(debug=True)