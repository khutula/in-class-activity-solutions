import os
import csv

titles = []
prices = []
subscribers = []
reviews = []
course_lengths = []




csvpath = os.path.join("..","Resources","web_starter.csv")

with open(csvpath, newline="",encoding="utf8") as csvfiler:
    csvreader = csv.reader(csvfiler, delimiter = ",")
    for row in csvreader:
        titles.append(row[1])
        prices.append(row[4])
        subscribers.append(row[5])
        reviews.append(row[6])
        new_length = row[9].split(" ")
        course_lengths.append(float(new_length[0]))


zipped_up = zip(titles,prices,subscribers,reviews,course_lengths)

output_path = os.path.join("..","Resources","zip_solved.csv")

with open(output_path, "w", newline="") as csvfilew:
    csvwriter = csv.writer(csvfilew,delimiter=",")
    csvwriter.writerow(["Title","Price","Number of Subscribers","Count of Reviews","Course Length"])
    csvwriter.writerows(zipped_up)