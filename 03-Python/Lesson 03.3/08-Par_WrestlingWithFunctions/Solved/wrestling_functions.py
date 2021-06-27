import os
import csv

# Path to collect data from the Resources folder
wrestling_csv = os.path.join("..","Resources","WWE-Data-2016.csv")

# Define the function and have it accept the 'wrestlerData' as its sole parameter
def print_percentages(wrestlerData):

    # Find the total number of matches wrestled
    total_matches = int(wrestlerData[1]) + int(wrestlerData[2]) + int(wrestlerData[3])

    # Find the percentage of matches won
    win_percent = int(wrestlerData[1]) / total_matches *100

    # Find the percentage of matches lost
    loss_percent = int(wrestlerData[2]) / total_matches *100

    # Find the percentage of matches drawn
    tie_percent = int(wrestlerData[3]) / total_matches *100

    # Print out the wrestler's name and their percentage stats
    print(f"Stats for {wrestlerData[0]}")
    print(f"WIN PERCENT: {win_percent}")
    print(f"LOSS PERCENT: {loss_percent}")
    print(f"DRAW PERCENT: {tie_percent}")
    if loss_percent > 50:
        type_of_wrestler = "Jobber"
    else:
        type_of_wrestler = "Superstar"
    print(f"{wrestlerData[0]} is a {type_of_wrestler}")

# Read in the CSV file
with open(wrestling_csv, 'r', encoding='utf-8') as csvfile:

    # Split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')

    # Prompt the user for what wrestler they would like to search for
    name_to_check = input("What wrestler do you want to look for? ")

    # Loop through the data
    for row in csvreader:

        # If the wrestler's name in a row is equal to that which the user input, run the 'print_percentages()' function
        if(name_to_check == row[0]):
            print_percentages(row)
