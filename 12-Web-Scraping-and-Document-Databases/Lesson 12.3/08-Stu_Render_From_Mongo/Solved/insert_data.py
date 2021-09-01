import pymongo

conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

db = client.store_db

stock = db.stock.find()

db.stock.insert_many([
    {"Item": "Rice", "Type": "Food", "Cost": 2.79, "Stock": 257},
    {"Item": "TV", "Type": "Electronics", "Cost": 499.99, "Stock": 8},
    {"Item": "Fridge", "Type": "Appliance", "Cost": 1899.99, "Stock": 5},
    {"Item": "Chili", "Type": "Food", "Cost": 1.99, "Stock": 53},
    {"Item": "Wood Plank", "Type": "Wood", "Cost": 8.55, "Stock": 100}
])