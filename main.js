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

// Print numbers from 1 up to n using recursion (no loops).
function printNumbersRecursively(n, current = 1) {
  if (current > n) {
    return; // base case: stop when current is greater than n
  }

  console.log(current);
  printNumbersRecursively(n, current + 1); // recursive step
}

// Quick tests for printNumbersRecursively
console.log("Printing numbers from 1 to 5:");
printNumbersRecursively(5);

// output:
// Printing numbers from 1 to 5:
// 1
// 2
// 3
// 4
// 5    

// =======================
// Part 2: Thinking Methodically (Array Methods + Callbacks)
// =======================

const people = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

console.log("People data:", people);

// output:
// People data: [
//   { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
//   { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
//   { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
//   { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
//   { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
// ]

// Sort the people by age (ascending) and return a NEW array.
function sortByAge(peopleArray) {
  return peopleArray
    .slice() // make a copy so we don't mutate the original
    .sort((a, b) => Number(a.age) - Number(b.age));
}

const peopleSortedByAge = sortByAge(people);
console.log("People sorted by age:", peopleSortedByAge);

// output: