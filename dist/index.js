var t=Object.defineProperty;var r=(e,i)=>t(e,"name",{value:i,configurable:!0});/*!
 * is-odd-ts <https://github.com/JovanDj/is-odd-ts>
 *
 * Copyright (c) 2025, Jovan Djukic.
 * Released under the MIT License.
 */const n=r(e=>{if(!Number.isFinite(e))throw new TypeError("Expected a finite number");if(!Number.isInteger(e))throw new TypeError("Expected an integer");if(!Number.isSafeInteger(e))throw new RangeError("Value exceeds maximum safe integer");return e%2!==0},"isOdd");export{n as isOdd};
//# sourceMappingURL=index.js.map
