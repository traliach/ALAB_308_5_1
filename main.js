// =======================
// Part 1: Thinking Functionally
// =======================

// Sum all numbers in an array and return the total.
// Example: sumNumbers([1, 2, 3]) -> 6
function sumNumbers(numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

// Quick tests for sumNumbers
const sampleNumbers1 = [1, 2, 3];
const sampleNumbers2 = [10, -5, 7, 3];

console.log("Sum of", sampleNumbers1, "is", sumNumbers(sampleNumbers1));
console.log("Sum of", sampleNumbers2, "is", sumNumbers(sampleNumbers2));


