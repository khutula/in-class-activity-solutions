pie_store = ["Pecan", "Apple Crisp", "Bean", "Banoffee", "Black Bun", "Blueberry", "Buko", "Burek", "Tamale", "Steak"]
message = ""
pie_orders = {"Pecan": 0, "Apple Crisp": 0, "Bean": 0, "Banoffee": 0, "Black Bun": 0, "Blueberry": 0, "Buko": 0, "Burek": 0, "Tamale": 0, "Steak": 0}
order_again = "y"
pie_count = 0

print("Welcome to the House of Pies! Here are our pies:")
print("____________________________________")

for pie in pie_store:
    message += "(" + str(pie_store.index(pie)+1) + ") " + pie
    if pie_store.index(pie) < 9:
        message += ", "

print(message)

while order_again == "y":
    order = int(input("Which pie would you like to order? (1-10) "))

    print(f"Great! We'll have that {pie_store[order-1]} right out for you.")

    pie_count += 1
    pie_orders[pie_store[order-1]] += 1

    order_again = input("Would you like to make another order? (y/n) ")

print(f"You ordered {pie_count} pies!")

for key, value in pie_orders.items():
    print(f"{value} {key}")