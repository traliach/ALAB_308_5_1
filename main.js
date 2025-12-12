function sumArray(numbers) {
  let total = 0;
  for (const value of numbers) total += value;
  return total;
}

console.log("sumArray([1,2,3]) =", sumArray([1, 2, 3])); // 6

// output:
// sumArray([1,2,3]) = 6

