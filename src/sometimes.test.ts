import { expect, it } from "vitest";
import { goodSum } from "./sum";

it("refreshes tests", () => {
	expect(goodSum(1, 1)).toBe(2);
});

it("sees new tests", () => {
	expect(1).toBe(1);
});
