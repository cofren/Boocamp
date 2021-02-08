# Daily Challenge: Build Up A String
str_length = 3
user_str = input(f"Please enter a string with exactly {str_length} characters:")

if len(user_str) < str_length:
    print("string not long enough")
elif len(user_str) > str_length:
    print("string to long")

print(user_str[0])
print(user_str[-1])

str_to_print =[]
for i in user_str:
    str_to_print.append(i)
    print(str_to_print)

import random
shuf = random.shuffle(str_to_print)
print(shuf)
