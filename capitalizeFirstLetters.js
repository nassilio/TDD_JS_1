// capitalizeFirstLetters.js
const assert = require("assert");

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(input) {
  return input.length > 0 ? input[0].toUpperCase() + input.slice(1) : "";
}

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, "function");
// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters("javaScript"), "JavaScript");
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters("z"), "Z");
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(""), "");
