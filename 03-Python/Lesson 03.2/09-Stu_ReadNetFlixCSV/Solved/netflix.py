import os
import csv

csvpath = os.path.join("..","Resources","netflix_ratings.csv")

search = input("What show or movie are you looking for? ")
found = False

with open(csvpath, newline = "") as csvfile:
    csvreader = csv.reader(csvfile,delimiter=",")
    for row in csvreader:
        if row[0] == search:
            print(f"{search} is rated {row[1]} with a rating of {row[3]}.") 
            found = True
            break

if found == False:
    print("Your video could not be found.")