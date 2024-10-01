/*!
 * is-odd-ts <https://github.com/JovanDj/is-odd-ts>
 *
 * Copyright (c) 2024, Jovan Djukic.
 * Released under the MIT License.
 */

/**
 * Checks if a given number is odd.
 *
 * This function validates that the input is a finite, safe integer before determining
 * if it's odd. It works with both positive and negative numbers. If the input is invalid,
 * such as a float, NaN, Infinity, or a number outside the safe integer range, the function
 * throws an appropriate error.
 *
 * @param {number} num - The number to check if it's odd.
 * @returns {boolean} - Returns `true` if the number is odd, `false` if it's even.
 * @throws {TypeError} - Throws if the input is not a finite number.
 * @throws {Error} - Throws if the input is not an integer or exceeds the safe integer limit.
 */
export const isOdd = (num: number): boolean => {
	if (!Number.isFinite(num)) {
		throw new TypeError("Expected a finite number");
	}

	if (!Number.isInteger(num)) {
		throw new Error("Expected an integer");
	}

	if (!Number.isSafeInteger(num)) {
		throw new Error("Value exceeds maximum safe integer");
	}

	return num % 2 !== 0;
};
