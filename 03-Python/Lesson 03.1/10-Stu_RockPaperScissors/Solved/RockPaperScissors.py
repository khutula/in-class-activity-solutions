import random

print("Let's play Rock, Paper, Scissors.")

user_choice = input("Enter your choice (r, p, s): ")
comp_choice = random.choice(["r","p","s"])

if user_choice == "r" and comp_choice == "P":
    print("You chose rock. The computer chose paper.")
    print("Yay! You won.")
elif user_choice == "r" and comp_choice == "s":
    print("You chose rock. The computer chose scissors.")
    print("Sorry. You lose.")
elif user_choice == "p" and comp_choice == "s":
    print("You chose paper. The computer chose scissors.")
    print("Sorry. You lose.")
elif user_choice == "p" and comp_choice == "r":
    print("You chose paper. The computer chose rock.")
    print("Yay! You won.")
elif user_choice == "s" and comp_choice == "r":
    print("You chose scissors. The computer chose rock.")
    print("Sorry. You lose.")
elif user_choice == "s" and comp_choice == "p":
    print("You chose scissors. The computer chose paper.")
    print("Yay! You won.")
else:
    if user_choice == "r":
        choice = "rock"
    elif user_choice == "p":
        choice = "paper"
    else:
        choice = "scissors"
    print("You chose " + choice + ". The computer chose " + choice + ".")
    print("You tied.")