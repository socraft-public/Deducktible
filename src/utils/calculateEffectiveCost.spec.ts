import { describe, expect, it } from "vitest";
import { calculateEffectiveCost } from "./calculateEffectiveCost";

describe("calculateEffectiveCost", () => {
  it("should correctly calculate effective cost when totalBilled is less than or equal to franchise", () => {
    expect(calculateEffectiveCost(500, 1000, 400)).toBe(1400);
    expect(calculateEffectiveCost(1000, 500, 800)).toBe(1300);
  });
});
