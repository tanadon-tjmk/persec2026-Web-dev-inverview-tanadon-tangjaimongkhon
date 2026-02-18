/**
 * ตรวจสอบว่า string ที่รับมามีการเปิด-ปิดวงเล็บ ( ) [ ] { } ครบคู่และถูกลำดับหรือไม่
 *
 * ใช้ Stack เป็นหลัก:
 * - เจอวงเล็บเปิด → push เข้า stack
 * - เจอวงเล็บปิด → pop จาก stack แล้วเทียบว่าตรงคู่กันหรือไม่
 * - จบลูปแล้ว stack ว่าง → ครบคู่ (true)
 *
 * @param text - string ที่ต้องการตรวจสอบ
 * @returns true ถ้าวงเล็บเปิด-ปิดครบคู่และถูกลำดับ, false ถ้าไม่ครบหรือผิดลำดับ
 */
export function process_pre_interview_Q1(text: string): boolean {
  // stack เก็บวงเล็บเปิดที่ยังไม่ถูกปิด
  const stack: string[] = [];

  // ชุดวงเล็บเปิดทั้งหมด
  const OPENERS = new Set(["(", "[", "{"]);

  // map วงเล็บปิด → วงเล็บเปิดที่ต้องตรงคู่กัน
  const MATCHING_OPENER: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of text) {
    // ถ้าเป็นวงเล็บเปิด → push เข้า stack แล้วข้ามไปตัวถัดไป
    if (OPENERS.has(char)) {
      stack.push(char);
      continue;
    }

    // ถ้าไม่ใช่วงเล็บปิด → ข้ามไป (เป็นตัวอักษรทั่วไป)
    const expectedOpener = MATCHING_OPENER[char];
    if (expectedOpener === undefined) continue;

    // เป็นวงเล็บปิด → pop วงเล็บเปิดล่าสุดจาก stack มาเทียบ
    const actualOpener = stack.pop();
    if (actualOpener !== expectedOpener) return false;
  }

  // ถ้า stack ว่าง = วงเล็บเปิดทุกตัวถูกปิดครบ
  return stack.length === 0;
}
