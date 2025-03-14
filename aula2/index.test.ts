import subitrai from ".";
import { expect, test } from "@jest/globals";

const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);

test(`subitrai ${a}-${b} retorna ${a-b}`, () => {
  expect(subitrai(a, b)).toBe(a-b);
});

test("subitrai 2-1 retorna 1", () => {
  expect(subitrai(2, 1)).toBe(1);
});
test("subitrai 3-1 retorna 2", () => {
  expect(subitrai(3, 1)).toBe(2);
});
test("subitrai 1-3 retorna -2", () => {
  expect(subitrai(1, 3)).toBe(-2);
});