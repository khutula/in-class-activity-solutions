hobbies_list = ["dance","reading","tv","soccer","sports"]

wakeup_times_dict = {"Weekdays": "6:30am", "Weekends": "9:00am"}

self_dict = {"name":"Karina Hutula", "age": 26,"hobbies": hobbies_list,"wakeup_times": wakeup_times_dict}

print(f"My name is {self_dict['name']}.")

hobby_count = len(self_dict["hobbies"])

print(f"I have {hobby_count} hobbies.")

print(f"I wake up at {self_dict['wakeup_times']['Weekdays']} during the week.")