/**
 * แปลงเลขจำนวนเต็ม → เลขโรมัน (Modern Roman Numerals)
 *
 * วิธีคิด:
 *   เตรียมตารางค่า เรียงจากมากไปน้อย (รวมรูปแบบลบ เช่น CM=900, IV=4)
 *   วนลูปตาราง — ถ้าตัวเลขยังมากกว่าหรือเท่ากับค่านั้น ก็ต่อ symbol แล้วลบค่าออก
 *
 * ตัวอย่าง:
 *   1989 → "MCMLXXXIX"
 *   68   → "LXVIII"
 */
export function process_pre_interview_Q4_intToRoman(num: number): string {
  // ตารางค่า: เรียงจากมากไปน้อย รวมรูปแบบลบ (CM, CD, XC, XL, IX, IV)
  const table: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  for (const [value, symbol] of table) {
    // ซ้ำจนกว่า num จะน้อยกว่า value
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

/**
 * แปลงเลขโรมัน → เลขจำนวนเต็ม
 *
 * วิธีคิด:
 *   วนอ่านทีละตัวอักษร
 *   - ถ้าตัวปัจจุบัน < ตัวถัดไป → เป็นรูปแบบลบ (เช่น IV=4) → ลบค่าออก
 *   - ถ้าไม่ใช่ → บวกค่าเข้า
 *
 * ตัวอย่าง:
 *   "MCMLXXXIX" → 1989
 *   "LXVIII"    → 68
 */
export function process_pre_interview_Q4_romanToInt(roman: string): number {
  // ค่าของแต่ละ symbol
  const symbolValue: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const char = roman[i];
    const nextChar = roman[i + 1];

    // ดึงค่าจาก symbolValue (ถ้าตัวอักษรไม่อยู่ในตาราง → ข้าม)
    const current = char !== undefined ? symbolValue[char] : undefined;
    const next = nextChar !== undefined ? symbolValue[nextChar] : undefined;
    if (current === undefined) continue;

    if (next !== undefined && current < next) {
      // ตัวปัจจุบันน้อยกว่าตัวถัดไป → รูปแบบลบ เช่น I ก่อน V = 4
      result -= current;
    } else {
      // ปกติ → บวกค่าเข้า
      result += current;
    }
  }

  return result;
}
