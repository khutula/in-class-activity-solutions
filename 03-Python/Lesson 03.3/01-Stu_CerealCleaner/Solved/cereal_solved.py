import os
import csv

fiber_5 = []

cereal_csv = os.path.join("..", "Resources", "cereal_bonus.csv")

with open(cereal_csv, newline="", encoding="utf-8") as csvfile:
    csvreader = csv.reader(csvfile,delimiter=",")
    for row in csvreader:
        if float(row[7]) >= 5:
            fiber_5.append(row[0])

for cereal in fiber_5:
    print(cereal)