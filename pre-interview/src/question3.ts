/**
 * ฟังก์ชัน autocomplete — ค้นหาคำที่มี search เป็นส่วนหนึ่ง (ignore case)
 * เรียงตาม: ขึ้นต้น → กลางคำ → ท้ายคำ จำกัดจำนวนผลลัพธ์ด้วย maxResult
 *
 * ตัวอย่าง:
 *   autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2)
 *   ผลลัพธ์: ["Think", "Mother"]
 */
export function process_pre_interview_Q3(
  search: string,
  items: string[],
  maxResult: number,
): string[] {
  const searchLower = search.toLowerCase();

  // ขั้นตอนที่ 1: กรอง — เอาเฉพาะคำที่มี search อยู่ข้างใน
  const matched: string[] = [];
  for (const item of items) {
    if (item.toLowerCase().includes(searchLower)) {
      matched.push(item);
    }
  }

  // ขั้นตอนที่ 2: แบ่งเป็น 3 กลุ่มตามตำแหน่งที่พบ
  const startsWith: string[] = []; // search อยู่ต้นคำ   เช่น "Think"
  const middle: string[] = []; //     search อยู่กลางคำ  เช่น "Mother"
  const endsWith: string[] = []; //   search อยู่ท้ายคำ   เช่น "Growth"

  for (const item of matched) {
    const index = item.toLowerCase().indexOf(searchLower);

    if (index === 0) {
      startsWith.push(item);
    } else if (index + searchLower.length === item.length) {
      endsWith.push(item);
    } else {
      middle.push(item);
    }
  }

  // ขั้นตอนที่ 3: เรียงตัวอักษรภายในแต่ละกลุ่ม
  startsWith.sort((a, b) => a.localeCompare(b));
  middle.sort((a, b) => a.localeCompare(b));
  endsWith.sort((a, b) => a.localeCompare(b));

  // ขั้นตอนที่ 4: รวมกลุ่ม ขึ้นต้น → กลาง → ท้าย แล้วตัดตาม maxResult
  const result = [...startsWith, ...middle, ...endsWith];
  return result.slice(0, maxResult);
}
