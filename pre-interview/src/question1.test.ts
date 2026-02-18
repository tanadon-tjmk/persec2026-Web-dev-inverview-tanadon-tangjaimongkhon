import { describe, it, expect } from "vitest";
import { process_pre_interview_Q1 } from "./question1.js";

describe("process_pre_interview_Q1", () => {
  it('"()" => true — วงเล็บเปิดปิดครบคู่', () => {
    expect(process_pre_interview_Q1("()")).toBe(true);
  });

  it('"([]]" => false — วงเล็บปิดเกินมา 1 ตัว', () => {
    expect(process_pre_interview_Q1("([]]")).toBe(false);
  });

  it('"([0])" => true — มีตัวอักษรอยู่ข้างในแต่วงเล็บครบคู่', () => {
    expect(process_pre_interview_Q1("([0])")).toBe(true);
  });

  it('"([[0]]]" => false — วงเล็บปิดเกินมา 1 ตัว', () => {
    expect(process_pre_interview_Q1("([[0]]]")).toBe(false);
  });

  it('")" => false — มีแค่วงเล็บปิดตัวเดียว ไม่มีตัวเปิด', () => {
    expect(process_pre_interview_Q1(")")).toBe(false);
  });

  it('"(])])" => false — วงเล็บเปิดปิดไม่ตรงคู่กัน', () => {
    expect(process_pre_interview_Q1("(])])")).toBe(false);
  });

  it('"([)]" => false — วงเล็บสลับลำดับกัน (interleaved)', () => {
    expect(process_pre_interview_Q1("([)]")).toBe(false);
  });

  it('"(" => false — เปิดวงเล็บแล้วไม่ปิด', () => {
    expect(process_pre_interview_Q1("(")).toBe(false);
  });

  it('"" => true — string ว่าง ไม่มีวงเล็บเลย ถือว่าครบ', () => {
    expect(process_pre_interview_Q1("")).toBe(true);
  });

  it('"{[]()}" => true — วงเล็บหลายแบบผสมกันแต่ครบคู่', () => {
    expect(process_pre_interview_Q1("{[]()}")).toBe(true);
  });

  it('"hello" => true — ไม่มีวงเล็บเลย ถือว่าครบ', () => {
    expect(process_pre_interview_Q1("hello")).toBe(true);
  });

  it('"(a + b) * [c - d]" => true — นิพจน์คณิตศาสตร์ วงเล็บครบคู่', () => {
    expect(process_pre_interview_Q1("(a + b) * [c - d]")).toBe(true);
  });

  it('"(((" => false — เปิดวงเล็บหลายตัวแต่ไม่ปิดเลย', () => {
    expect(process_pre_interview_Q1("(((")).toBe(false);
  });

  it('")))" => false — มีแต่วงเล็บปิด ไม่มีตัวเปิด', () => {
    expect(process_pre_interview_Q1(")))")).toBe(false);
  });
});
