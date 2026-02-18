/**
 * รับค่า Positive Int แล้วเรียงตัวเลขแต่ละหลักจากมากไปน้อย แล้ว return เป็น Int
 *
 * ตัวอย่าง:
 *   3008 → 8300
 *   1989 → 9981
 *   2679 → 9762
 *   9163 → 9631
 */
export function process_pre_interview_Q5(num: number): number {
  // ขั้นตอนที่ 1: แปลงตัวเลข → string เพื่อแยกแต่ละหลัก
  const digits = String(num).split("");

  // ขั้นตอนที่ 2: เรียงตัวเลขจากมากไปน้อย (descending)
  digits.sort((a, b) => Number(b) - Number(a));

  // ขั้นตอนที่ 3: รวมกลับเป็นตัวเลข
  return Number(digits.join(""));
}
