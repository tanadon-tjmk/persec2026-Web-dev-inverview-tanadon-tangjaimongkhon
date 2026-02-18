import { describe, it, expect } from "vitest";
import { process_pre_interview_Q2 } from "./question2.js";

describe("process_pre_interview_Q2", () => {
  it('["TH19", "SG20", "TH2"] => ["SG20", "TH2", "TH19"] — ตัวอย่างจากโจทย์ข้อ 1', () => {
    expect(process_pre_interview_Q2(["TH19", "SG20", "TH2"]))
      .toEqual(["SG20", "TH2", "TH19"]);
  });

  it('["TH10", "TH3Netflix", "TH1", "TH7"] => ["TH1", "TH3Netflix", "TH7", "TH10"] — ตัวอย่างจากโจทย์ข้อ 2', () => {
    expect(process_pre_interview_Q2(["TH10", "TH3Netflix", "TH1", "TH7"]))
      .toEqual(["TH1", "TH3Netflix", "TH7", "TH10"]);
  });

  it("เรียงตัวอักษรนำหน้าก่อน แล้วค่อยเรียงตัวเลข", () => {
    expect(process_pre_interview_Q2(["B2", "A10", "A2", "B1"]))
      .toEqual(["A2", "A10", "B1", "B2"]);
  });

  it("รับ array ที่มีแค่ 1 ตัว — คืนค่าเดิม", () => {
    expect(process_pre_interview_Q2(["TH1"])).toEqual(["TH1"]);
  });

  it("รับ array ว่าง — คืน array ว่าง", () => {
    expect(process_pre_interview_Q2([])).toEqual([]);
  });

  it("prefix เหมือนกัน เรียงตามตัวเลขจากน้อยไปมาก", () => {
    expect(process_pre_interview_Q2(["EP100", "EP3", "EP20", "EP1"]))
      .toEqual(["EP1", "EP3", "EP20", "EP100"]);
  });

  it("มี suffix ต่อท้ายตัวเลข — ตัวที่ไม่มี suffix มาก่อน", () => {
    expect(process_pre_interview_Q2(["TH5Pro", "TH5", "TH2Max", "TH2"]))
      .toEqual(["TH2", "TH2Max", "TH5", "TH5Pro"]);
  });

  it("ไม่แก้ไข array เดิม — คืน array ใหม่เสมอ", () => {
    const original = ["TH19", "SG20", "TH2"];
    process_pre_interview_Q2(original);
    expect(original).toEqual(["TH19", "SG20", "TH2"]);
  });

  it("string ที่เป็นตัวอักษรล้วน — เรียงตามตัวอักษร", () => {
    expect(process_pre_interview_Q2(["Banana", "Apple", "Cherry"]))
      .toEqual(["Apple", "Banana", "Cherry"]);
  });

  it("string ที่เป็นตัวเลขล้วน — เรียงตามค่าตัวเลข ไม่ใช่ตัวอักษร", () => {
    expect(process_pre_interview_Q2(["100", "3", "20", "1"]))
      .toEqual(["1", "3", "20", "100"]);
  });
});
