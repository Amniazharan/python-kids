export type Lesson = {
  id: string;
  week: number;
  title: string;
  phase: number;
  codeStarter: string;
  instructions: string[];
  challenge?: string;
};

export const lessons: Lesson[] = [
  // ========== PHASE 1: PYTHON BASICS ==========
  {
    id: "w1",
    week: 1,
    title: "Pelajaran 1: Hello Python!",
    phase: 1,
    codeStarter: `print("Hello World!")
print()
print("Nama saya Ali.")
print()
print("Saya umur 7 tahun.")
print()
print("Python memang menyeronokkan!")
print()
print("=" * 20)
print()
print("Mari belajar Python!")`,
    instructions: [
      "Cetak mesej baris demi baris supaya senang baca.",
      "print() tanpa apa-apa buat baris kosong.",
      "Tukar setiap info kepada maklumat sendiri."
    ],
    challenge: "Senaraikan 3 kawan guna print, satu baris satu nama."
  },

  {
    id: "w2",
    week: 2,
    title: "Pelajaran 2: Print & Math",
    phase: 1,
    codeStarter: `print("=== OPERASI MATEMATIK ===")
print()
print("Tambah: 10 + 5 =", 10 + 5)
print()
print("Tolak: 20 - 7 =", 20 - 7)
print()
print("Darab: 6 * 4 =", 6 * 4)
print()
print("Bahagi: 20 / 4 =", 20 / 4)
print()
print("=" * 30)
print()
print("Umur saya 7 tahun.")
print("Dalam 5 tahun, saya akan jadi", 7 + 5, "tahun!")
print()
print("Pattern:", "🎉" * 5)`,
    instructions: [
      "Cetak setiap operasi pada baris sendiri.",
      "Gunakan operasi tambah (+), tolak (-), darab (*) dan bahagi (/).",
      "print() kosong buat spacing untuk mudah baca."
    ],
    challenge: "Buat operasi matematik sendiri dengan print pada baris baru untuk setiap soalan."
  },

  {
    id: "w3",
    week: 3,
    title: "Pelajaran 3: Variables — Kotak Ajaib",
    phase: 1,
    codeStarter: `print("=== KONSEP VARIABLES ===")
print()
print("Variable ibarat kotak yang simpan sesuatu.")
print()
print("Kotak bertanda nama: nama, umur, warna.")
print()
name = "Ali"
print("Nama saya:", name)
print()
umur = 8
print("Umur saya:", umur)
print()
warna_kegemaran = "merah"
print("Warna kegemaran:", warna_kegemaran)
print()
# Ubah isi kotak (variable)
umur = umur + 1
print("Umur tahun depan:", umur)`,
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
    title: "Pelajaran 4: String Fun!",
    phase: 1,
    codeStarter: `print("=== NAMA SENI ===")
print()
nama = "Hassan"
print("Nama asal:", nama)
print()
print("UPPERCASE:", nama.upper())
print()
print("lowercase:", nama.lower())
print()
print("Panjang nama:", len(nama))
print()
print("Emoji pattern:", "🎈" * len(nama))
print()
print("Setiap huruf 3 kali:")
for c in nama:
    print(c * 3)
print()
print("Gabung text dengan + :", "Hello, " + nama + "!")`,
    instructions: [
      "Bermain dengan nama dan string, tukar variable, lihat perubahan.",
      "Gabung string, tukar ke huruf besar/kecil dan hasilkan nama seni.",
      "Cuba tukar variable nama dan experiment!"
    ],
    challenge: "Tukar variable nama kepada nama kamu dan hasilkan pattern sendiri."
  },

  // ========== PHASE 2: TURTLE GRAPHICS ==========
  {
    id: "w5",
    week: 5,
    title: "Pelajaran 5: Turtle - Lukis Square",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()
t.speed(2)

print("Lukis square...")
print()

# Square (4 sides, 90 degrees)
for i in range(4):
    t.forward(100)
    t.right(90)
    print(f"Side {i+1}: forward 100, turn right 90°")

print()
print("✅ Square complete!")`,
    instructions: [
      "🐢 Turtle boleh lukis dalam browser!",
      "forward(100) = gerak ke depan 100 pixel",
      "right(90) = pusing kanan 90 darjah",
      "Loop 4 kali untuk 4 sisi square"
    ],
    challenge: "Cuba lukis rectangle: forward(150), right(90), forward(80), right(90)..."
  },

  {
    id: "w6",
    week: 6,
    title: "Pelajaran 6: Turtle - Multiple Shapes",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()
t.speed(2)

print("Lukis square dan triangle...")
print()

# Square
print("Drawing square...")
for i in range(4):
    t.forward(80)
    t.right(90)
print("✅ Square done!")
print()

# Move turtle
t.penup()
t.forward(120)
t.pendown()

# Triangle
print("Drawing triangle...")
for i in range(3):
    t.forward(80)
    t.left(120)
print("✅ Triangle done!")`,
    instructions: [
      "🎨 Lukis 2 shapes berbeza!",
      "penup() = angkat pen (tak lukis masa gerak)",
      "pendown() = letak pen (mula lukis balik)",
      "Triangle: 3 sides, pusing 120°"
    ],
    challenge: "Tambah hexagon (6 sides, pusing 60°)"
  },

  {
    id: "w7",
    week: 7,
    title: "Pelajaran 7: Rainbow Colors!",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()
t.speed(2)

colors = ["red", "orange", "yellow", "green", "blue", "purple"]

print("Lukis rainbow star...")
print()

for i in range(6):
    color = colors[i]
    t.pencolor(color)
    t.pensize(i + 2)
    t.forward(100)
    t.right(144)
    print(f"Line {i+1}: {color}, size {i+2}")

print()
print("🌈 Rainbow star complete!")`,
    instructions: [
      "🌈 Tukar warna dengan pencolor()",
      "pensize() tukar ketebalan garisan",
      "Loop ambil warna dari list satu-satu",
      "Cuba tukar warna dalam list!"
    ],
    challenge: "Buat circle dengan 8 warna berbeza (tambah 2 warna lagi dalam list)"
  },

  {
    id: "w8",
    week: 8,
    title: "Pelajaran 8: Spiral Magic",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()
t.speed(0)

colors = ["red", "orange", "yellow", "green", "blue", "purple"]

print("Buat spiral pattern...")
print()

for i in range(36):
    color = colors[i % 6]
    t.pencolor(color)
    t.forward(100)
    t.right(170)
    if i % 6 == 0:
        print(f"Round {i//6 + 1} complete...")

print()
print("🌀 Spiral complete!")`,
    instructions: [
      "🌀 Loop buat pattern berulang",
      "% 6 buat warna repeat (modulo)",
      "Cuba tukar 170° ke 165° atau 175°",
      "Angle berbeza = pattern berbeza!"
    ],
    challenge: "Cuba angle 160° dan tengok apa jadi!"
  },

  {
    id: "w9",
    week: 9,
    title: "Pelajaran 9: Star Pattern",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()
t.speed(2)
t.pencolor("gold")

print("Lukis bintang...")
print()

# Star (5 points)
for i in range(5):
    t.forward(150)
    t.right(144)
    print(f"Point {i+1} done")

print()
print("⭐ Star complete!")`,
    instructions: [
      "⭐ Bintang = 5 garisan panjang",
      "Setiap garisan pusing 144°",
      "Cuba tukar warna: 'blue', 'red', 'purple'",
      "Cuba tukar size: 150 → 200"
    ],
    challenge: "Lukis 3 bintang dengan size berbeza (100, 150, 200)"
  },

  // ========== PHASE 3: LOGIC & DECISIONS ==========
  {
    id: "w10",
    week: 10,
    title: "Pelajaran 10: If Statement",
    phase: 3,
    codeStarter: `print("=== IF: Komputer buat keputusan ===")
print()
umur = 12
print("Umur murid:", umur)
print()
if umur >= 13:
    print("Remaja!")
print()
if umur < 13:
    print("Kanak-kanak!")
print()
print("---")
print()
markah = 60
if markah >= 80:
    print("Lulus cemerlang!")
elif markah >= 50:
    print("Lulus sahaja!")
else:
    print("Cuba lagi!")
print()
kawan = "Ali"
if kawan == "Ali":
    print("Ali hadir hari ni!")`,
    instructions: [
      "If = JIKA sesuatu syarat benar, jalankan sesuatu arahan.",
      "Boleh guna lebih 1 syarat (if, elif, else)",
      "== bermaksud sama, != bermaksud tidak sama.",
      "Cuba tukar nilai variable dan lihat keputusan."
    ],
    challenge: "Tambah if decision untuk periksa warna (jika warna merah print berhenti!)"
  },

  {
    id: "w11",
    week: 11,
    title: "Pelajaran 11: If-Else",
    phase: 3,
    codeStarter: `print("=== GUNA IF-ELSE ===")
print()
mark = 45
if mark >= 50:
    print("Tahniah, anda LULUS!")
else:
    print("Gagal, cuba lagi.")
print()
umur = 16
if umur >= 17:
    print("Boleh ambil lesen motor!")
else:
    print("Kena tunggu lagi tahun depan.")
print()
num = 9
if num % 2 == 0:
    print(num, "genap.")
else:
    print(num, "ganjil.")`,
    instructions: [
      "If-Else = pilih salah satu hasil.",
      "Gunakan if syarat:, else: untuk dua pilihan sahaja.",
      "Cuba tukar variable mark, umur, num untuk faham sendiri."
    ],
    challenge: "Cipta if-else untuk tentukan sama ada nombor positif atau negatif."
  },

  {
    id: "w12",
    week: 12,
    title: "Pelajaran 12: Random & Magic 8 Ball",
    phase: 3,
    codeStarter: `import random

print("=" * 40)
print("🎱 MAGIC 8 BALL")
print("=" * 40)
print()

answers = [
    "Yes! ✅",
    "No! ❌",
    "Maybe... 🤔",
    "Ask again later ⏰",
    "Definitely! 💯"
]

question = "Will I be a programmer?"
print(f"Question: {question}")
print()

answer = random.choice(answers)
print("🔮 The Magic 8 Ball says:")
print(answer)
print()

print("=" * 40)
print("🎲 DICE ROLLER")
dice = random.randint(1, 6)
print(f"You rolled: {dice}")
print("=" * 40)`,
    instructions: [
      "🎲 Random creates surprise!",
      "random.choice() picks from list",
      "random.randint() picks number in range",
      "Run multiple times for different results!"
    ],
    challenge: "Buat coin flipper: random heads atau tails"
  },

  {
    id: "w13",
    week: 13,
    title: "Pelajaran 13: Lists",
    phase: 3,
    codeStarter: `print("=== LISTS ===")
print()
buah = ["epal", "pisang", "betik"]
print("Buah-buahan:")
for x in buah:
    print("  -", x)
print()
warna = ["merah", "biru", "kuning", "hijau"]
print("Warna kegemaran:")
for w in warna:
    print("  -", w)
print()
print("Bilangan buah:", len(buah))
print()
buah.append("limau")
print("Buah selepas tambah:", buah)
print()
print("Buah pertama:", buah[0])
print("Buah terakhir:", buah[-1])`,
    instructions: [
      "List = [item1, item2, ...] boleh simpan banyak data",
      "Boleh loop (for x in ...), .append() untuk tambah",
      "Cuba buat shopping list sendiri!"
    ],
    challenge: "Buat shopping list barang dapur, print semuanya dengan for loop."
  },

  {
    id: "w14",
    week: 14,
    title: "Pelajaran 14: Guessing Game",
    phase: 3,
    codeStarter: `import random

print("=" * 40)
print("TEKA NOMBOR 1-10")
print("=" * 40)
print()

secret = random.randint(1, 10)
guesses = [3, 6, 8, 4, 9]

for idx, guess in enumerate(guesses, 1):
    print(f"Percubaan {idx}: Teka {guess}")
    if guess == secret:
        print("✅ Tepat! Nombor ialah", secret)
        break
    elif guess < secret:
        print("❌ Terlalu rendah")
    else:
        print("❌ Terlalu tinggi")
    print()
else:
    print("Habis! Jawapan:", secret)

print()
print("=" * 40)`,
    instructions: [
      "Cuba tukar guesses list.",
      "Gunakan for ... enumerate supaya index cantik.",
      "Break keluar dari loop bila dapat betul."
    ],
    challenge: "Ubah kod supaya guesses = [1,2,3,4,5,6,7,8,9,10]"
  },

  // ========== PHASE 4: FUNCTIONS ==========
  {
    id: "w15",
    week: 15,
    title: "Pelajaran 15: Functions",
    phase: 4,
    codeStarter: `print("=== APA ITU FUNGSI? ===")
print()
print("Fungsi = Kumpulan kod yang boleh dipanggil.")
print()

def say_hello(nama):
    print(f"Hello, {nama}! Selamat datang!")
    print()

say_hello("Rina")
say_hello("Ahmad")

def tambah_dua(x):
    return x + 2

hasil = tambah_dua(7)
print("7 + 2 =", hasil)`,
    instructions: [
      "Define fungsi menggunakan def ...",
      "Boleh bagi input (parameter), boleh return output.",
      "Fungsi jimatkan kod supaya tidak ulang banyak kali."
    ],
    challenge: "Cipta fungsi triple(x) yang return x * 3"
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

# BODY
t.begin_fill()
for _ in range(4):
    t.forward(120)
    t.left(90)
t.end_fill()

# ROOF
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

t.hideturtle()`,
    instructions: [
      "🏠 Rumah dengan body dan bumbung!",
      "begin_fill() dan end_fill() untuk warna solid",
      "Cuba edit size dan warna!"
    ],
    challenge: "Tambah pintu dan tingkap!"
  },

  {
    id: "w17",
    week: 17,
    title: "Pelajaran 17: Nested Loops",
    phase: 4,
    codeStarter: `import turtle

t = turtle.Turtle()
t.speed(0)
colors = ["red", "orange", "blue", "green", "purple"]

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
    t.pendown()`,
    instructions: [
      "Nested loop = loop dalam loop",
      "Bagus untuk grid pattern",
      "Tukar colors list untuk warna baru"
    ],
    challenge: "Buat grid 8x8"
  },

  {
    id: "w18",
    week: 18,
    title: "Pelajaran 18: While Loop Game",
    phase: 4,
    codeStarter: `import random

print("Game: Kumpul 5 Apple!")
print()

score = 0
attempt = 0

while score < 5:
    apple = random.choice([True, False, False])
    attempt += 1
    
    if apple:
        score += 1
        print(f"Percubaan {attempt}: Jumpa Apple! Total: {score}")
    else:
        print(f"Percubaan {attempt}: Tak jumpa...")
    print()

print(f"Tahniah! Dapat 5 Apple dalam {attempt} cubaan!")`,
    instructions: [
      "While loop ulang sampai condition false",
      "Game berhenti bila dapat 5 apple",
      "Random menentukan jumpa atau tidak"
    ],
    challenge: "Target score tukar ke 10"
  },

  {
    id: "w19",
    week: 19,
    title: "Pelajaran 19: String Art",
    phase: 4,
    codeStarter: `print("📝 STRING MAGIC")
print("=" * 40)
print()

name = "Python"
print("Original:", name)
print("Uppercase:", name.upper())
print("Lowercase:", name.lower())
print("Length:", len(name))
print()

my_name = "Ali"
print("=" * 40)
print("NAME ART")
print("=" * 40)
for letter in my_name:
    print(letter * 5)
print("=" * 40)`,
    instructions: [
      "String methods: upper(), lower(), len()",
      "Loop through each letter",
      "Create art patterns!"
    ],
    challenge: "Tukar my_name dan create art dengan 10 repetitions"
  },

  // ========== PHASE 5: BIG PROJECTS ==========
  {
    id: "w20",
    week: 20,
    title: "Pelajaran 20: Drawing Pad",
    phase: 5,
    codeStarter: `import turtle

t = turtle.Turtle()
t.speed(0)

# Hexagon
t.pencolor("orange")
for i in range(6):
    t.forward(120)
    t.right(60)

# Square
t.penup()
t.goto(50, 50)
t.pendown()
t.pencolor("blue")
for i in range(4):
    t.forward(70)
    t.left(90)`,
    instructions: [
      "Lukis multiple shapes",
      "Tukar warna dan koordinat",
      "Experiment dengan patterns!"
    ],
    challenge: "Tambah circle dan triangle"
  },

  {
    id: "w21",
    week: 21,
    title: "Pelajaran 21: Calculator",
    phase: 5,
    codeStarter: `def tambah(a, b):
    return a + b

def tolak(a, b):
    return a - b

def darab(a, b):
    return a * b

def bahagi(a, b):
    if b == 0:
        return "Error!"
    return a / b

print("Calculator Functions:")
print("10 + 5 =", tambah(10, 5))
print("20 - 7 =", tolak(20, 7))
print("6 × 4 =", darab(6, 4))
print("20 ÷ 4 =", bahagi(20, 4))
print()
print("Guna calculator di bawah!")`,
    instructions: [
      "Belajar logic calculator",
      "Setiap operation ada function",
      "Guna interactive calculator di bawah!"
    ],
    challenge: "Tambah function modulo (%) dan power (**)"
  },

  {
    id: "w22",
    week: 22,
    title: "Pelajaran 22: Story Generator",
    phase: 5,
    codeStarter: `import random

print("=" * 40)
print("STORY GENERATOR")
print("=" * 40)
print()

names = ["Ali", "Sarah", "Ahmad"]
places = ["the forest", "a castle", "space"]
animals = ["dragon", "unicorn", "cat"]

name = random.choice(names)
place = random.choice(places)
animal = random.choice(animals)

print(f"{name} went to {place} and found a {animal}!")
print()
print("And they lived happily ever after! 🎉")`,
    instructions: [
      "Generate random stories!",
      "Tukar lists untuk customize",
      "Run multiple times!"
    ],
    challenge: "Tambah list foods dan integrate dalam story"
  },

  {
    id: "w23",
    week: 23,
    title: "Pelajaran 23: Quiz Game",
    phase: 5,
    codeStarter: `quiz = [
    {"soalan": "5 + 3 = ?", "jawapan": "8"},
    {"soalan": "Ibu negara Malaysia?", "jawapan": "KL"}
]

print("Quiz Data:")
for i, q in enumerate(quiz, 1):
    print(f"Q{i}: {q['soalan']}")
    print("Jawapan:", q['jawapan'])
    print()

print("Main quiz interactive di bawah!")`,
    instructions: [
      "Belajar struktur data quiz",
      "Dictionary & list",
      "Main quiz di bawah!"
    ],
    challenge: "Tambah 2 soalan lagi"
  },

  {
    id: "w24",
    week: 24,
    title: "Pelajaran 24: Graduation!",
    phase: 5,
    codeStarter: `import random

print("=" * 50)
print("🎓 TAHNIAH! GRADUATION! 🎓")
print("=" * 50)
print()

nama = "CODER"
lessons = 24
code_lines = random.randint(500, 1000)

print(f"Nama: {nama}")
print(f"Lessons: {lessons}/24 ✅")
print(f"Lines of Code: {code_lines}+ 💻")
print()

skills = ["Print", "Turtle", "Loops", "Functions", "Games"]
print("Skills Mastered:")
for skill in skills:
    print(f"  ✅ {skill}")

print()
print("🎉 Fireworks di bawah!")`,
    instructions: [
      "Tamat semua pelajaran!",
      "Fireworks animation di bawah",
      "Celebrate achievement!"
    ],
    challenge: "Share dengan family & kawan!"
  }
];
