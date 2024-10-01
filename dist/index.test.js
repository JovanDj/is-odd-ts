"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = __importDefault(require("node:assert/strict"));
const node_test_1 = require("node:test");
const index_js_1 = require("./index.js");
(0, node_test_1.test)("isOdd function with integers", async (t) => {
    await t.test("should return true when the input is an odd positive integer", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(1), true);
        strict_1.default.strictEqual((0, index_js_1.isOdd)(3), true);
    });
    await t.test("should return true when the input is an odd negative integer", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(-1), true);
        strict_1.default.strictEqual((0, index_js_1.isOdd)(-3), true);
    });
    await t.test("should return false when the input is an even positive integer", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(2), false);
        strict_1.default.strictEqual((0, index_js_1.isOdd)(4), false);
    });
    await t.test("should return false when the input is an even negative integer", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(-2), false);
        strict_1.default.strictEqual((0, index_js_1.isOdd)(-4), false);
    });
    await t.test("should return false when the input is zero", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(0), false);
    });
    await t.test("should return false when the input is negative zero", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(-0), false);
    });
    await t.test("should throw an error when the input is a positive float", () => {
        strict_1.default.throws(() => (0, index_js_1.isOdd)(1.5), {
            message: "Expected an integer",
        });
    });
    await t.test("should throw an error when the input is a negative float", () => {
        strict_1.default.throws(() => (0, index_js_1.isOdd)(-1.5), {
            message: "Expected an integer",
        });
    });
});
(0, node_test_1.test)("isOdd function with special constants and edge cases", async (t) => {
    await t.test("should throw an error when the input is NaN", () => {
        strict_1.default.throws(() => (0, index_js_1.isOdd)(Number.NaN), {
            message: "Expected a finite number",
        });
    });
    await t.test("should throw an error when the input is Infinity", () => {
        strict_1.default.throws(() => (0, index_js_1.isOdd)(Number.POSITIVE_INFINITY), {
            message: "Expected a finite number",
        });
    });
    await t.test("should throw an error when the input is -Infinity", () => {
        strict_1.default.throws(() => (0, index_js_1.isOdd)(Number.NEGATIVE_INFINITY), {
            message: "Expected a finite number",
        });
    });
    await t.test("should return true when the input is Number.MAX_SAFE_INTEGER (positive)", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(Number.MAX_SAFE_INTEGER), true);
    });
    await t.test("should return false when the input is the largest even safe integer (positive)", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(Number.MAX_SAFE_INTEGER - 1), false);
    });
    await t.test("should return true when the input is Number.MIN_SAFE_INTEGER (negative)", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(Number.MIN_SAFE_INTEGER), true);
    });
    await t.test("should return false when the input is the smallest even integer below MIN_SAFE_INTEGER", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(Number.MIN_SAFE_INTEGER + 1), false);
    });
    await t.test("should throw an error when the input is exactly one more than Number.MAX_SAFE_INTEGER", () => {
        strict_1.default.throws(() => (0, index_js_1.isOdd)(Number.MAX_SAFE_INTEGER + 1), {
            message: "Value exceeds maximum safe integer",
        });
    });
    await t.test("should throw an error when the input is exactly one less than Number.MIN_SAFE_INTEGER", () => {
        strict_1.default.throws(() => (0, index_js_1.isOdd)(Number.MIN_SAFE_INTEGER - 1), {
            message: "Value exceeds maximum safe integer",
        });
    });
    await t.test("should return false when the input is a large even negative integer", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(-9007199254740990), false);
    });
    await t.test("should return true when the input is a large odd negative integer", () => {
        strict_1.default.strictEqual((0, index_js_1.isOdd)(-9007199254740991), true);
    });
});
//# sourceMappingURL=index.test.js.map