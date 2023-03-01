import { sum } from "../sum";

test("should check sum for two positive number", () => {
  expect(sum(2, 5)).toBe(7);
});
