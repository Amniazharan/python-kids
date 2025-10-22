export type Lesson = {
  id: string;
  week: number;
  title: string;
  phase: number;
  codeStarter: string;
  instructions: string[];
  challenge?: string;
  browserVersion?: string; // Auto-load browser version
};

export const lessons: Lesson[] = [
  // ========== PHASE 1: PYTHON BASICS (MINGGU 1-4) ==========
  {
    id: "w1",
    week: 1,
    title: "Hello Python! First Program",
    phase: 1,
    codeStarter: `print("Hello World!")
print("My name is Ali")
print("I love pizza")
print("Python is fun!")

# Experiment dengan pattern
print("*" * 10)
print("=" * 20)`,
    instructions: [
      "🐍 Cetak mesej pertama kamu!",
      "Tukar 'Ali' kepada nama kamu sendiri",
      "Cuba print 5 ayat tentang diri kamu",
      "Tekan Run dan lihat magic berlaku! ✨",
    ],
    challenge: "Print 10 benda yang kamu suka (makanan, warna, hobi)",
  },

   {
    id: "w2",
    week: 2,
    title: "Print & Simple Math",
    phase: 1,
    codeStarter: `# Python boleh jadi calculator!
print("=== MATH OPERATIONS ===")
print()

print("Addition:")
print("10 + 5 =", 10 + 5)
print()

print("Subtraction:")
print("20 - 7 =", 20 - 7)
print()

print("Multiplication:")
print("6 × 4 =", 6 * 4)
print()

print("Division:")
print("20 ÷ 4 =", 20 / 4)
print()

print("=== AGE CALCULATOR ===")
print()
age = 7
years_later = 5
print("I am", age, "years old")
print("In", years_later, "years, I will be:", age + years_later)
print()

print("=== PATTERN FUN ===")
print("🎉" * 5)
print("=" * 20)
print("★" * 10)`,
    instructions: [
      "🔢 Computer boleh kira math!",
      "Cuba tukar nombor dan run semula",
      "Buat age calculator untuk umur kamu",
      "Lihat pattern dengan * operator",
    ],
    challenge: "Buat 5 soalan math dan let computer solve dengan print yang cantik!",
  },


  {
    id: "w3",
    week: 3,
    title: "Variables - Kotak Ajaib",
    phase: 1,
    codeStarter: `# Variables simpan maklumat dalam "kotak"
name = "Ali"
age = 7
favorite_color = "blue"

print("Name:", name)
print("Age:", age)
print("Color:", favorite_color)

# Update nilai variable
score = 10
print("Score:", score)
score = score + 5
print("New score:", score)

# Game simulation
lives = 3
print("Starting lives:", lives)
lives = lives - 1
print("Lives left:", lives)`,
    instructions: [
      "📦 Variables macam kotak untuk simpan data",
      "Tukar nama, umur, warna ikut kamu punya",
      "Cuba tambah variable baru: favorite_food",
      "Lihat macam mana score berubah!",
    ],
    challenge: "Buat score keeper untuk game: start 0, tambah 10, tambah 20, print total",
  },

  {
    id: "w4",
    week: 4,
    title: "Input - Computer Dengar Kita!",
    phase: 1,
    codeStarter: `# BROWSER VERSION (simulation)
# Real input() needs Thonny!

# Simulate user input
name = "Ali"  # Tukar ni kepada nama kamu
age = "7"     # Tukar ni kepada umur kamu
color = "blue"  # Tukar ni kepada warna favorite

print("=" * 30)
print("Hello", name + "! 👋")
print("You are", age, "years old!")
print("Your favorite color is", color)
print("Nice to meet you!")
print("=" * 30)

# For REAL input(), copy this to Thonny:
# name = input("What is your name? ")
# age = input("How old are you? ")
# color = input("Favorite color? ")`,
    instructions: [
      "💬 Browser tak support input(), jadi kita simulate!",
      "Tukar values untuk name, age, color",
      "Run dan lihat output!",
      "💡 Copy kod dalam comment ke Thonny untuk real input!",
    ],
    challenge: "Tambah 2 variables lagi: hobby dan food, then print semua!",
  },

  // ========== PHASE 2: TURTLE GRAPHICS (MINGGU 5-9) ==========
    {
    id: "w5",
    week: 5,
    title: "Turtle Graphics - Square",
    phase: 2,
    codeStarter: `# Turtle graphics in browser!
import turtle

t = turtle.Turtle()

# Draw square
for i in range(4):
    t.forward(100)
    t.right(90)

print("Square drawn!")`,
    instructions: [
      "🐢 Real turtle graphics dalam browser!",
      "Cuba run dan lihat square di sebelah!",
      "forward() gerak ke depan",
      "right() pusing kanan",
    ],
    challenge: "Cuba lukis rectangle: forward(150), right(90), forward(100)...",
  },

  {
    id: "w6",
    week: 6,
    title: "Turtle - Multiple Shapes",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()

# Square
for i in range(4):
    t.forward(80)
    t.right(90)

# Triangle
t.penup()
t.forward(120)
t.pendown()

for i in range(3):
    t.forward(80)
    t.left(120)

print("Shapes drawn!")`,
    instructions: [
      "🎨 Lukis square dan triangle!",
      "penup() - stop drawing",
      "pendown() - start drawing",
      "Cuba tukar sizes!",
    ],
    challenge: "Tambah pentagon (5 sides, 72° each turn)",
  },

  {
    id: "w7",
    week: 7,
    title: "Colors & Patterns",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()

colors = ["red", "blue", "green", "orange", "purple"]

for i in range(5):
    t.pencolor(colors[i])
    t.pensize(i + 1)
    t.forward(100)
    t.right(144)

print("Rainbow star!")`,
    instructions: [
      "🌈 Rainbow colors!",
      "pencolor() tukar warna",
      "pensize() tukar ketebalan",
      "Cuba tukar colors!",
    ],
    challenge: "Buat circle dengan 8 warna berbeza",
  },

  {
    id: "w8",
    week: 8,
    title: "Spiral Pattern",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()

colors = ["red", "orange", "yellow", "green", "blue", "purple"]

for i in range(36):
    t.pencolor(colors[i % 6])
    t.forward(100)
    t.right(170)

print("Beautiful spiral!")`,
    instructions: [
      "🌀 Spiral magic!",
      "Loop creates repeating pattern",
      "% 6 makes colors repeat",
      "Cuba tukar angle!",
    ],
    challenge: "Tukar 170 kepada 165, lihat pattern baru!",
  },

  {
    id: "w9",
    week: 9,
    title: "Star Pattern",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()
t.pencolor("gold")

# Big star
for i in range(5):
    t.forward(150)
    t.right(144)

print("Star complete!")`,
    instructions: [
      "⭐ Draw star pattern!",
      "5 points, 144° turns",
      "Cuba tukar warna kepada 'blue'",
      "Cuba tukar size kepada 200",
    ],
    challenge: "Buat 3 stars dengan sizes berbeza",
  },


  // ========== PHASE 3: LOGIC & DECISIONS (MINGGU 10-14) ==========
  {
    id: "w10",
    week: 10,
    title: "If Statements - Make Decisions",
    phase: 3,
    codeStarter: `# BROWSER VERSION - Decisions!
print("🤔 DECISION MAKING")
print("=" * 40)
print()

# Age check (simulate)
age = 8  # Tukar ni!

print(f"Your age: {age}")

if age >= 10:
    print("✅ You are 10 or older! 🎉")

if age < 10:
    print("✅ You are younger than 10! 🎈")

print()

# Temperature check
temp = 32  # Tukar ni!

print(f"Temperature: {temp}°C")

if temp > 30:
    print("🔥 It's hot! Drink water!")

if temp < 20:
    print("🧊 It's cold! Wear jacket!")

if temp >= 20 and temp <= 30:
    print("😊 Perfect weather!")

print()
print("=" * 40)`,
    instructions: [
      "🤔 If statements check conditions",
      "Tukar nilai age dan temp",
      "Run berkali-kali dengan nilai berbeza",
      "Computer makes different decisions!",
    ],
    challenge: "Tambah score checker: >80='Excellent!', >60='Good!', >40='OK!', else='Try harder!'",
  },

  {
    id: "w11",
    week: 11,
    title: "If-Else - Two Choices",
    phase: 3,
    codeStarter: `# BROWSER VERSION
print("🔀 IF-ELSE DECISIONS")
print("=" * 40)
print()

# Age check
age = 12  # Tukar nilai ni!

print(f"Age: {age}")
if age >= 13:
    print("✅ You are a teenager! 🎮")
else:
    print("✅ You are a kid! 🎨")

print()

# Even or Odd
number = 7  # Tukar nilai ni!

print(f"Number: {number}")
if number % 2 == 0:
    print(f"✅ {number} is EVEN! ✌️")
else:
    print(f"✅ {number} is ODD! ☝️")

print()

# Password check
password = "python123"  # Tukar password!
user_input = "python123"  # Tukar input!

print(f"Your password: {user_input}")
if password == user_input:
    print("✅ Access granted! 🎉")
else:
    print("❌ Wrong password! Try again!")

print()
print("=" * 40)`,
    instructions: [
      "🔀 Else: if condition false, do this",
      "Tukar values dan test berbeza scenarios",
      "Even/Odd checker guna modulo (%)",
      "Password checker guna == (equal)",
    ],
    challenge: "Buat grade checker: score >= 50 = 'PASS', else = 'FAIL'",
  },

  {
    id: "w12",
    week: 12,
    title: "Random - Surprise!",
    phase: 3,
    codeStarter: `import random

# MAGIC 8 BALL - Works perfectly in browser!
print("=" * 40)
print("🎱 MAGIC 8 BALL")
print("=" * 40)
print()

answers = [
    "Yes! ✅",
    "No! ❌",
    "Maybe... 🤔",
    "Ask again later ⏰",
    "Definitely! 💯",
    "Don't count on it 🙅",
    "Looking good! 👍",
    "Not sure... 🤷"
]

# Simulate asking question
question = "Will I be a programmer?"
print(f"Question: {question}")
print()

answer = random.choice(answers)

print("🔮 The Magic 8 Ball says:")
print(answer)
print()

# Bonus: Dice roll!
print("=" * 40)
print("🎲 DICE ROLLER")
dice = random.randint(1, 6)
print(f"You rolled: {dice}")
print("=" * 40)`,
    instructions: [
      "🎲 Random creates surprise!",
      "Magic 8 Ball picks random answer",
      "random.choice() picks from list",
      "random.randint() picks number in range",
      "Run multiple times for different results!",
    ],
    challenge: "Buat coin flipper: random heads atau tails",
  },

  {
    id: "w13",
    week: 13,
    title: "Lists - Collection Fun",
    phase: 3,
    codeStarter: `# Lists - Works perfectly!
print("📝 WORKING WITH LISTS")
print("=" * 40)
print()

# Favorite things
fruits = ["apple", "banana", "orange", "mango"]
colors = ["red", "blue", "green", "yellow", "purple"]

print("My favorite fruits:")
for fruit in fruits:
    print("🍎", fruit)

print()
print("My favorite colors:")
for color in colors:
    print("🎨", color)

print()

# Add new item
print("Adding strawberry...")
fruits.append("strawberry")
print("Updated fruits:", fruits)

print()

# Access specific items
print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])
print("Second fruit:", fruits[1])

print()

# List length
print("Total fruits:", len(fruits))
print("Total colors:", len(colors))

print()
print("=" * 40)`,
    instructions: [
      "📝 Lists store multiple items!",
      "Loop through list dengan for",
      "append() adds new item",
      "Index [0] = first, [-1] = last",
      "len() tells how many items",
    ],
    challenge: "Buat shopping list dengan 5 items, print dengan numbering (1. milk, 2. bread...)",
  },

  {
    id: "w14",
    week: 14,
    title: "Mini Project: Guessing Game",
    phase: 3,
    codeStarter: `import random

# NUMBER GUESSING GAME (browser simulation)
print("=" * 40)
print("🎯 NUMBER GUESSING GAME (Simulation)")
print("=" * 40)
print()

secret = random.randint(1, 10)
print(f"Secret number generated: (between 1-10)")
print()

# Simulate 3 guesses
guesses = [5, 7, 8]  # Tukar values ni!
attempts = 0

print("Let's simulate 3 guesses:")
print()

for guess in guesses:
    attempts += 1
    print(f"Attempt {attempts}: You guess {guess}")
    
    if guess < secret:
        print("📉 Too low! Try again!")
    elif guess > secret:
        print("📈 Too high! Try again!")
    else:
        print(f"🎉 YOU GOT IT! The number was {secret}!")
        print(f"You took {attempts} attempts!")
        print("⭐" * attempts)
        break
    print()

if guess != secret:
    print(f"Game Over! The secret was {secret}")

print()
print("💡 For real game with input(), copy to Thonny!")
print("=" * 40)`,
    instructions: [
      "🎮 Complete guessing game!",
      "Tukar nilai dalam guesses list",
      "Computer gives hints: too high/too low",
      "Game ends when guess matches secret",
      "Copy ke Thonny untuk input() version!",
    ],
    challenge: "Tukar range to 1-20 dan try simulate finding number",
  },

  // ========== PHASE 4: FUNCTIONS & POWER (MINGGU 15-19) ==========
  {
    id: "w15",
    week: 15,
    title: "Functions - Code Blocks",
    phase: 4,
    codeStarter: `# FUNCTIONS - Organize code!
print("🔧 LEARNING FUNCTIONS")
print("=" * 40)
print()

def say_hello():
    print("👋 Hello!")
    print("Welcome to Python!")
    print("-" * 30)

def say_goodbye():
    print("👋 Goodbye!")
    print("See you next time!")
    print("-" * 30)

# Call functions
say_hello()
print("Let's code together!")
print()
say_goodbye()

print()

# Function with parameter
def greet(name):
    print(f"Hello, {name}! 🌟")

print("Greeting friends:")
greet("Ali")
greet("Sarah")
greet("Ahmad")

print()

# Function with return
def add(a, b):
    return a + b

result = add(10, 5)
print(f"10 + 5 = {result}")

result2 = add(100, 50)
print(f"100 + 50 = {result2}")

print()
print("=" * 40)`,
    instructions: [
      "🔧 Functions organize code",
      "Define once, call many times",
      "Parameters make functions flexible",
      "return sends value back",
      "Reusable dan clean code!",
    ],
    challenge: "Buat function multiply(a, b) yang return a * b, test dengan 3 examples",
  },

  {
    id: "w16",
    week: 16,
    title: "Functions dengan Turtle",
    phase: 4,
    codeStarter: `# BROWSER SIMULATION - Functions for shapes
print("🏠 HOUSE DRAWING SIMULATION")
print("=" * 40)
print()

def draw_square():
    print("Drawing SQUARE (house body):")
    for i in range(4):
        print(f"  Side {i+1}: forward 100, right 90°")
    print("✅ Square done!")
    print()

def draw_triangle():
    print("Drawing TRIANGLE (roof):")
    for i in range(3):
        print(f"  Side {i+1}: forward 100, left 120°")
    print("✅ Triangle done!")
    print()

def draw_rectangle(width, height):
    print(f"Drawing RECTANGLE ({width}x{height}):")
    print(f"  forward {width}, right 90°")
    print(f"  forward {height}, right 90°")
    print(f"  forward {width}, right 90°")
    print(f"  forward {height}")
    print("✅ Rectangle done!")
    print()

# Build house!
print("Building a HOUSE:")
print()
draw_square()        # Body
draw_triangle()      # Roof
draw_rectangle(30, 40)  # Door

print("🏠 House complete!")
print()
print("=" * 40)
print("💡 Copy to Thonny for real graphics!")`,
    instructions: [
      "🏠 Functions for reusable shapes!",
      "Each function draws one shape",
      "Combine functions to build complex drawings",
      "Parameters customize size",
      "Copy to Thonny untuk lukis betul!",
    ],
    challenge: "Plan function draw_star() dengan parameter size",
  },

  {
    id: "w17",
    week: 17,
    title: "Nested Loops - Power Up!",
    phase: 4,
    codeStarter: `# NESTED LOOPS - Grid pattern
print("🎨 COLORFUL GRID SIMULATION")
print("=" * 40)
print()

colors = ["red", "orange", "yellow", "green", "blue", "purple"]

print("Creating 6x6 colored grid:")
print()

for row in range(6):
    print(f"Row {row + 1}:")
    for col in range(6):
        color = colors[col]
        print(f"  [{color:7}]", end="")
    print()  # New line after each row
    print()

print()
print("✅ Grid pattern complete!")
print("=" * 40)
print("💡 In Thonny with turtle, ini jadi colorful squares!")`,
    instructions: [
      "🎨 Nested loops = loop dalam loop!",
      "Outer loop: rows",
      "Inner loop: columns",
      "Creates grid/matrix patterns",
      "Powerful untuk complex designs!",
    ],
    challenge: "Modify untuk 8x8 grid dengan tambah 2 warna",
  },

  {
    id: "w18",
    week: 18,
    title: "While Loops - Keep Going",
    phase: 4,
    codeStarter: `# WHILE LOOPS - Run until condition false
print("🚀 ROCKET COUNTDOWN")
print("=" * 40)
print()

count = 10

while count > 0:
    print(count)
    count = count - 1

print("BLAST OFF! 🚀")
print()

# Collecting items (simulation)
print("=" * 40)
print("🎮 ITEM COLLECTOR (Simulation)")
print("=" * 40)
print()

items = 0
target = 5
actions = ["yes", "yes", "no", "yes", "no", "yes", "yes"]

print(f"Goal: Collect {target} items")
print()

for action in actions:
    if items >= target:
        break
    
    print(f"Collect item? {action}")
    if action == "yes":
        items += 1
        print(f"  ✅ Items collected: {items}/{target}")
    else:
        print("  ❌ Skipped!")
    print()

if items >= target:
    print("🎉 You collected all items!")
else:
    print(f"Need {target - items} more items...")

print()
print("=" * 40)`,
    instructions: [
      "🔄 While loop runs until condition false",
      "Countdown: while count > 0",
      "Careful: make sure loop ends!",
      "Use counter or break statement",
      "Good for games and simulations",
    ],
    challenge: "Buat countdown from 20 to 0, print 'Hurry!' bila count < 5",
  },

  {
    id: "w19",
    week: 19,
    title: "Strings - Text Fun",
    phase: 4,
    codeStarter: `# STRING MANIPULATION - Text magic!
print("📝 STRING MAGIC")
print("=" * 40)
print()

name = "Python"

print("Original:", name)
print("Uppercase:", name.upper())
print("Lowercase:", name.lower())
print("Length:", len(name))
print()

# Name art (simulation)
my_name = "Ali"  # Tukar nama!

print("=" * 40)
print("✨ NAME ART ✨")
print("=" * 40)
for letter in my_name:
    print(letter * 5)
print("=" * 40)
print()

# String slicing
word = "PROGRAMMING"
print("Word:", word)
print("First 4 letters:", word[0:4])
print("Last 4 letters:", word[-4:])
print("Middle:", word[3:8])
print()

# String concatenation
first = "Hello"
second = "World"
combined = first + " " + second
print("Combined:", combined)
print()

# Reverse string
text = "PYTHON"
reversed_text = text[::-1]
print("Original:", text)
print("Reversed:", reversed_text)

print()
print("=" * 40)`,
    instructions: [
      "📝 Strings are powerful!",
      "Methods: upper(), lower(), len()",
      "Slicing: [start:end]",
      "Concatenate with +",
      "[::-1] reverses string!",
    ],
    challenge: "Tukar my_name, create art dengan 10 repetitions",
  },

  // ========== PHASE 5: BIG PROJECTS (MINGGU 20-24) ==========
  {
    id: "w20",
    week: 20,
    title: "Creative Project: Drawing App",
    phase: 5,
    codeStarter: `# DRAWING APP SIMULATION
print("🎨 DRAWING APP COMMANDS")
print("=" * 40)
print()

print("Available commands:")
print("  'forward' - Move forward")
print("  'left' - Turn left 30°")
print("  'right' - Turn right 30°")
print("  'color' - Change color")
print()

# Simulate drawing
position = [0, 0]
angle = 0
color = "black"
colors = ["red", "blue", "green", "yellow", "purple"]
color_index = 0

commands = ["forward", "right", "forward", "color", "forward", "left", "forward"]

print("Executing drawing commands:")
print()

for i, cmd in enumerate(commands, 1):
    print(f"Step {i}: {cmd}")
    
    if cmd == "forward":
        print(f"  Drawing with {color} - move forward 50")
    elif cmd == "left":
        angle -= 30
        print(f"  Turn left - now facing {angle}°")
    elif cmd == "right":
        angle += 30
        print(f"  Turn right - now facing {angle}°")
    elif cmd == "color":
        color_index = (color_index + 1) % len(colors)
        color = colors[color_index]
        print(f"  Color changed to {color}")
    
    print()

print("✅ Drawing complete!")
print()
print("=" * 40)
print("💡 In Thonny with turtle, guna arrow keys untuk control!")`,
    instructions: [
      "🎨 Interactive drawing app simulation!",
      "Commands control turtle movement",
      "Can change colors dynamically",
      "This shows how keyboard controls work",
      "Copy to Thonny for real interactive version!",
    ],
    challenge: "Design sequence untuk lukis house guna these commands",
  },

  {
    id: "w21",
    week: 21,
    title: "Project: Simple Calculator",
    phase: 5,
    codeStarter: `# CALCULATOR PROJECT - Full working version!
print("=" * 40)
print("🧮 SIMPLE CALCULATOR")
print("=" * 40)
print()

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: Cannot divide by zero!"
    return a / b

def power(a, b):
    return a ** b

# Demo calculations
print("Demo Mode:")
print()

calculations = [
    ("add", 10, 5),
    ("subtract", 20, 7),
    ("multiply", 6, 4),
    ("divide", 20, 4),
    ("power", 2, 3),
]

for operation, num1, num2 in calculations:
    print(f"{num1} {operation} {num2} = ", end="")
    
    if operation == "add":
        print(add(num1, num2))
    elif operation == "subtract":
        print(subtract(num1, num2))
    elif operation == "multiply":
        print(multiply(num1, num2))
    elif operation == "divide":
        print(divide(num1, num2))
    elif operation == "power":
        print(power(num1, num2))

print()
print("=" * 40)
print("💡 Copy to Thonny for menu-based version with input()!")`,
    instructions: [
      "🧮 Full calculator with all operations!",
      "Functions untuk setiap operation",
      "Error handling for divide by zero",
      "Works perfectly in browser!",
      "Copy to Thonny for interactive menu",
    ],
    challenge: "Tambah modulo operation: a % b (remainder)",
  },

  {
    id: "w22",
    week: 22,
    title: "Project: Story Generator",
    phase: 5,
    codeStarter: `import random

# STORY GENERATOR - Works perfectly!
print("=" * 40)
print("📖 STORY GENERATOR")
print("=" * 40)
print()

# Story elements (tukar sesuka hati!)
names = ["Ali", "Sarah", "Ahmad", "Fatimah"]
places = ["the enchanted forest", "a magical castle", "the secret island", "outer space"]
animals = ["dragon", "unicorn", "phoenix", "talking cat"]
foods = ["magical pizza", "rainbow cake", "golden apple", "star cookies"]

# Random adjectives
adjectives = ["brave", "silly", "clever", "magical", "mysterious", "friendly"]

# Story templates
templates = [
    "Once upon a time, {name} went to {place} and found a {adj} {animal} eating {food}!",
    "{name} loved to visit {place} every day. One day, they met a {adj} {animal} who shared some {food}.",
    "In {place}, there lived a {adj} {animal}. {name} discovered it while looking for {food}!",
    "The {adj} adventure of {name} began in {place}. With a {animal}, they found the secret {food}!",
]

endings = [
    "And they lived happily ever after! 🎉",
    "What an amazing adventure! 🌟",
    "The end... or is it? 🤔",
    "They became best friends forever! 💖",
]

# Generate story!
name = random.choice(names)
place = random.choice(places)
animal = random.choice(animals)
food = random.choice(foods)
adj = random.choice(adjectives)

template = random.choice(templates)
story = template.format(name=name, place=place, animal=animal, food=food, adj=adj)
ending = random.choice(endings)

print("YOUR RANDOM STORY:")
print("=" * 40)
print()
print(story)
print()
print(ending)
print()
print("=" * 40)
print()
print("🔄 Run again for a different story!")`,
    instructions: [
      "📖 Generate random stories!",
      "Tukar lists untuk customize stories",
      "Random picks from each category",
      "Run multiple times for different stories",
      "Super fun and creative!",
    ],
    challenge: "Tambah list 'powers' (flying, invisibility, etc) dan integrate dalam story",
  },

  {
    id: "w23",
    week: 23,
    title: "Final Project: Quiz Game",
    phase: 5,
    codeStarter: `# QUIZ GAME - Full version!
print("=" * 40)
print("🎯 ULTIMATE QUIZ GAME")
print("=" * 40)
print()

# Questions database
questions = [
    {
        "question": "What is 5 + 3?",
        "answer": "8",
        "options": ["6", "7", "8", "9"]
    },
    {
        "question": "What is the capital of Malaysia?",
        "answer": "kuala lumpur",
        "options": ["Penang", "Johor", "Kuala Lumpur", "Melaka"]
    },
    {
        "question": "How many days in a week?",
        "answer": "7",
        "options": ["5", "6", "7", "8"]
    },
    {
        "question": "What color is the sky?",
        "answer": "blue",
        "options": ["red", "blue", "green", "yellow"]
    },
    {
        "question": "What is 10 * 2?",
        "answer": "20",
        "options": ["15", "20", "25", "30"]
    }
]

score = 0

# Simulate answers (tukar ni!)
user_answers = ["8", "kuala lumpur", "7", "blue", "20"]

for i, q in enumerate(questions):
    print(f"Question {i+1}: {q['question']}")
    print("Options:", ", ".join(q['options']))
    
    user_answer = user_answers[i].lower()
    print(f"Your answer: {user_answer}")
    
    if user_answer == q['answer'].lower():
        print("✅ Correct!")
        score += 1
    else:
        print(f"❌ Wrong! Answer is {q['answer']}")
    
    print()

# Results
print("=" * 40)
print(f"FINAL SCORE: {score} out of {len(questions)}")

if score == len(questions):
    print("🏆 PERFECT SCORE! AMAZING!")
elif score >= len(questions) * 0.7:
    print("⭐ GREAT JOB!")
elif score >= len(questions) * 0.5:
    print("👍 GOOD EFFORT!")
else:
    print("💪 KEEP PRACTICING!")

print("=" * 40)
print()
print("💡 Copy to Thonny untuk input() version!")`,
    instructions: [
      "🎯 Complete quiz game!",
      "Tukar user_answers untuk test different scores",
      "Tambah questions sendiri dalam database",
      "Automatic grading system",
      "Perfect capstone project!",
    ],
    challenge: "Tambah 3 soalan lagi dalam questions list",
  },

  {
    id: "w24",
    week: 24,
    title: "Demo Day & Certificate",
    phase: 5,
    codeStarter: `# 🎉 CONGRATULATIONS! 🎉
import random

print("=" * 50)
print("🏆 PYTHON LEARNING JOURNEY COMPLETE! 🏆")
print("=" * 50)
print()

# Your info (tukar ni!)
student_name = "Ali"
favorite_project = "Story Generator"

print("📜" * 20)
print()
print("        🌟 CERTIFICATE OF ACHIEVEMENT 🌟")
print()
print(f"           This certifies that {student_name}")
print("         has successfully completed")
print("           24 WEEKS OF PYTHON PROGRAMMING")
print()
print("         Skills Mastered:")
skills = [
    "✅ Print & Variables",
    "✅ Math Operations",
    "✅ Input & Output",
    "✅ Turtle Graphics",
    "✅ Loops & Logic",
    "✅ Functions",
    "✅ Lists & Strings",
    "✅ Game Development"
]

for skill in skills:
    print(f"         {skill}")

print()
print(f"         Favorite Project: {favorite_project}")
print()
print("         You are now a Python Programmer! 🐍")
print()
print("📜" * 20)
print()

# Achievement stats
print("=" * 50)
print("YOUR ACHIEVEMENT STATS:")
print("=" * 50)
print(f"Lessons Completed: 24/24 ✅")
print(f"Challenges Solved: {random.randint(20, 24)}")
print(f"Code Lines Written: {random.randint(500, 1000)}+")
print(f"Bugs Fixed: {random.randint(50, 100)} 🐛")
print(f"Fun Level: {random.randint(95, 100)}% 🎉")
print()

print("=" * 50)
print("WHAT'S NEXT?")
print("=" * 50)
next_steps = [
    "1. Build more complex games",
    "2. Learn web development (HTML, CSS, JavaScript)",
    "3. Explore data science with Python",
    "4. Create mobile apps",
    "5. Keep coding every day!",
    "6. Share your projects with friends!",
    "7. Never stop learning! 🚀"
]

for step in next_steps:
    print(f"  {step}")

print()
print("🌟 The journey has just begun! Keep coding! 🚀")
print("=" * 50)`,
    instructions: [
      "🎓 Graduation day!",
      "Tukar student_name kepada nama kamu",
      "Tukar favorite_project",
      "Celebrate your amazing achievement!",
      "You completed 24 weeks of Python! 🎉",
      "Share this with your family!",
    ],
    challenge: "Build your dream project and show it to the world! 🌍",
  },
];
