# Exercise 1

print("Hello World \n" * 4)

# Exercise 2

print((99^3)*8)

# Exercise 3

print(5<3)
print(3==3)
print(3=="3")
# print("3">3)
print("Hello" == "hello")

# Exercise 4

computer_brand = "Chromebook"
print(f"I have a {computer_brand} computer")

# Exercise 5

name = "Amit"
age = 45
shoe_size = 42
info = (f"Hi my name is {name}, i am {age} years old and my shoe size is {shoe_size}!")
print(info)

# Exercise 6
a=6
b=5
if a>b:
    print("Hello World")

# Exercise 7
your_number = input("Please enter a number!")
if int(your_number) % 2 == 0:
    print("You entered an even number!")
else:
    print("Your number is uneven!")

# Exercise 8
coders_name = "Amit"
name = input("What's your name?")
if name == coders_name:
    print("You have the best name in the world!")
else:
    print("Your name is not bad, but there is a nicer name around...")

# Exercise 9

height_inches = input("Please enter your height in inches")
height_cm = int(height_inches) * 2.54
if height_cm >= 145:
    print("Enjoy the ride")
else:
    print("Go eat some banana and come back when you're taller")
