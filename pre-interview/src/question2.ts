/**
 * รับ array ของ string แล้ว return ผลลัพธ์ที่เรียงแล้ว (Natural Sort)
 *
 * วิธีการเรียง:
 * 1. แยก string แต่ละตัวออกเป็น segments สลับกันระหว่าง ตัวอักษร กับ ตัวเลข
 *    เช่น "TH19" → ["TH", "19"], "SG20" → ["SG", "20"]
 * 2. เปรียบเทียบทีละ segment:
 *    - ถ้าทั้งคู่เป็นตัวเลข → เทียบค่าตัวเลข (2 < 19)
 *    - ถ้าไม่ใช่ → เทียบตัวอักษร ("SG" < "TH")
 *
 * ตัวอย่าง:
 *   ["TH19", "SG20", "TH2"]            => ["SG20", "TH2", "TH19"]
 *   ["TH10", "TH3Netflix", "TH1", "TH7"] => ["TH1", "TH3Netflix", "TH7", "TH10"]
 *
 * @param items - array ของ string ที่ต้องการเรียง
 * @returns array ใหม่ที่เรียงแล้ว (ไม่แก้ไข array เดิม)
 */
export function process_pre_interview_Q2(items: string[]): string[] {

  // [...items] = สร้าง array ใหม่ เพื่อไม่แก้ไข array เดิม
  return [...items].sort((a, b) => naturalCompare(a, b));
}

/**
 * เปรียบเทียบ string 2 ตัวแบบ Natural Sort
 *
 * ขั้นตอน:
 * 1. แยก string เป็น segments → สลับระหว่างตัวอักษรกับตัวเลข
 *    "TH19"      → ["TH", "19"]
 *    "TH3Netflix" → ["TH", "3", "Netflix"]
 *
 * 2. วนลูปเทียบทีละ segment:
 *    - ทั้งคู่เป็นตัวเลข → เทียบค่าตัวเลข (เช่น 2 < 19)
 *    - มีตัวอักษร       → เทียบตัวอักษร (เช่น "SG" < "TH")
 *
 * 3. ถ้าทุก segment เท่ากัน → ถือว่าเท่ากัน (return 0)
 *
 * @returns ค่าลบ ถ้า a มาก่อน b, ค่าบวก ถ้า b มาก่อน a, 0 ถ้าเท่ากัน
 */
function naturalCompare(a: string, b: string): number {

  // ขั้นตอนที่ 1: แยก string เป็น segments
  // regex จับกลุ่มตัวอักษร ([a-zA-Z]+) หรือ กลุ่มตัวเลข (\d+)
  // เช่น "TH19" → ["TH", "19"]
  const segmentsA = a.match(/[a-zA-Z]+|\d+/g) ?? [];
  const segmentsB = b.match(/[a-zA-Z]+|\d+/g) ?? [];

  // ขั้นตอนที่ 2: วนลูปเทียบทีละ segment
  const maxLength = Math.max(segmentsA.length, segmentsB.length);

  for (let i = 0; i < maxLength; i++) {
    // ถ้าฝั่งใดหมด segment ก่อน → ใช้ "" (string ว่าง จะมาก่อน)
    const segA = segmentsA[i] ?? "";
    const segB = segmentsB[i] ?? "";

    // ลองแปลงเป็นตัวเลข
    const numA = Number(segA);
    const numB = Number(segB);

    // กรณี: ทั้งคู่เป็นตัวเลข → เทียบค่าตัวเลข
    // เช่น "2" vs "19" → 2 - 19 = -17 (2 มาก่อน)
    if (!isNaN(numA) && !isNaN(numB)) {
      if (numA !== numB) return numA - numB;
      continue;
    }

    // กรณี: มีตัวอักษรอย่างน้อย 1 ฝั่ง → เทียบตัวอักษร
    // เช่น "SG" vs "TH" → "SG" มาก่อน "TH"
    if (segA !== segB) return segA.localeCompare(segB);
  }

  // ขั้นตอนที่ 3: ทุก segment เท่ากัน → ถือว่าเท่ากัน
  return 0;
}
