import assert from "node:assert/strict";
import { test } from "node:test";

import fc from "fast-check";

import { isOdd } from "./index.ts";

test("isOdd function with integers", { concurrency: true }, (t) => {
	t.test("should return true when the input is an odd positive integer", () => {
		assert.deepStrictEqual<boolean>(isOdd(1), true);
		assert.deepStrictEqual<boolean>(isOdd(3), true);
	});

	t.test("should return true when the input is an odd negative integer", () => {
		assert.deepStrictEqual<boolean>(isOdd(-1), true);
		assert.deepStrictEqual<boolean>(isOdd(-3), true);
	});

	t.test(
		"should return false when the input is an even positive integer",
		() => {
			assert.deepStrictEqual<boolean>(isOdd(2), false);
			assert.deepStrictEqual<boolean>(isOdd(4), false);
		},
	);

	t.test(
		"should return false when the input is an even negative integer",
		() => {
			assert.deepStrictEqual<boolean>(isOdd(-2), false);
			assert.deepStrictEqual<boolean>(isOdd(-4), false);
		},
	);

	t.test("should return false when the input is zero", () => {
		assert.deepStrictEqual<boolean>(isOdd(0), false);
	});

	t.test("should return false when the input is negative zero", () => {
		assert.deepStrictEqual<boolean>(isOdd(-0), false);
	});

	t.test("should throw an error when the input is a positive float", () => {
		assert.throws(() => isOdd(1.5), {
			message: "Expected an integer",
		});
	});

	t.test("should throw an error when the input is a negative float", () => {
		assert.throws(() => isOdd(-1.5), {
			message: "Expected an integer",
		});
	});
});

test(
	"isOdd function with special constants and edge cases",
	{ concurrency: true },
	(t) => {
		t.test("should throw an error when the input is NaN", () => {
			assert.throws(() => isOdd(Number.NaN), {
				message: "Expected a finite number",
			});
		});

		t.test("should throw an error when the input is Infinity", () => {
			assert.throws(() => isOdd(Number.POSITIVE_INFINITY), {
				message: "Expected a finite number",
			});
		});

		t.test("should throw an error when the input is -Infinity", () => {
			assert.throws(() => isOdd(Number.NEGATIVE_INFINITY), {
				message: "Expected a finite number",
			});
		});

		t.test(
			"should return true when the input is Number.MAX_SAFE_INTEGER (positive)",
			() => {
				assert.deepStrictEqual<boolean>(isOdd(Number.MAX_SAFE_INTEGER), true);
			},
		);

		t.test(
			"should return false when the input is the largest even safe integer (positive)",
			() => {
				assert.deepStrictEqual<boolean>(
					isOdd(Number.MAX_SAFE_INTEGER - 1),
					false,
				);
			},
		);

		t.test(
			"should return true when the input is Number.MIN_SAFE_INTEGER (negative)",
			() => {
				assert.deepStrictEqual<boolean>(isOdd(Number.MIN_SAFE_INTEGER), true);
			},
		);

		t.test(
			"should return false when the input is the smallest even integer below MIN_SAFE_INTEGER",
			() => {
				assert.deepStrictEqual<boolean>(
					isOdd(Number.MIN_SAFE_INTEGER + 1),
					false,
				);
			},
		);

		t.test(
			"should throw an error when the input is exactly one more than Number.MAX_SAFE_INTEGER",
			() => {
				assert.throws(() => isOdd(Number.MAX_SAFE_INTEGER + 1), {
					message: "Value exceeds maximum safe integer",
				});
			},
		);

		t.test(
			"should throw an error when the input is exactly one less than Number.MIN_SAFE_INTEGER",
			() => {
				assert.throws(() => isOdd(Number.MIN_SAFE_INTEGER - 1), {
					message: "Value exceeds maximum safe integer",
				});
			},
		);

		t.test(
			"should return false when the input is a large even negative integer",
			() => {
				assert.deepStrictEqual<boolean>(isOdd(-9007199254740990), false);
			},
		);

		t.test(
			"should return true when the input is a large odd negative integer",
			() => {
				assert.deepStrictEqual<boolean>(isOdd(-9007199254740991), true);
			},
		);
	},
);

test(
	"isOdd property: returns true for all safe odd integers",
	{ concurrency: true },
	() => {
		fc.assert(
			fc.property(
				fc.maxSafeInteger().filter((n) => Math.abs(n % 2) === 1),
				(n) => assert.deepStrictEqual<boolean>(isOdd(n), true),
			),
		);
	},
);

test(
	"isOdd property: returns false for all safe even integers",
	{ concurrency: true },
	() => {
		fc.assert(
			fc.property(
				fc.maxSafeInteger().filter((n) => n % 2 === 0),
				(n) => assert.deepStrictEqual<boolean>(isOdd(n), false),
			),
		);
	},
);

test("isOdd property — floats throw", { concurrency: true }, () => {
	fc.assert(
		fc.property(
			fc.float({
				noNaN: true,
				noDefaultInfinity: true,
				noInteger: true,
			}),
			(n) => assert.throws(() => isOdd(n)),
		),
	);
});

test("isOdd property — doubles throw", { concurrency: true }, () => {
	fc.assert(
		fc.property(
			fc.double({
				noNaN: true,
				noDefaultInfinity: true,
				noInteger: true,
			}),
			(n) => assert.throws(() => isOdd(n)),
		),
	);
});
