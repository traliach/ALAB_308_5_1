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

// output:
// Sum of [ 1, 2, 3 ] is 6
// Sum of [ 10, -5, 7, 3 ] is 15

// Find the longest string in an array.
// If there is a tie, this returns the first longest string.
function longestString(strings) {
  if (strings.length === 0) {
    return ""; // simple choice for empty array
  }

  let longest = strings[0];

  for (const str of strings) {
    if (str.length > longest.length) {
      longest = str;
    }
  }

  return longest;
}

// Quick tests for longestString
const words1 = ["say", "hello", "in", "the", "morning"];
const words2 = ["cat", "hippopotamus", "dog", "giraffe"];

console.log("Longest in", words1, "is", longestString(words1));
console.log("Longest in", words2, "is", longestString(words2));

