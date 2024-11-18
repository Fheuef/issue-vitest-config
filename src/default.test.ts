import { expect, it } from "vitest";
import { goodSum } from "./sum";

it("does not refresh tests", () => {
	expect(goodSum(1, 1)).toBe(2);
});

it("does not see new tests", () => {
	expect(1).toBe(1);
});
