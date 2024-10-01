# is-odd-ts

**A strict TypeScript utility to check if a number is odd, with modern type safety and support for edge cases.**

---

Welcome to **`is-odd-ts`**, a lightweight utility for checking if a number is odd, built specifically with strict TypeScript settings. Whether you're working with everyday integers or hitting edge cases like `NaN`, `Infinity`, or very large numbers, this package has you covered.



## Why use `is-odd-ts`?

- **Type Safety**: Written in TypeScript with the strictest settings, so you get full type safety in your projects.
- **Handles Edge Cases**: Checks for non-integers, `NaN`, `Infinity`, and numbers beyond JavaScript’s safe integer range.
- **No Dependencies**: It's small, fast, and doesn’t add bloat to your project.
- **Modern ESM**: Fully compatible with modern JavaScript (ESM) and TypeScript setups.
- **Formatted and Linted**: This package is formatted and linted using [Biome.js](https://biomejs.org/), ensuring clean and consistent code.

## Installation

You can install it with `npm`:

```bash
npm install is-odd-ts
```
Or with yarn:

```bash
yarn add is-odd-ts
```

## Usage

```typescript
import { isOdd } from 'is-odd-ts';

console.log(isOdd(1));  // true
console.log(isOdd(2));  // false
console.log(isOdd(-3)); // true
console.log(isOdd(0));  // false
```

## Common Edge Cases

```typescript
isOdd(NaN);         // Throws: "Expected a finite number"
isOdd(Infinity);    // Throws: "Expected a finite number"
isOdd(-Infinity);   // Throws: "Expected a finite number"
isOdd(1.5);         // Throws: "Expected an integer"
isOdd(Number.MAX_SAFE_INTEGER);  // true
isOdd(Number.MIN_SAFE_INTEGER);  // true
```

## Features

- ***Zero and Negative Zero***: Both return false (since zero is even).
- ***Floats***: Throws an error if you try passing in a float.
- ***`Infinity` & `NaN`***: Throws errors for invalid inputs like `NaN`, `Infinity`, and -`Infinity`.
- ***Handles large numbers***: Safely checks numbers up to and including JavaScript’s `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER`.
  
## Testing & Reliability
I've put effort into testing this utility across a variety of scenarios to make sure it behaves consistently and handles edge cases properly. The tests cover:

- Regular odd and even integers (both positive and negative).
- Handling of zero and negative zero.
- Large numbers, including `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER``.
- Proper error handling for invalid inputs like `NaN`, `Infinity`, floats, and values beyond safe integer limits.

Tests have been written using Node's native test runner.
Run the tests locally with:

```bash
npm run test
```

## Contributing
If you find something missing or think the utility could be improved, feel free to contribute. Open an issue or submit a pull request, and let's keep it simple and efficient.

## License
This project is licensed under the MIT License, so feel free to use it in your own projects.

Links:

- [GitHub Repository](https://github.com/JovanDj/is-odd-ts)
- [Issue Tracker](https://github.com/JovanDj/is-odd-ts/issues)
