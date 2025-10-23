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
    codeStarter: `# Pelajaran 1: Cetak mesej pertama!

print("Hello World!")
print("")

print("Nama saya Ali")
print("Saya umur 7 tahun")
print("Python sangat best!")
print("")

print("=" * 30)
print("Mari belajar Python!")`,
    instructions: [
      "🐍 print() digunakan untuk paparkan mesej di output (screen)",
      "Tulis apa-apa dalam tanda petik \"...\" untuk cetak text",
      "print(\"\") atau print() tanpa apa-apa akan buat baris kosong",
      "Operator * boleh ulang text: \"=\" * 30 akan print 30 kali tanda =",
      "Cuba tukar nama dan umur kepada maklumat kamu sendiri!"
    ],
    challenge: "Cetak 5 ayat tentang diri kamu dengan baris kosong antara setiap ayat"
  },

  {
    id: "w2",
    week: 2,
    title: "Pelajaran 2: Matematik Asas",
    phase: 1,
    codeStarter: `# Pelajaran 2: Python boleh kira matematik!

print("=== OPERASI MATEMATIK ===")
print("")

print("Tambah: 10 + 5 =", 10 + 5)
print("")

print("Tolak: 20 - 7 =", 20 - 7)
print("")

print("Darab: 6 * 4 =", 6 * 4)
print("")

print("Bahagi: 20 / 4 =", 20 / 4)
print("")

print("=" * 30)
print("")

print("Umur saya 7 tahun")
print("Dalam 5 tahun, saya akan jadi", 7 + 5, "tahun!")`,
    instructions: [
      "🔢 Python boleh jadi kalkulator! Guna +, -, *, / untuk kira",
      "+ untuk tambah, - untuk tolak, * untuk darab, / untuk bahagi",
      "Boleh campurkan text dan nombor dalam print dengan koma (,)",
      "Contoh: print(\"Hasil:\", 10 + 5) akan cetak 'Hasil: 15'",
      "Cuba tukar nombor dan buat kiraan sendiri!"
    ],
    challenge: "Buat 5 soalan matematik dengan jawapan (contoh: 8 × 9 = ?)"
  },

  {
    id: "w3",
    week: 3,
    title: "Pelajaran 3: Variables (Kotak Simpan)",
    phase: 1,
    codeStarter: `# Pelajaran 3: Variables = kotak untuk simpan data

print("=== APA ITU VARIABLE? ===")
print("")
print("Variable macam kotak bertanda nama")
print("Boleh simpan text, nombor, apa sahaja!")
print("")

# Buat variables (kotak-kotak data)
nama = "Ali"
umur = 8
warna = "biru"

print("Nama saya:", nama)
print("Umur saya:", umur, "tahun")
print("Warna kegemaran:", warna)
print("")

# Variables boleh berubah!
print("=== VARIABLE BOLEH BERUBAH ===")
print("")
score = 10
print("Score mula:", score)
print("")

score = score + 5
print("Dapat bonus! Score sekarang:", score)`,
    instructions: [
      "📦 Variable = tempat simpan data dalam memori komputer",
      "Cara buat: nama_variable = nilai (contoh: nama = \"Ali\")",
      "Variable boleh simpan text (dalam \"\"), nombor, dan lain-lain",
      "Nama variable guna huruf kecil, boleh guna _ untuk pemisah",
      "Variable boleh berubah nilai bila-bila masa (score = score + 5)",
      "Bayangkan kotak AJAIB boleh tukar isi bila perlu!"
    ],
    challenge: "Buat 5 variables tentang diri kamu: nama, umur, sekolah, hobi, makanan"
  },

  {
    id: "w4",
    week: 4,
    title: "Pelajaran 4: String Fun",
    phase: 1,
    codeStarter: `# Pelajaran 4: Bermain dengan text (string)

print("=== STRING OPERATIONS ===")
print("")

nama = "Ahmad"
print("Nama:", nama)
print("")

print("UPPERCASE:", nama.upper())
print("lowercase:", nama.lower())
print("Panjang nama:", len(nama), "huruf")
print("")

print("=== GABUNG STRING ===")
print("")
salam = "Hello"
mesej = salam + " " + nama + "!"
print(mesej)
print("")

print("=== ULANG STRING ===")
print("")
print("Ha" * 5)
print("❤️" * 10)`,
    instructions: [
      "📝 String = text yang boleh dimanipulasi dengan banyak cara",
      ".upper() tukar semua huruf jadi BESAR",
      ".lower() tukar semua huruf jadi kecil",
      "len() kira berapa panjang string (jumlah huruf)",
      "Boleh gabung string guna + (contoh: \"Hello\" + \" \" + \"Ali\")",
      "Boleh ulang string guna * (contoh: \"Ha\" * 5 = \"HaHaHaHaHa\")"
    ],
    challenge: "Buat name art dengan nama kamu (setiap huruf diulang 5 kali)"
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

print("Lukis square 4 sisi...")
print("")

# Square = 4 sides, 90 degrees each turn
for i in range(4):
    t.forward(100)
    t.right(90)
    print("Sisi", i+1, "siap!")

print("")
print("Square complete!")`,
    instructions: [
      "🐢 Turtle = pen untuk lukis graphics dalam Python",
      "t.forward(100) = gerak pen ke depan 100 pixel",
      "t.right(90) = pusing pen ke kanan 90 darjah",
      "for i in range(4): = ulang 4 kali",
      "Square ada 4 sisi, setiap sudut 90°",
      "Cuba tukar 100 kepada nombor lain untuk size berbeza!"
    ],
    challenge: "Lukis rectangle dengan size 150 x 80"
  },

  {
    id: "w6",
    week: 6,
    title: "Pelajaran 6: Turtle - Pelbagai Shapes",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()
t.speed(2)

# Square
print("Lukis square...")
for i in range(4):
    t.forward(80)
    t.right(90)
print("Square siap!")
print("")

# Move turtle
t.penup()
t.forward(120)
t.pendown()

# Triangle
print("Lukis triangle...")
for i in range(3):
    t.forward(80)
    t.left(120)
print("Triangle siap!")`,
    instructions: [
      "🎨 Boleh lukis banyak shapes dalam satu program!",
      "t.penup() = angkat pen (tak lukis masa gerak)",
      "t.pendown() = letak pen balik (mula lukis semula)",
      "Triangle ada 3 sisi, setiap sudut 120°",
      "Formula: sudut = 360 / bilangan_sisi",
      "Guna penup/pendown untuk move turtle tanpa lukis garisan"
    ],
    challenge: "Tambah hexagon (6 sisi, pusing 60°) selepas triangle"
  },

  {
    id: "w7",
    week: 7,
    title: "Pelajaran 7: Warna Rainbow!",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()
t.speed(2)

colors = ["red", "orange", "yellow", "green", "blue", "purple"]

print("Lukis rainbow star...")
print("")

for i in range(6):
    color = colors[i]
    t.pencolor(color)
    t.pensize(i + 2)
    t.forward(100)
    t.right(144)
    print("Garisan", i+1, "warna", color)

print("")
print("Rainbow star complete!")`,
    instructions: [
      "🌈 Boleh tukar warna dan saiz pen turtle!",
      "t.pencolor(\"red\") = tukar warna pen jadi merah",
      "t.pensize(5) = tukar ketebalan pen jadi 5",
      "List warna: [\"red\", \"blue\", ...] simpan banyak warna",
      "Loop ambil warna satu-satu dari list (colors[0], colors[1]...)",
      "Star pattern: pusing 144° setiap kali"
    ],
    challenge: "Tambah 2 warna lagi: \"pink\" dan \"cyan\" dalam list"
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
print("")

for i in range(36):
    color = colors[i % 6]
    t.pencolor(color)
    t.forward(100)
    t.right(170)
    if i % 6 == 0:
        print("Round", i//6 + 1, "...")

print("")
print("Spiral complete!")`,
    instructions: [
      "🌀 Loop banyak kali untuk buat pattern kompleks",
      "% (modulo) = baki selepas bahagi (7 % 3 = 1)",
      "i % 6 buat warna repeat (0,1,2,3,4,5,0,1,2...)",
      "t.speed(0) = paling laju (instant)",
      "Angle 170° buat spiral effect yang cantik",
      "Cuba tukar angle ke 165° atau 175° - pattern jadi lain!"
    ],
    challenge: "Cuba angle 160° dan 180° - tengok apa jadi!"
  },

  {
    id: "w9",
    week: 9,
    title: "Pelajaran 9: Bintang Cantik",
    phase: 2,
    codeStarter: `import turtle

t = turtle.Turtle()
t.speed(2)
t.pencolor("gold")

print("Lukis bintang 5 mata...")
print("")

for i in range(5):
    t.forward(150)
    t.right(144)
    print("Mata bintang", i+1, "siap!")

print("")
print("Bintang complete!")`,
    instructions: [
      "⭐ Bintang 5 mata dibuat dengan 5 garisan panjang",
      "Setiap garisan pusing 144° (360° × 2 ÷ 5)",
      "Angle ni special untuk bintang yang cantik",
      "Boleh tukar warna: \"blue\", \"red\", \"purple\"",
      "Boleh tukar size: 150 → 200 untuk bintang lebih besar",
      "Nested loops boleh buat banyak bintang sekaligus!"
    ],
    challenge: "Lukis 3 bintang dengan size berbeza: 80, 120, 160"
  },

  // ========== PHASE 3: LOGIC & DECISIONS ==========
  {
    id: "w10",
    week: 10,
    title: "Pelajaran 10: If Statement",
    phase: 3,
    codeStarter: `# Pelajaran 10: Buat keputusan dengan if

print("=== IF STATEMENT ===")
print("")
print("If = JIKA syarat betul, buat ini")
print("")

umur = 12
print("Umur:", umur)
print("")

if umur >= 13:
    print("Remaja! Boleh masuk sekolah menengah")
print("")

if umur < 13:
    print("Kanak-kanak! Masih di sekolah rendah")
print("")

markah = 75
print("Markah:", markah)
print("")

if markah >= 80:
    print("Cemerlang! A")
elif markah >= 60:
    print("Baik! B")
else:
    print("Cuba lagi! C")`,
    instructions: [
      "🤔 if = buat keputusan berdasarkan syarat",
      "if syarat: (jika syarat betul, jalankan kod di bawah)",
      "Operator: >= (lebih/sama), <= (kurang/sama), == (sama), != (tak sama)",
      "elif = else if (jika syarat pertama salah, cuba syarat ni)",
      "else = kalau semua syarat salah, buat ini",
      "PENTING: Kod dalam if/elif/else mesti ada indent (4 spaces)",
      "Cuba tukar nilai umur dan markah untuk test!"
    ],
    challenge: "Buat grade checker: 90+ = A, 80-89 = B, 70-79 = C, <70 = D"
  },

  {
    id: "w11",
    week: 11,
    title: "Pelajaran 11: If-Else",
    phase: 3,
    codeStarter: `# Pelajaran 11: Pilih salah satu dengan if-else

print("=== IF-ELSE ===")
print("")
print("Pilih salah satu: A atau B")
print("")

markah = 55
print("Markah:", markah)
print("")

if markah >= 50:
    print("LULUS! Tahniah!")
else:
    print("GAGAL! Cuba lagi next time")
print("")

nombor = 7
print("Nombor:", nombor)
print("")

if nombor % 2 == 0:
    print("GENAP (boleh bahagi 2)")
else:
    print("GANJIL (tak boleh bahagi 2)")`,
    instructions: [
      "🔀 if-else = pilih 1 dari 2 option sahaja",
      "if = jika syarat betul, else = jika syarat salah",
      "% (modulo) = baki selepas bahagi",
      "nombor % 2 == 0 bermaksud genap (baki 0)",
      "nombor % 2 == 1 bermaksud ganjil (baki 1)",
      "Hanya 1 block akan run: if ATAU else (bukan dua-dua)"
    ],
    challenge: "Check sama ada nombor positif (>0) atau negatif (<0)"
  },

  {
    id: "w12",
    week: 12,
    title: "Pelajaran 12: Random & Magic 8 Ball",
    phase: 3,
    codeStarter: `import random

print("=" * 40)
print("MAGIC 8 BALL")
print("=" * 40)
print("")

answers = [
    "Yes! ✅",
    "No! ❌",
    "Maybe... 🤔",
    "Ask again later ⏰",
    "Definitely! 💯"
]

question = "Will I be a programmer?"
print("Question:", question)
print("")

answer = random.choice(answers)
print("Magic 8 Ball says:", answer)
print("")

print("=" * 40)
print("DICE ROLLER")
print("=" * 40)
print("")

dice = random.randint(1, 6)
print("You rolled:", dice)`,
    instructions: [
      "🎲 random = buat nombor/pilihan secara random (rawak)",
      "import random = import library untuk random",
      "random.choice(list) = pilih 1 item random dari list",
      "random.randint(1, 6) = nombor random dari 1 hingga 6",
      "Run berkali-kali untuk result berbeza!",
      "Magic 8 Ball = toy yang bagi answer random"
    ],
    challenge: "Buat coin flipper: random pilih \"Heads\" atau \"Tails\", run 10 kali"
  },

  {
    id: "w13",
    week: 13,
    title: "Pelajaran 13: Lists",
    phase: 3,
    codeStarter: `# Pelajaran 13: Lists = senarai data

print("=== LISTS ===")
print("")

buah = ["epal", "pisang", "betik", "mangga"]

print("Senarai buah:")
for b in buah:
    print("  -", b)
print("")

print("Jumlah buah:", len(buah))
print("")

print("Buah pertama:", buah[0])
print("Buah kedua:", buah[1])
print("Buah terakhir:", buah[-1])
print("")

print("=== TAMBAH ITEM ===")
buah.append("limau")
print("Tambah limau...")
print("Senarai baru:", buah)`,
    instructions: [
      "📝 List = senarai untuk simpan banyak item sekaligus",
      "Buat list: nama = [item1, item2, item3]",
      "for item in list: = loop setiap item dalam list",
      "list[0] = item pertama (index start dari 0)",
      "list[-1] = item terakhir",
      "len(list) = jumlah item dalam list",
      ".append(item) = tambah item baru di belakang list",
      "List sangat berguna untuk manage banyak data!"
    ],
    challenge: "Buat shopping list dengan 7 items, print dengan nombor (1. Milk, 2. Bread...)"
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
print("")

secret = random.randint(1, 10)
guesses = [3, 6, 8, 4, 9]

print("Computer pilih nombor rahsia...")
print("")

for idx, guess in enumerate(guesses, 1):
    print("Percubaan", idx, "- Teka:", guess)
    
    if guess == secret:
        print("  BETUL! Nombor ialah", secret)
        break
    elif guess < secret:
        print("  Terlalu RENDAH")
    else:
        print("  Terlalu TINGGI")
    print("")
else:
    print("Habis! Jawapan:", secret)

print("")
print("=" * 40)`,
    instructions: [
      "🎮 Game lengkap dengan hints dan loop!",
      "enumerate(list, 1) = loop dengan index (start dari 1)",
      "break = keluar dari loop sekarang",
      "Game bagi hint: terlalu tinggi atau rendah",
      "if-elif-else check 3 condition: betul/rendah/tinggi",
      "Cuba tukar list guesses untuk 'main' game!",
      "else selepas for = jalan jika loop tak break"
    ],
    challenge: "Tukar range ke 1-20, tambah more guesses dalam list"
  },

  // ========== PHASE 4: FUNCTIONS ==========
  {
    id: "w15",
    week: 15,
    title: "Pelajaran 15: Functions",
    phase: 4,
    codeStarter: `# Pelajaran 15: Functions = kotak kerja

print("=== APA ITU FUNCTION? ===")
print("")
print("Function = kumpulan kod yang boleh guna berkali-kali")
print("")

def say_hello(nama):
    print("Hello,", nama, "!")
    print("Selamat datang!")
    print("")

say_hello("Ahmad")
say_hello("Sarah")

def tambah(a, b):
    hasil = a + b
    return hasil

result = tambah(10, 5)
print("10 + 5 =", result)
print("")

result2 = tambah(100, 50)
print("100 + 50 =", result2)`,
    instructions: [
      "🔧 Function = recipe kod yang boleh guna banyak kali",
      "def nama_function(parameter): = define function",
      "Parameter = input untuk function (dalam kurung)",
      "return = hantar balik hasil dari function",
      "Panggil function: nama_function(nilai)",
      "Function jimatkan masa - tak payah tulis sama berkali-kali!",
      "Boleh buat banyak function untuk task berbeza"
    ],
    challenge: "Buat function darab(a, b) yang return a * b, test dengan 3 examples"
  },

  {
    id: "w16",
    week: 16,
    title: "Pelajaran 16: Functions + Turtle House",
    phase: 4,
    codeStarter: `import turtle

t = turtle.Turtle()
t.speed(2)
t.pencolor("brown")
t.fillcolor("brown")

# BODY rumah
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

t.hideturtle()
print("Rumah siap!")`,
    instructions: [
      "🏠 Combine functions dengan turtle untuk lukis complex shapes!",
      "begin_fill() = mula isi warna",
      "end_fill() = habis isi warna",
      "hideturtle() = sembunyikan arrow turtle",
      "Badan rumah = square, bumbung = triangle",
      "Boleh buat function untuk setiap shape untuk code lebih kemas"
    ],
    challenge: "Tambah function draw_window() untuk lukis tingkap rumah"
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
    t.pendown()

print("Grid pattern complete!")`,
    instructions: [
      "🎨 Nested loops = loop dalam loop untuk pattern 2D",
      "Outer loop = baris (rows)",
      "Inner loop = lajur (columns)",
      "Loop ketiga = lukis setiap square",
      "Powerful untuk buat grid, table, pattern kompleks",
      "j % len(colors) buat warna repeat secara cycle"
    ],
    challenge: "Buat grid 8x8 dengan 2 warna sahaja (checkerboard pattern)"
  },

  {
    id: "w18",
    week: 18,
    title: "Pelajaran 18: While Loop Game",
    phase: 4,
    codeStarter: `import random

print("GAME: KUMPUL 5 APPLE!")
print("")

score = 0
attempt = 0

while score < 5:
    apple = random.choice([True, False, False])
    attempt += 1
    
    if apple:
        score += 1
        print("Attempt", attempt, "- Jumpa apple! Total:", score)
    else:
        print("Attempt", attempt, "- Tak jumpa...")
    print("")

print("TAHNIAH! Dapat 5 apple dalam", attempt, "attempts!")`,
    instructions: [
      "🔄 while loop = ulang SELAGI condition masih True",
      "while score < 5: = ulang sampai score jadi 5",
      "Loop akan check condition setiap kali sebelum run",
      "Kalau condition jadi False, loop berhenti",
      "Game ni guna random untuk element surprise",
      "PENTING: Pastikan condition akan jadi False, kalau tak infinite loop!"
    ],
    challenge: "Tukar target ke 10 apples, adjust probability untuk lebih susah"
  },

  {
    id: "w19",
    week: 19,
    title: "Pelajaran 19: String Art",
    phase: 4,
    codeStarter: `print("=" * 40)
print("STRING ART")
print("=" * 40)
print("")

name = "Python"
print("Original:", name)
print("UPPER:", name.upper())
print("lower:", name.lower())
print("Length:", len(name))
print("")

my_name = "Ali"
print("NAME ART")
print("=" * 40)
for letter in my_name:
    print(letter * 5)
print("=" * 40)
print("")

word = "CODING"
print("Reverse:", word[::-1])`,
    instructions: [
      "📝 String manipulation untuk ASCII art!",
      "for letter in string: = loop setiap huruf",
      "[::-1] = reverse string (terbalik)",
      ".upper() / .lower() = tukar case",
      "len() = panjang string",
      "Boleh buat pattern cantik dengan loop dan string operations",
      "Kreativiti unlimited dengan string art!"
    ],
    challenge: "Buat pyramid pattern dengan nama kamu (huruf pertama 1x, kedua 2x...)"
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
    t.left(90)

print("Shapes complete!")`,
    instructions: [
      "🎨 Combine semua skill untuk drawing pad mini!",
      "Lukis multiple shapes dalam satu canvas",
      "goto(x, y) = move turtle ke coordinate tertentu",
      "Boleh experiment dengan warna dan koordinat",
      "Practice untuk project besar nanti",
      "Kreativiti kamu yang tentukan apa nak lukis!"
    ],
    challenge: "Tambah 3 shapes lagi: circle, star, spiral"
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
        return "Error: Tak boleh bahagi 0"
    return a / b

print("CALCULATOR FUNCTIONS")
print("")
print("10 + 5 =", tambah(10, 5))
print("20 - 7 =", tolak(20, 7))
print("6 × 4 =", darab(6, 4))
print("20 ÷ 4 =", bahagi(20, 4))
print("")
print("Guna interactive calculator di bawah!")`,
    instructions: [
      "🧮 Calculator lengkap dengan semua operations!",
      "Setiap operation ada function sendiri",
      "Error handling untuk divide by zero (bahagi dengan 0)",
      "return value boleh guna dalam calculation lain",
      "Functions buat code organized dan reusable",
      "Ini asas untuk buat calculator app sebenar!"
    ],
    challenge: "Tambah function untuk power (a**b) dan modulo (a%b)"
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
print("")

names = ["Ali", "Sarah", "Ahmad"]
places = ["hutan ajaib", "istana", "angkasa"]
animals = ["naga", "unicorn", "kucing"]

name = random.choice(names)
place = random.choice(places)
animal = random.choice(animals)

print("YOUR STORY:")
print("")
print(name, "pergi ke", place)
print("dan jumpa", animal, "yang friendly!")
print("")
print("Mereka jadi kawan baik! 🎉")`,
    instructions: [
      "📖 Generate cerita random yang berbeza setiap kali!",
      "Guna lists untuk simpan options",
      "random.choice() pilih random dari list",
      "Boleh tambah more categories: food, powers, etc",
      "Template cerita boleh jadi kompleks",
      "Run berkali-kali untuk cerita berbeza!",
      "Project ni tunjuk power of randomization + lists"
    ],
    challenge: "Tambah 3 categories lagi: adjectives, actions, endings"
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

print("QUIZ DATA STRUCTURE")
print("")

for i, q in enumerate(quiz, 1):
    print("Q" + str(i) + ":", q["soalan"])
    print("Answer:", q["jawapan"])
    print("")

print("Main quiz interactive di bawah!")`,
    instructions: [
      "🎯 Quiz game dengan dictionary dan list!",
      "Dictionary = {key: value} untuk simpan related data",
      "List of dictionaries = common pattern untuk data",
      "enumerate() untuk dapat index dalam loop",
      "Struktur data penting untuk organize info",
      "Real quiz akan check user answer dan track score",
      "Ini foundation untuk buat app quiz sebenar!"
    ],
    challenge: "Tambah 3 soalan lagi dengan jawapan dalam quiz list"
  },

  {
    id: "w24",
    week: 24,
    title: "Pelajaran 24: Graduation!",
    phase: 5,
    codeStarter: `import random

print("=" * 50)
print("TAHNIAH! GRADUATION!")
print("=" * 50)
print("")

nama = "CODER"
lessons = 24
code_lines = random.randint(500, 1000)

print("Nama:", nama)
print("Lessons:", lessons, "/24")
print("Lines of Code:", str(code_lines) + "+")
print("")

skills = ["Print", "Variables", "Loops", "Functions", "Turtle"]
print("SKILLS MASTERED:")
for skill in skills:
    print("  -", skill)

print("")
print("Fireworks di bawah!")
print("")
print("Teruskan belajar dan buat projek awesome!")`,
    instructions: [
      "🎓 TAHNIAH! Adik-adik dah tamat semua 24 pelajaran Python!",
      "Adik dah belajar: print, variables, math, strings, loops, if-else, lists, functions, turtle graphics, dan banyak lagi!",
      "Sekarang adik-adik boleh buat games, art, calculators, dan program sendiri!",
      "Keep practicing - coding adalah skill yang improve dengan practice",
      "Next steps: buat project sendiri, join coding community, keep learning!",
      "Fireworks animation di bawah untuk celebrate achievement adik-adik!",
      "Remember: Every expert was once a beginner. Kamu awesome! 🌟"
    ],
    challenge: "Share achievement dengan family & friends! Teach someone what you learned!"
  }
];
