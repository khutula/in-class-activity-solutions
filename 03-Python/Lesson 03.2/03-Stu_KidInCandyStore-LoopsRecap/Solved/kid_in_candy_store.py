# The list of candies to print to the screen
candy_list = ["Snickers", "Kit Kat", "Sour Patch Kids", "Juicy Fruit", "Swedish Fish", "Skittles", "Hershey Bar", "Starbursts", "M&Ms"]

# The amount of candy the user will be allowed to choose
allowance = 5

# The list used to store all of the candies selected inside of
candy_cart = []

# Print out options
for candy in candy_list:
    print("[" + str(candy_list.index(candy)) + "] " + candy)

for i in range(allowance):
    choices = int(input("Which candy would you like? "))
    candy_cart.append(candy_list[choices])

for candies in candy_cart:
    print(candies)