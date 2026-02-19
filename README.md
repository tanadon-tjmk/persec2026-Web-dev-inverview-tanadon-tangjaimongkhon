# Pre-Interview Questions — TypeScript Coding Challenges

โปรเจกต์นี้เป็นชุดคำตอบสำหรับโจทย์ Pre-Interview ทั้งหมด 5 ข้อ เขียนด้วย **TypeScript** พร้อม Unit Test ครบทุกข้อ

## โครงสร้างโปรเจกต์

```
├── index.html                          # หน้าแรก — รายการคำถามทั้งหมด
├── package.json                        # จัดการ dependencies และ scripts
├── tsconfig.json                       # ตั้งค่า TypeScript (strict mode)
│
└── pre-interview/
    ├── question1.html                  # หน้า Interactive Demo ข้อ 1
    ├── question2.html                  # หน้า Interactive Demo ข้อ 2
    ├── question3.html                  # หน้า Interactive Demo ข้อ 3
    ├── question4.html                  # หน้า Interactive Demo ข้อ 4
    ├── question5.html                  # หน้า Interactive Demo ข้อ 5
    │
    └── src/
        ├── question1.ts                # ฟังก์ชัน: ตรวจสอบวงเล็บครบคู่
        ├── question1.test.ts           # Unit Test ข้อ 1 (14 เคส)
        ├── question2.ts                # ฟังก์ชัน: Natural Sort
        ├── question2.test.ts           # Unit Test ข้อ 2 (10 เคส)
        ├── question3.ts                # ฟังก์ชัน: Autocomplete
        ├── question3.test.ts           # Unit Test ข้อ 3 (12 เคส)
        ├── question4.ts                # ฟังก์ชัน: แปลงเลขโรมัน (2 ฟังก์ชัน)
        ├── question4.test.ts           # Unit Test ข้อ 4 (28 เคส)
        ├── question5.ts                # ฟังก์ชัน: เรียงตัวเลขจากมากไปน้อย
        └── question5.test.ts           # Unit Test ข้อ 5 (11 เคส)
```

## รายละเอียดแต่ละข้อ

### Question 01 — Balanced Brackets

สร้าง function ตรวจสอบว่า string ที่รับมามีการเปิด-ปิดวงเล็บ `( ) [ ] { }` ครบคู่และถูกลำดับหรือไม่

- **ฟังก์ชัน:** `process_pre_interview_Q1(text: string): boolean`
- **แนวคิด:** ใช้ Stack — เจอวงเล็บเปิด push เข้า stack, เจอวงเล็บปิด pop มาเทียบ
- **ตัวอย่าง:** `"()"` → `true`, `"([]]"` → `false`

### Question 02 — Natural Sort

สร้าง function รับค่า array ของ string แล้ว return ผลลัพธ์ที่เรียงแล้ว โดยเรียงตัวอักษรนำหน้าก่อน แล้วตัวเลขตามค่าจริง

- **ฟังก์ชัน:** `process_pre_interview_Q2(items: string[]): string[]`
- **แนวคิด:** แยก string เป็น segments (ตัวอักษร/ตัวเลข) แล้วเทียบทีละ segment
- **ตัวอย่าง:** `["TH19", "SG20", "TH2"]` → `["SG20", "TH2", "TH19"]`

### Question 03 — Autocomplete

สร้าง function autocomplete ค้นหาคำที่มี search เป็นส่วนหนึ่ง (ignore case) แล้วเรียงลำดับตามตำแหน่งที่พบ

- **ฟังก์ชัน:** `process_pre_interview_Q3(search: string, items: string[], maxResult: number): string[]`
- **แนวคิด:** กรอง → แบ่ง 3 กลุ่ม (ขึ้นต้น / กลางคำ / ท้ายคำ) → เรียงตัวอักษรในกลุ่ม → รวม → ตัด
- **ตัวอย่าง:** `autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2)` → `["Think", "Mother"]`

### Question 04 — Modern Roman Numerals

สร้าง 2 function แปลงระหว่างเลขจำนวนเต็มกับเลขโรมัน (รองรับรูปแบบลบ เช่น IV = 4, CM = 900)

- **ฟังก์ชัน:**
  - `process_pre_interview_Q4_intToRoman(num: number): string` — Int → Roman
  - `process_pre_interview_Q4_romanToInt(roman: string): number` — Roman → Int
- **แนวคิด:**
  - Int → Roman: วนตารางค่าจากมากไปน้อย หักลบไปเรื่อย
  - Roman → Int: อ่านทีละตัว ถ้าตัวปัจจุบัน < ตัวถัดไป = รูปแบบลบ
- **ตัวอย่าง:** `1989` ↔ `"MCMLXXXIX"`, `68` ↔ `"LXVIII"`

### Question 05 — Sort Digits Descending

สร้าง function ที่รับค่า Positive Int แล้วเรียงตัวเลขแต่ละหลักจากมากไปน้อย แล้ว return กลับเป็น Int

- **ฟังก์ชัน:** `process_pre_interview_Q5(num: number): number`
- **แนวคิด:** แปลงเป็น string → แยกแต่ละหลัก → sort จากมากไปน้อย → รวมกลับเป็นตัวเลข
- **ตัวอย่าง:** `3008` → `8300`, `1989` → `9981`

### เปิดหน้าเว็บ Interactive Demo

เปิดไฟล์ `index.html` ในเบราว์เซอร์ แล้วเลือกข้อที่ต้องการดู

แต่ละหน้ามี:
- **Interactive Demo** — ทดลองกรอก input แล้วดูผลลัพธ์
- **Example Results** — ตารางตัวอย่างจากโจทย์
- **Source Code** — โค้ด TypeScript ของฟังก์ชัน
- **Test Code** — โค้ด Unit Test ทั้งหมด

## เทคโนโลยีที่ใช้

| เทคโนโลยี | เวอร์ชัน | หน้าที่ |
|---|---|---|
| TypeScript | ^5.9.3 | ภาษาหลักสำหรับเขียน logic |
| Vitest | ^4.0.18 | เฟรมเวิร์กสำหรับ Unit Test |
| HTML/CSS/JS | - | หน้าเว็บ Interactive Demo |

## ผลการทดสอบ

```
 ✓ question1.test.ts (14 tests)
 ✓ question2.test.ts (10 tests)
 ✓ question3.test.ts (12 tests)
 ✓ question4.test.ts (28 tests)
 ✓ question5.test.ts (11 tests)

 Test Files  5 passed (5)
      Tests  75 passed (75)
```
