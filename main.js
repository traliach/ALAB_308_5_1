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

// output:
// Longest in [ 'say', 'hello', 'in', 'the', 'morning' ] is morning
// Longest in [ 'cat', 'hippopotamus', 'dog', 'giraffe' ] is hippopotamus

// Return a new array of strings that are strictly longer than minLength.
// Does not change (mutate) the original array.
function stringsLongerThan(strings, minLength) {
  const result = [];

  for (const str of strings) {
    if (str.length > minLength) {
      result.push(str);
    }
  }

  return result;
}

// Quick tests for stringsLongerThan
console.log(
  "Strings longer than 3 in",
  words1,
  "are",
  stringsLongerThan(words1, 3)
);

console.log(
  "Strings longer than 4 in",
  words2,
  "are",
  stringsLongerThan(words2, 4)
);

// output:
// Strings longer than 3 in [ 'say', 'hello', 'in', 'the', 'morning' ] are [ 'say', 'hello', 'morning' ]
// Strings longer than 4 in [ 'cat', 'hippopotamus', 'dog', 'giraffe' ] are [ 'hippopotamus', 'giraffe' ]

