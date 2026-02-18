import { describe, it, expect } from "vitest";
import { process_pre_interview_Q3 } from "./question3.js";

describe("process_pre_interview_Q3", () => {
  const sampleItems = ["Mother", "Think", "Worthy", "Apple", "Android"];

  it('ตัวอย่างจากโจทย์ — autocomplete("th", items, 2) => ["Think", "Mother"]', () => {
    expect(process_pre_interview_Q3("th", sampleItems, 2))
      .toEqual(["Think", "Mother"]);
  });

  it("ไม่จำกัดผลลัพธ์ — ได้ครบทุกคำที่ตรง เรียงตาม ขึ้นต้น > กลาง > ท้าย", () => {
    expect(process_pre_interview_Q3("th", sampleItems, 10))
      .toEqual(["Think", "Mother", "Worthy"]);
  });

  it("ค้นหาแบบ ignore case — ตัวเล็กตัวใหญ่ไม่มีผล", () => {
    expect(process_pre_interview_Q3("TH", sampleItems, 10))
      .toEqual(["Think", "Mother", "Worthy"]);
  });

  it("ไม่พบผลลัพธ์ — คืน array ว่าง", () => {
    expect(process_pre_interview_Q3("xyz", sampleItems, 5))
      .toEqual([]);
  });

  it("maxResult = 0 — คืน array ว่าง", () => {
    expect(process_pre_interview_Q3("th", sampleItems, 0))
      .toEqual([]);
  });

  it("คำที่ search อยู่ท้ายคำ — มาหลังสุด", () => {
    const items = ["Growth", "Think", "Mother"];
    expect(process_pre_interview_Q3("th", items, 10))
      .toEqual(["Think", "Mother", "Growth"]);
  });

  it("เรียงลำดับ: ขึ้นต้น > กลาง > ท้าย ครบทั้ง 3 กลุ่ม", () => {
    const items = ["Growth", "Python", "Theater", "Math"];
    // Theater = ขึ้นต้น, Python = กลาง, Growth/Math = ท้าย (เรียงตัวอักษร)
    expect(process_pre_interview_Q3("th", items, 10))
      .toEqual(["Theater", "Python", "Growth", "Math"]);
  });

  it("กลุ่มเดียวกัน ตำแหน่งเดียวกัน — เรียงตามตัวอักษร", () => {
    const items = ["Ether", "Athena", "Other"];
    expect(process_pre_interview_Q3("th", items, 10))
      .toEqual(["Athena", "Ether", "Other"]);
  });

  it("search เป็น string ว่าง — ทุกคำ match (ขึ้นต้นด้วย '') เรียงตามตัวอักษร", () => {
    // ทุกคำ match ที่ index 0 = กลุ่มขึ้นต้นเหมือนกัน → เรียงตามตัวอักษร
    expect(process_pre_interview_Q3("", sampleItems, 3))
      .toEqual(["Android", "Apple", "Mother"]);
  });

  it("items เป็น array ว่าง — คืน array ว่าง", () => {
    expect(process_pre_interview_Q3("th", [], 5))
      .toEqual([]);
  });

  it("maxResult = 1 — ได้แค่ตัวแรกที่ตรงที่สุด", () => {
    expect(process_pre_interview_Q3("th", sampleItems, 1))
      .toEqual(["Think"]);
  });

  it("ค้นหาคำเต็ม — ต้องเจอตัวเอง", () => {
    expect(process_pre_interview_Q3("Apple", sampleItems, 5))
      .toEqual(["Apple"]);
  });
});
