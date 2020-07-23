# Create a function that returns True when num1 is equal to num2; otherwise return False

def is_same_num(num1, num2):
    if num1 == num2:
        return True
    else:
        return False


# Create a function that takes a list and returns the first element.

def get_first_value(number_list):
    return number_list[0]

# Create a function that takes a number as its only argument and
# returns True if it's less than or equal to zero, otherwise return False.


def less_than_or_equal_to_zero(num):
    if num <= 0:
        return True
    else:
        return False

# Create a function that takes length and width and finds the perimeter of a rectangle


def find_perimeter(length, width):
    return length * 2 + width * 2

# Create a function that takes a list of numbers. Return the largest number in the list.


def findLargestNum(nums):
    nums.sort()
    return nums[-1]

# Given two numbers, return True if the sum of both
# numbers is less than 100. Otherwise return False.


def less_than_100(a, b):
    if a + b < 100:
        return True
    else:
        return False

# Write a function that takes the base and height of a triangle and return its area.


def tri_area(base, height):
    return base * height / 2

# Create a function that takes the number of wins, draws and losses and
# calculates the number of points a football team has obtained so far.
# A win receives 3 points, a draw 1 point and a loss 0 points.


def football_points(wins, draws, losses):
    return wins*3 + draws

# Create a function that takes a list of numbers and returns the smallest number in the list.


def find_smallest_num(lst):
    lst.sort()
    return lst[0]

# Write a function that takes two integers (hours, minutes),
# converts them to seconds, and adds them.


def convert(hours, minutes):
    return hours * 60 * 60 + minutes * 60


# Create a function that returns True if an integer is evenly divisible by 5, and False otherwise.

def divisible_by_five(n):
    if n % 5:
        return False
    else:
        return True

# Create a function that finds the maximum range of a triangle's third edge,
# where the side lengths are all integers.


def next_edge(side1, side2):
    return (side1 + side2) - 1

# Create a function that takes in three arguments (prob, prize, pay) and
# returns true if prob * prize > pay; otherwise return false.


def profitable_gamble(prob, prize, pay):
    if prob * prize > pay:
        return True
    else:
        return False

# Create a function that takes an integer and return True if it's divisible
# by 100, otherwise return False.


def divisible(num):
    if num % 100:
        return True
    else:
        return False

# In this challenge, a farmer is asking you to tell him how many legs can
# be counted among all his animals. The farmer breeds three species:

# chickens = 2 legs
# cows = 4 legs
# pigs = 4 legs
# The farmer has counted his animals and he gives you a subtotal for each species.
# You have to implement a function that returns the total number of legs of all the animals.


def animals(chickens, cows, pigs):
    return (chickens * 2) + (cows * 4) + (pigs * 4)


# Create a function that takes an integer and return True if
# it's divisible by 100, otherwise return False.

def divisible(num):
    if num % 100 == 0:
        return True
    else:
        return False

# Create a function that takes a list and returns the sum of all numbers in the list.


def get_sum_of_elements(lst):
    return sum(lst)

# Given a list of integers, return the difference between the largest
# and smallest integers in the list.


def difference(nums):
    return max(nums) - min(nums)

# Create a function that takes a name and returns a greeting in the form of a string.


def hello_name(name):
    return "Hello " + name + "!"


# Create a function that accepts a list and returns the last item in the list.
# The list can be either homogeneous or heterogeneous.


def get_last_item(lst):
    return lst[-1]

# Create a function that returns True if a string is empty and False otherwise.


def is_empty(s):
    if len(s) == 0:
        return True
    else:
        return False

# Create a function that returns the number of frames shown in a given
# number of minutes for a certain FPS.


def frames(minutes, fps):
    return (fps * 60) * minutes


# Given two strings, first_name and last_name, return a single string in the format "last, first".

def concat_name(first_name, last_name):
    return last_name + ", " + first_name

# Given two integers, a and b, return True if a can be divided evenly by b.
# Return False otherwise.


def divides_evenly(a, b):
    if a % b == 1:
        return True
    else:
        return False
