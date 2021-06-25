#import modules
import os
import csv

# set path for file
csvpath = os.path.join("..","Resources","netflix_ratings.csv")

#prompt user for video lookup
search = input("What show or movie are you looking for? ")

#set variable to check if we found the video
found = False

# open the csv
with open(csvpath, newline = "") as csvfile:
    csvreader = csv.reader(csvfile,delimiter=",")

    # loop through looking through video
    for row in csvreader:
        if row[0] == search:
            print(f"{search} is rated {row[1]} with a rating of {row[5]}.") 

            # set variable to true that we found the video
            found = True

            # stop searching after first result returned
            break

#print this statement if the video cannot be found
if found == False:
    print("Your video could not be found.")