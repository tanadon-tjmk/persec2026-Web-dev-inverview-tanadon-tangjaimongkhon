import { describe, it, expect } from "vitest";
import {
  process_pre_interview_Q4_intToRoman,
  process_pre_interview_Q4_romanToInt,
} from "./question4.js";

// =============================================
// ฟังก์ชันที่ 1: Int → Roman
// =============================================
describe("process_pre_interview_Q4_intToRoman", () => {
  it("1989 => MCMLXXXIX — ตัวอย่างจากโจทย์", () => {
    expect(process_pre_interview_Q4_intToRoman(1989)).toBe("MCMLXXXIX");
  });

  it("2000 => MM — ตัวอย่างจากโจทย์", () => {
    expect(process_pre_interview_Q4_intToRoman(2000)).toBe("MM");
  });

  it("68 => LXVIII — ตัวอย่างจากโจทย์", () => {
    expect(process_pre_interview_Q4_intToRoman(68)).toBe("LXVIII");
  });

  it("109 => CIX — ตัวอย่างจากโจทย์", () => {
    expect(process_pre_interview_Q4_intToRoman(109)).toBe("CIX");
  });

  it("1 => I — ค่าน้อยที่สุด", () => {
    expect(process_pre_interview_Q4_intToRoman(1)).toBe("I");
  });

  it("4 => IV — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_intToRoman(4)).toBe("IV");
  });

  it("9 => IX — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_intToRoman(9)).toBe("IX");
  });

  it("40 => XL — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_intToRoman(40)).toBe("XL");
  });

  it("90 => XC — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_intToRoman(90)).toBe("XC");
  });

  it("400 => CD — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_intToRoman(400)).toBe("CD");
  });

  it("900 => CM — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_intToRoman(900)).toBe("CM");
  });

  it("3999 => MMMCMXCIX — ค่ามากที่สุดที่ใช้ได้", () => {
    expect(process_pre_interview_Q4_intToRoman(3999)).toBe("MMMCMXCIX");
  });

  it("58 => LVIII", () => {
    expect(process_pre_interview_Q4_intToRoman(58)).toBe("LVIII");
  });

  it("1994 => MCMXCIV", () => {
    expect(process_pre_interview_Q4_intToRoman(1994)).toBe("MCMXCIV");
  });
});

// =============================================
// ฟังก์ชันที่ 2: Roman → Int
// =============================================
describe("process_pre_interview_Q4_romanToInt", () => {
  it("MCMLXXXIX => 1989 — ตัวอย่างจากโจทย์", () => {
    expect(process_pre_interview_Q4_romanToInt("MCMLXXXIX")).toBe(1989);
  });

  it("MM => 2000 — ตัวอย่างจากโจทย์", () => {
    expect(process_pre_interview_Q4_romanToInt("MM")).toBe(2000);
  });

  it("LXVIII => 68 — ตัวอย่างจากโจทย์", () => {
    expect(process_pre_interview_Q4_romanToInt("LXVIII")).toBe(68);
  });

  it("CIX => 109 — ตัวอย่างจากโจทย์", () => {
    expect(process_pre_interview_Q4_romanToInt("CIX")).toBe(109);
  });

  it("I => 1 — ค่าน้อยที่สุด", () => {
    expect(process_pre_interview_Q4_romanToInt("I")).toBe(1);
  });

  it("IV => 4 — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_romanToInt("IV")).toBe(4);
  });

  it("IX => 9 — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_romanToInt("IX")).toBe(9);
  });

  it("XL => 40 — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_romanToInt("XL")).toBe(40);
  });

  it("XC => 90 — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_romanToInt("XC")).toBe(90);
  });

  it("CD => 400 — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_romanToInt("CD")).toBe(400);
  });

  it("CM => 900 — รูปแบบลบ (subtractive)", () => {
    expect(process_pre_interview_Q4_romanToInt("CM")).toBe(900);
  });

  it("MMMCMXCIX => 3999 — ค่ามากที่สุดที่ใช้ได้", () => {
    expect(process_pre_interview_Q4_romanToInt("MMMCMXCIX")).toBe(3999);
  });

  it("LVIII => 58", () => {
    expect(process_pre_interview_Q4_romanToInt("LVIII")).toBe(58);
  });

  it("MCMXCIV => 1994", () => {
    expect(process_pre_interview_Q4_romanToInt("MCMXCIV")).toBe(1994);
  });
});
