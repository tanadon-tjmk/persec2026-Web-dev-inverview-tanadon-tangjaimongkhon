import { describe, it, expect } from "vitest";
import { process_pre_interview_Q5 } from "./question5.js";

describe("process_pre_interview_Q5", () => {
  it("3008 => 8300 — ตัวอย่างจากโจทย์ข้อ 1", () => {
    expect(process_pre_interview_Q5(3008)).toBe(8300);
  });

  it("1989 => 9981 — ตัวอย่างจากโจทย์ข้อ 2", () => {
    expect(process_pre_interview_Q5(1989)).toBe(9981);
  });

  it("2679 => 9762 — ตัวอย่างจากโจทย์ข้อ 3", () => {
    expect(process_pre_interview_Q5(2679)).toBe(9762);
  });

  it("9163 => 9631 — ตัวอย่างจากโจทย์ข้อ 4", () => {
    expect(process_pre_interview_Q5(9163)).toBe(9631);
  });

  it("เลขหลักเดียว — คืนค่าเดิม", () => {
    expect(process_pre_interview_Q5(7)).toBe(7);
  });

  it("เลขที่เรียงจากมากไปน้อยอยู่แล้ว — คืนค่าเดิม", () => {
    expect(process_pre_interview_Q5(9876)).toBe(9876);
  });

  it("เลขที่เรียงจากน้อยไปมาก — กลับลำดับทั้งหมด", () => {
    expect(process_pre_interview_Q5(1234)).toBe(4321);
  });

  it("เลขซ้ำทั้งหมด — คืนค่าเดิม", () => {
    expect(process_pre_interview_Q5(5555)).toBe(5555);
  });

  it("เลขที่มี 0 หลายตัว — 0 ไปอยู่ท้ายสุด", () => {
    expect(process_pre_interview_Q5(1000)).toBe(1000);
  });

  it("10 => 10 — เลข 2 หลักที่มี 0", () => {
    expect(process_pre_interview_Q5(10)).toBe(10);
  });

  it("เลข 6 หลัก — 120035 => 532100", () => {
    expect(process_pre_interview_Q5(120035)).toBe(532100);
  });
});
