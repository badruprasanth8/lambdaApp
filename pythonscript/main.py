# example.py
import sys

# Accepting command-line arguments
arguments = sys.argv[1:]  # Exclude the first argument (script name)
if len(arguments) != 2:
    print("Please provide two numbers as arguments.")
    sys.exit(1)

# Extracting arguments and performing addition
try:
    a = int(arguments[0])
    b = int(arguments[1])
    result = a + b
    print("The result of addition is:", result)
except ValueError:
    print("Please provide valid numbers as arguments.")
    sys.exit(1)
