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
  title: "Pelajaran 1: Hello Python!",
  phase: 1,
  codeStarter: `
print("Hello World!\\n")
print("Nama saya Ali.\\n")
print("Saya umur 7 tahun.\\n")
print("Python memang menyeronokkan!\\n")
print("Saya suka makan pizza.\\n")
print("=" * 20 + "\\n")
print("Ini baris baru.\\n")
print("Mari belajar Python!\\n")
`,
  instructions: [
    "Cetak mesej baris demi baris supaya senang baca.",
    "print() dengan \\n di akhir akan hasilkan baris baru.",
    "Tukar setiap info kepada maklumat sendiri."
  ],
  challenge: "Senaraikan 3 kawan guna print, satu baris satu nama."
},
{
  id: "w2",
  week: 2,
  title: "Pelajaran 2: Print & Math",
  phase: 1,
  codeStarter: `
print("=== OPERASI MATEMATIK ===\\n")
print("Tambah: 10 + 5 =", 10 + 5, "\\n")
print("Tolak: 20 - 7 =", 20 - 7, "\\n")
print("Darab: 6 * 4 =", 6 * 4, "\\n")
print("Bahagi: 20 / 4 =", 20 / 4, "\\n")
print("=" * 30 + "\\n")
print("Umur saya 7 tahun. Dalam 5 tahun, saya akan jadi", 7 + 5, "tahun!\\n")
print("Pattern:", "🎉" * 5, "\\n")
`,
  instructions: [
    "Cetak setiap operasi pada baris sendiri.",
    "Gunakan operasi tambah (+), tolak (-), darab (*) dan bahagi (/).",
    "Akhir print dengan \\n supaya line spacing kemas."
  ],
  challenge: "Buat operasi matematik sendiri dengan print pada baris baru untuk setiap soalan."
},


  {
  id: "w3",
  week: 3,
  title: "Pelajaran 3: Variables — Kotak Ajaib",
  phase: 1,
  codeStarter: `
print("=== KONSEP VARIABLES ===\\n")
print("Variable ibarat kotak yang simpan sesuatu.\\n")
print("Kotak bertanda nama: nama, umur, warna.\\n")
name = "Ali"
print("Nama saya:", name, "\\n")
umur = 8
print("Umur saya:", umur, "\\n")
warna_kegemaran = "merah"
print("Warna kegemaran:", warna_kegemaran, "\\n")
# Ubah isi kotak (variable)
umur = umur + 1
print("Umur tahun depan:", umur, "\\n")
`,
  instructions: [
    "Variable = tempat simpan data dalam memori.",
    "Boleh diubah bila-bila masa (contoh: umur bertambah tiap tahun).",
    "Setiap variable ada nama, boleh diakses semula.",
    "Bayangkan kotak AJAIB boleh tukar isi bila-bila sahaja!"
  ],
  challenge: "Cipta sekurang-kurangnya 4 lagi variable sendiri, dan print setiap satunya pada baris berlainan."
},


  {
  id: "w4",
  week: 4,
  title: "Pelajaran 4: String Fun Tanpa input()!",
  phase: 1,
  codeStarter: `
print("=== NAMA SENI ===\\n")
nama = "Hassan"
print("Nama asal:", nama, "\\n")
print("UPPERCASE:", nama.upper(), "\\n")
print("lowercase:", nama.lower(), "\\n")
print("Panjang nama:", len(nama), "\\n")
print("Emoji pattern:", "🎈" * len(nama), "\\n")
print("Setiap huruf 3 kali:")
for c in nama:
    print(c * 3)
print()
print("Gabung text dengan + :", "Hello, " + nama + "!")`,
  instructions: [
    "Bermain dengan nama dan string, tukar variable, lihat perubahan.",
    "Tiada guna input(), semua variable boleh tukar awal-awal dalam kod.",
    "Gabung string, tukar ke huruf besar/kecil dan hasilkan nama seni."
  ],
  challenge: "Tukar variable nama kepada nama kamu dan hasilkan pattern sendiri."
},

  // ========== PHASE 2: TURTLE GRAPHICS (MINGGU 5-9) ==========
  {
    id: "w5",
    week: 5,
    title: "Turtle Graphics - Kenalan",
    phase: 2,
    codeStarter: `# BROWSER VERSION - Simulate turtle
print("🐢 TURTLE DRAWING SIMULATION")
print("=" * 40)
print()
print("Drawing a SQUARE:")
print("Step 1: Move forward 100 →")
print("Step 2: Turn right 90° ⤵")
print("Step 3: Move forward 100 →")
print("Step 4: Turn right 90° ⤵")
print("Step 5: Move forward 100 →")
print("Step 6: Turn right 90° ⤵")
print("Step 7: Move forward 100 →")
print()
print("✅ Square complete!")
print()
print("=" * 40)
print("💡 For REAL turtle graphics:")
print("Copy this code to Thonny:")
print()
print("import turtle")
print("t = turtle.Turtle()")
print("for i in range(4):")
print("    t.forward(100)")
print("    t.right(90)")
print("turtle.done()")`,
    instructions: [
      "🐢 Learn turtle commands!",
      "Turtle gerak forward, turn right/left",
      "Kod ni simulate apa yang turtle buat",
      "💡 Untuk lukis betul, copy ke Thonny!",
    ],
    challenge: "Plan sequence untuk lukis TRIANGLE (3 sides, turn 120°)",
  },

  {
    id: "w6",
    week: 6,
    title: "Turtle - Lukis Shapes",
    phase: 2,
    codeStarter: `# BROWSER VERSION - Simulate shapes
print("🎨 SHAPE DRAWING SIMULATION")
print("=" * 40)
print()

# Square
print("Drawing SQUARE (4 sides):")
for i in range(4):
    print(f"  Side {i+1}: forward 100, turn right 90°")
print("✅ Square done!")
print()

# Triangle  
print("Drawing TRIANGLE (3 sides):")
for i in range(3):
    print(f"  Side {i+1}: forward 100, turn left 120°")
print("✅ Triangle done!")
print()

# Pentagon
print("Drawing PENTAGON (5 sides):")
for i in range(5):
    print(f"  Side {i+1}: forward 100, turn right 72°")
print("✅ Pentagon done!")
print()

print("=" * 40)
print("💡 Copy to Thonny for real graphics!")`,
    instructions: [
      "🎨 Simulate multiple shapes!",
      "Lihat pattern: 4 sides = 90°, 3 sides = 120°",
      "Formula: angle = 360 / sides",
      "Copy ke Thonny untuk lihat lukisan sebenar!",
    ],
    challenge: "Calculate: Hexagon (6 sides) needs berapa degree?",
  },

  {
    id: "w7",
    week: 7,
    title: "Colors & Pen Size",
    phase: 2,
    codeStarter: `# BROWSER VERSION - Show color pattern
colors = ["red", "orange", "yellow", "green", "blue", "purple"]

print("🌈 RAINBOW PATTERN SIMULATION")
print("=" * 40)
print()

for i in range(6):
    color = colors[i]
    size = i + 1
    print(f"Line {i+1}:")
    print(f"  Color: {color}")
    print(f"  Pen size: {size}")
    print(f"  Draw forward 100, turn right 60°")
    print()

print("✅ Rainbow star pattern complete!")
print()
print("=" * 40)
print("💡 In Thonny, colors akan display betul!")`,
    instructions: [
      "🌈 Working with colors and sizes!",
      "Lihat pattern warna berubah",
      "Pen size bertambah setiap kali",
      "Copy ke Thonny untuk rainbow graphics!",
    ],
    challenge: "Tambah 2 warna lagi dalam list: pink, cyan",
  },

  {
    id: "w8",
    week: 8,
    title: "Loops - For Loop Magic",
    phase: 2,
    codeStarter: `# BROWSER VERSION - Spiral simulation
import math

print("🌀 RAINBOW SPIRAL SIMULATION")
print("=" * 40)
print()

colors = ["red", "orange", "yellow", "green", "blue", "purple"]

print("Creating spiral with 36 lines:")
print()

for i in range(36):
    color = colors[i % 6]
    angle = i * 170
    print(f"Line {i+1}: {color} - angle {angle}°")
    
    if i % 6 == 0:
        print()  # Blank line setiap 6 lines

print()
print("✅ Beautiful spiral pattern!")
print("=" * 40)`,
    instructions: [
      "🌀 Loops buat pattern berulang!",
      "36 lines creates spiral effect",
      "Colors rotate using modulo (% 6)",
      "Copy ke Thonny untuk beautiful graphics!",
    ],
    challenge: "Cuba tukar 36 kepada 50, lihat apa jadi dalam simulation!",
  },

  {
    id: "w9",
    week: 9,
    title: "Loops - Draw Patterns",
    phase: 2,
    codeStarter: `# BROWSER VERSION - Pattern simulation
print("⭐ STAR PATTERN SIMULATION")
print("=" * 40)
print()

# One big star
print("Drawing BIG STAR:")
for i in range(5):
    print(f"  Point {i+1}: forward 150, turn right 144°")
print("✅ Big star done!")
print()

# Multiple small stars
print("Drawing 10 SMALL STARS in a row:")
for star in range(10):
    print(f"Star {star+1}:")
    for point in range(5):
        print(f"  Point {point+1}: forward 50, right 144°")
    print(f"  Move to next position")
    print()

print("✅ Star pattern complete! ⭐")
print("=" * 40)`,
    instructions: [
      "⭐ Nested loops - loop dalam loop!",
      "Outer loop: how many stars",
      "Inner loop: draw each star",
      "This creates repeating patterns!",
    ],
    challenge: "Plan pattern untuk 5 hexagons (6 sides each) in a row",
  },

  // ========== PHASE 3: LOGIC & DECISIONS (MINGGU 10-14) ==========
  {
  id: "w10",
  week: 10,
  title: "Pelajaran 10: If Statement — buat keputusan",
  phase: 3,
  codeStarter: `
print("=== IF: Komputer buat keputusan ===\\n")
umur = 12
print("Umur murid:", umur)
if umur >= 13:
    print("Remaja!\\n")
if umur < 13:
    print("Kanak-kanak!\\n")
print()
markah = 60
if markah >= 80:
    print("Lulus cemerlang!\\n")
elif markah >= 50:
    print("Lulus sahaja!\\n")
else:
    print("Cuba lagi!\\n")
print()
kawan = "Ali"
if kawan == "Ali":
    print("Ali hadir hari ni!\\n")
if kawan != "Ali":
    print("Cari siapa kawan hari ni.\\n")
`,
  instructions: [
    "If = JIKA sesuatu syarat benar, jalankan sesuatu arahan.",
    "Boleh guna lebih 1 syarat (if, elif, else), == bermaksud sama, != bermaksud tidak sama.",
    "Cuba tukar nilai variable dan lihat keputusan."
  ],
  challenge: "Tambah if decision untuk periksa warna (jika warna merah print berhenti! dan sebagainya)."
},
{
  id: "w11",
  week: 11,
  title: "Pelajaran 11: If-Else (Dua Pilihan)",
  phase: 3,
  codeStarter: `
print("=== GUNA IF-ELSE, KENA PILIH! ===\\n")
mark = 45
if mark >= 50:
    print("Tahniah, anda LULUS!")
else:
    print("Gagal, cuba lagi.\\n")
umur = 16
if umur >= 17:
    print("Boleh ambil lesen motor!\\n")
else:
    print("Kena tunggu lagi tahun depan.\\n")
num = 9
if num % 2 == 0:
    print(num, "genap.\\n")
else:
    print(num, "ganjil.\\n")
`,
  instructions: [
    "If-Else = pilih salah satu hasil (sama macam lampu isyarat, jalan atau berhenti).",
    "Gunakan if syarat:, else: untuk dua pilihan sahaja, bukan banyak.",
    "Cuba tukar variable mark, umur, num untuk faham sendiri."
  ],
  challenge: "Cipta if-else untuk tentukan sama ada nombor positif atau negatif."
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
  title: "Pelajaran 13: Lists — Senarai untuk Data Banyak",
  phase: 3,
  codeStarter: `
print("=== LISTS — Senarai Data ===\\n")
buah = ["epal", "pisang", "betik"]
for x in buah:
    print("Buah:", x)
print()
warna = ["merah", "biru", "kuning", "hijau"]
print("Warna kegemaran:")
for w in warna:
    print(w)
print()
print("Bilangan buah:", len(buah), "\\n")
buah.append("limau")
print("Buah selepas tambah:", buah, "\\n")
print("Buah ke-1:", buah[0], "Buah kedua:", buah[1], "Buah terakhir:", buah[-1], "\\n")
`,
  instructions: [
    "List = [item1, item2, ...] boleh wording apa-apa, akses pakai [index].",
    "Boleh loop (for x in ...), .append() untuk tambah ke belakang list.",
    "Cuba buat shopping list sendiri dan print setiap barang satu baris."
  ],
  challenge: "Buat shopping list barang dapur, print semuanya dengan for loop."
},


  {
  id: "w14",
  week: 14,
  title: "Pelajaran 14: Teka Nombor Canggih",
  phase: 3,
  codeStarter: `
import random
print("=" * 40)
print("TEKA NOMBOR 1-10")
secret = random.randint(1, 10)
guesses = [3, 6, 8, 4, 9]
for idx, guess in enumerate(guesses, 1):
    print(f"Percubaan {idx}: Teka {guess}")
    if guess == secret:
        print("Tepat! Nombor ialah", secret, "\\n")
        break
    elif guess < secret:
        print("Terlalu rendah.\\n")
    else:
        print("Terlalu tinggi.\\n")
else:
    print("Habislah, tak jumpa nombor tu. Jawapan:", secret)
print("=" * 40)
`,
  instructions: [
    "Cuba tukar guesses. Kod print setiap percubaan dengan perenggan.",
    "Gunakan for ... enumerate supaya index cantik.",
    "Hint: boleh tambah attempts, range 1-20. Cuba malu-malu cubaan sendiri!"
  ],
  challenge: "Ubah kod supaya guesses = [1,2,3,4,5,6,7,8,9,10] — boleh teka tepat!"
},


  // ========== PHASE 4: FUNCTIONS & POWER (MINGGU 15-19) ==========
 {
  id: "w15",
  week: 15,
  title: "Pelajaran 15: Functions — Kotak Arah",
  phase: 4,
  codeStarter: `
print("=== APA ITU FUNGSI? ===\\n")
print("Fungsi = Kumpulan kod yang boleh dipanggil bila perlu.\\n")
def say_hello(nama):
    print(f"Hello, {nama}! Selamat datang!\\n")
say_hello("Rina")
say_hello("Ahmad")
print()
def tambah_dua(x):
    return x + 2
hasil = tambah_dua(7)
print("7 + 2 =", hasil, "\\n")
`,
  instructions: [
    "Define fungsi menggunakan def ... , boleh bagi input (parameter), boleh return output.",
    "Fungsi jimatkan kod supaya tidak ulang banyak kali.",
    "Boleh test fungsi dengan banyak input berbeza."
  ],
  challenge: "Cipta fungsi yang return ganda 3 kali (triple(x)), dan print triple(5), triple(9)."
},


 {
  id: "w16",
  week: 16,
  title: "Pelajaran 16: Functions + Lukis Rumah",
  phase: 4,
  codeStarter: `import turtle

t = turtle.Turtle()
t.speed(2)
t.pencolor("brown")
t.fillcolor("brown")

# BODY (dari bawah kanan, hadap ke atas)
t.begin_fill()
for _ in range(4):
    t.forward(120)
    t.left(90)
t.end_fill()

# ROOF (triangle atas badan)
t.pencolor("red")
t.fillcolor("red")
t.left(90)
t.forward(120)
t.right(30)
t.begin_fill()
for _ in range(3):
    t.forward(120)
    t.right(120)
t.end_fill()

# TURN ke pintu (bawah tengah)
t.right(150)
t.forward(120)
t.left(90)
t.forward(40)
t.right(90)

# DOOR
t.pencolor("black")
t.fillcolor("#543d23")
t.begin_fill()
for _ in range(2):
    t.left(90)
    t.forward(40)
    t.left(90)
t.end_fill()

t.hideturtle()`,
    
  instructions: [
    "🏠 Rumah LENGKAP dengan body, bumbung, pintu, tingkap!",
    "Guna goto() untuk lukis shape tepat",
    "begin_fill() dan end_fill() untuk warna solid",
    "Semua shape centered dalam canvas!"
  ],
  challenge: "Tambah matahari (circle) atau pokok sebelah rumah!"
}
,


  {
  id: "w17",
  week: 17,
  title: "Pelajaran 17: Nested Loop — Grid Colour",
  phase: 4,
  codeStarter: `
import turtle
t = turtle.Turtle()
colors = ["red", "orange", "blue", "green", "purple", "yellow"]
t.speed(0)
for i in range(5):
    for j in range(5):
        t.pencolor(colors[j % len(colors)])
        t.fillcolor(colors[j % len(colors)])
        t.begin_fill()
        for _ in range(4):
            t.forward(30)
            t.right(90)
        t.end_fill()
        t.penup()
        t.forward(40)
        t.pendown()
    t.penup()
    t.goto(0, (i + 1) * 40)
    t.pendown()
`,
  instructions: [
    "Nested loop = loop dalam loop, bagus untuk grid.",
    "Setiap kotak ditukar warna automatik.",
    "Tukar colors list untuk tambah warna baru dalam grid."
  ],
  challenge: "Cuba buat grid 8x8 sakura warna pink."
},

  {
  id: "w18",
  week: 18,
  title: "Pelajaran 18: While Loop — Catch the Apple!",
  phase: 4,
  codeStarter: 
`import random
print("Game: Kumpul 5 Apple!\\n")
score = 0
attempt = 0
while score < 5:
    apple = random.choice([True, False, False])
    attempt += 1
    if apple:
        score += 1
        print(f"Percubaan {attempt} : Jumpa Apple! Total: {score}")
    else:
        print(f"Percubaan {attempt} : 😅 Tak jumpa.")
    print()
print(f"Tahniah, dapat 5 Apple dengan {attempt} cubaan!\\n")
print("Ulang semula dan cuba kurang cubaan!")`,
  instructions: [
    "Satu game simple — while loop ulang sampai cukup apple (5).",
    "Peluang boleh tukar apple True/False atau tukar target score.",
    "Setiap cubaan, hint akan print jumpa apple atau tidak."
  ],
  challenge: "Target score tukar ke 10, dan cuba random.choice dengan peluang lebih banyak."
}
,


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
  title: "Pelajaran 20: Mini Drawing Pad",
  phase: 5,
  codeStarter: `
import turtle
t = turtle.Turtle()
t.pencolor("orange")
t.speed(0)

for i in range(6):
    t.forward(120)
    t.right(60)
t.penup()
t.goto(50,50)
t.pendown()
t.pencolor("blue")
for i in range(4):
    t.forward(70)
    t.left(90)
`,
  instructions: [
    "Gunakan turtle untuk lukis dua bentuk (hexagon dan square).",
    "Tukar warna dan koordinat mengikut kreatativiti sendiri.",
    "Boleh tambah banyak lagi bentuk dengan arahan berbeza."
  ],
  challenge: "Tambah bulatan dan zig-zag pattern dengan kod tambahan."
},


  {
  id: "w21",
  week: 21,
  title: "Pelajaran 21: Calculator Interactive",
  phase: 5,
  codeStarter: `# Calculator Logic (Interactive di bawah!)
def tambah(a, b):
    return a + b

def tolak(a, b):
    return a - b

def darab(a, b):
    return a * b

def bahagi(a, b):
    if b == 0:
        return "Error: Tak boleh bahagi 0"
    return a / b

# Test functions
print("Calculator Functions:")
print("10 + 5 =", tambah(10, 5))
print("20 - 7 =", tolak(20, 7))
print("6 × 4 =", darab(6, 4))
print("20 ÷ 4 =", bahagi(20, 4))
print()
print("Cuba guna interactive calculator di bawah!")
`,
  instructions: [
    "🧮 Belajar logic calculator dengan functions",
    "Setiap operation ada function sendiri",
    "Guna interactive calculator di bawah untuk test!",
    "Cuba tukar nombor dalam code dan run"
  ],
  challenge: "Tambah function untuk modulo (%) dan power (**)"
}
,

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
  title: "Pelajaran 23: Quiz Game Interactive",
  phase: 5,
  codeStarter: `# Quiz Logic dengan Dictionary
quiz = [
    {
        "soalan": "5 + 3 = ?",
        "pilihan": ["6", "7", "8", "9"],
        "jawapan": "8"
    },
    {
        "soalan": "Ibu negara Malaysia?",
        "pilihan": ["Penang", "Johor", "KL", "Melaka"],
        "jawapan": "KL"
    }
]

# Struktur data quiz
print("Quiz Data Structure:")
for i, q in enumerate(quiz, 1):
    print(f"Q{i}: {q['soalan']}")
    print("Pilihan:", q['pilihan'])
    print("Jawapan:", q['jawapan'])
    print()

print("Main quiz interactive di bawah!")
`,
  instructions: [
    "🎯 Belajar struktur data quiz dengan dictionary & list",
    "Setiap soalan ada pilihan dan jawapan",
    "Main quiz interactive di bawah!",
    "Lihat macam mana data organized"
  ],
  challenge: "Tambah 2 soalan lagi dalam struktur quiz"
}
,

 {
  id: "w24",
  week: 24,
  title: "Pelajaran 24: Graduation Fireworks!",
  phase: 5,
  codeStarter: `import random

# Celebration ASCII Art
print("=" * 50)
print("🎓 TAHNIAH! GRADUATION! 🎓")
print("=" * 50)
print()

# Student achievement stats
nama = "CODER"  # Tukar nama kamu!
lessons_complete = 24
lines_of_code = random.randint(500, 1000)

print(f"Nama: {nama}")
print(f"Lessons Completed: {lessons_complete}/24 ✅")
print(f"Lines of Code: {lines_of_code}+ 💻")
print()

# Skills mastered
skills = [
    "Print & Variables",
    "Turtle Graphics", 
    "Loops & Logic",
    "Functions",
    "Game Development"
]

print("Skills Mastered:")
for skill in skills:
    print(f"  ✅ {skill}")

print()
print("🎉 Saksikan fireworks di bawah!")
print("🌟 Teruskan belajar dan buat projek awesome!")
`,
  instructions: [
    "🎓 Tamat semua pelajaran!",
    "Code show achievement & stats",
    "Fireworks animation interactive di bawah",
    "Tukar nama dan celebrate!"
  ],
  challenge: "Share achievement dengan family & kawan! Teach orang lain!"
}
];
