start_num = 0

while True:
    numbers_to_print = int(input("How many numbers? "))

    for i in range(start_num,numbers_to_print):
        print(i)

    user_continue = input("Would you like to continue? y/n ")

    if user_continue == "y":
        start_num = numbers_to_print
        continue
    else:
        break
