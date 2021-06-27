# @TODO: Write a function that returns the arithmetic average for a list of numbers

def average(numbers):
    sum_num = 0
    for number in numbers:
        sum_num += int(number)
    return str(sum_num / len(numbers))

# Test your function with the following:
print(average([1, 5, 9]))
print(average(range(11)))