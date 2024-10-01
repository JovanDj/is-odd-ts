import assert from "node:assert/strict";
import { test } from "node:test";

import { isOdd } from "./index.js";

test("isOdd function with integers", async (t) => {
	await t.test(
		"should return true when the input is an odd positive integer",
		() => {
			assert.strictEqual(isOdd(1), true);
			assert.strictEqual(isOdd(3), true);
		},
	);

	await t.test(
		"should return true when the input is an odd negative integer",
		() => {
			assert.strictEqual(isOdd(-1), true);
			assert.strictEqual(isOdd(-3), true);
		},
	);

	await t.test(
		"should return false when the input is an even positive integer",
		() => {
			assert.strictEqual(isOdd(2), false);
			assert.strictEqual(isOdd(4), false);
		},
	);

	await t.test(
		"should return false when the input is an even negative integer",
		() => {
			assert.strictEqual(isOdd(-2), false);
			assert.strictEqual(isOdd(-4), false);
		},
	);

	await t.test("should return false when the input is zero", () => {
		assert.strictEqual(isOdd(0), false);
	});

	await t.test("should return false when the input is negative zero", () => {
		assert.strictEqual(isOdd(-0), false);
	});

	await t.test(
		"should throw an error when the input is a positive float",
		() => {
			assert.throws(() => isOdd(1.5), {
				message: "Expected an integer",
			});
		},
	);

	await t.test(
		"should throw an error when the input is a negative float",
		() => {
			assert.throws(() => isOdd(-1.5), {
				message: "Expected an integer",
			});
		},
	);
});

test("isOdd function with special constants and edge cases", async (t) => {
	await t.test("should throw an error when the input is NaN", () => {
		assert.throws(() => isOdd(Number.NaN), {
			message: "Expected a finite number",
		});
	});

	await t.test("should throw an error when the input is Infinity", () => {
		assert.throws(() => isOdd(Number.POSITIVE_INFINITY), {
			message: "Expected a finite number",
		});
	});

	await t.test("should throw an error when the input is -Infinity", () => {
		assert.throws(() => isOdd(Number.NEGATIVE_INFINITY), {
			message: "Expected a finite number",
		});
	});

	await t.test(
		"should return true when the input is Number.MAX_SAFE_INTEGER (positive)",
		() => {
			assert.strictEqual(isOdd(Number.MAX_SAFE_INTEGER), true);
		},
	);

	await t.test(
		"should return false when the input is the largest even safe integer (positive)",
		() => {
			assert.strictEqual(isOdd(Number.MAX_SAFE_INTEGER - 1), false);
		},
	);

	await t.test(
		"should return true when the input is Number.MIN_SAFE_INTEGER (negative)",
		() => {
			assert.strictEqual(isOdd(Number.MIN_SAFE_INTEGER), true);
		},
	);

	await t.test(
		"should return false when the input is the smallest even integer below MIN_SAFE_INTEGER",
		() => {
			assert.strictEqual(isOdd(Number.MIN_SAFE_INTEGER + 1), false);
		},
	);

	await t.test(
		"should throw an error when the input is exactly one more than Number.MAX_SAFE_INTEGER",
		() => {
			assert.throws(() => isOdd(Number.MAX_SAFE_INTEGER + 1), {
				message: "Value exceeds maximum safe integer",
			});
		},
	);

	await t.test(
		"should throw an error when the input is exactly one less than Number.MIN_SAFE_INTEGER",
		() => {
			assert.throws(() => isOdd(Number.MIN_SAFE_INTEGER - 1), {
				message: "Value exceeds maximum safe integer",
			});
		},
	);

	await t.test(
		"should return false when the input is a large even negative integer",
		() => {
			assert.strictEqual(isOdd(-9007199254740990), false);
		},
	);

	await t.test(
		"should return true when the input is a large odd negative integer",
		() => {
			assert.strictEqual(isOdd(-9007199254740991), true);
		},
	);
});
