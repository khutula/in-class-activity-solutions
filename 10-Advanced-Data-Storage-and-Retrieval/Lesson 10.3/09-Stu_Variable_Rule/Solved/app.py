from flask import Flask, jsonify

justice_league_members = [
    {"superhero": "Aquaman", "real_name": "Arthur Curry"},
    {"superhero": "Batman", "real_name": "Bruce Wayne"},
    {"superhero": "Cyborg", "real_name": "Victor Stone"},
    {"superhero": "Flash", "real_name": "Barry Allen"},
    {"superhero": "Green Lantern", "real_name": "Hal Jordan"},
    {"superhero": "Superman", "real_name": "Clark Kent/Kal-El"},
    {"superhero": "Wonder Woman", "real_name": "Princess Diana"}
]

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/api/v1.0/justice-league")
def justice_league():
    """Return the justice league data as json"""

    return jsonify(justice_league_members)


@app.route("/")
def welcome():
    return (
        f"Welcome to the Justice League API!<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/justice-league<br/>"
        f"/api/v1.0/justice-league/Aquaman</br>"
        f"/api/v1.0/justice-league/Batman</br>"
        f"/api/v1.0/justice-league/Cyborg</br>"
        f"/api/v1.0/justice-league/Flash</br>"
        f"/api/v1.0/justice-league/Green%20Lantern</br>"
        f"/api/v1.0/justice-league/Superman</br>"
        f"/api/v1.0/justice-league/Wonder%20Woman</br>"
    )


"""TODO: Handle API route with variable path to allow getting info
for a specific character based on their 'superhero' name """
@app.route("/api/v1.0/justice-league/<name>")
def return_json(name):
    for index, member in enumerate(justice_league_members):
        if member.get("superhero") == name:
            return_dict = justice_league_members[index]
            return jsonify(return_dict)

    return jsonify({"error":f"Character with superhero name {name} not found."}), 404

if __name__ == "__main__":
    app.run(debug=True)