// Exercise 1:
// Given an array of numbers, sort the numbers in ascending order.
const numbers = [3, 1, 4, 11, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers=[...numbers].sort((a, b) => a - b);
console.log(numbers,sortedNumbers);

//
// Exercise 2: Sorting Strings
// Sort an array of strings in alphabetical order.
// Expected output: ["apple", "banana", "grape", "orange", "pear"]
const fruits = ["banana", "apple", "ápp", "pear", "Orange", "grape"];
const alphabeticalOrder = [...fruits].sort((a,b) => b.localeCompare(a));
console.log(alphabeticalOrder);

// Exercise 3: Descending Order
// Sort an array of numbers in descending order.
// Expected output: [100, 40, 25, 10, 5, 1]
const scores = [40, 100, 1, 5, 25, 10];

const descendingScores = scores.sort((a, b) => b - a);
console.log('Ex. 3', descendingScores);


// Exercise 4: Sorting Objects
// Sort an array of objects based on a specific property (e.g., age).
// Expected output: Sorted array by age in ascending order
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Gary", age: 35 },
  { name: "Ellen", age: 22 }
];

const ascendingAge = [...people].sort((a, b) => a.age - b.age);
console.log('Ex. 4', ascendingAge);


// Exercise 5: Complex Sorting
// Sort an array of strings by their length.
// Expected output: ["pen", "book", "paper", "pencil", "notebook"]

const words = ["notebook", "pen", "paper", "book", "pencil"];

const wordLength = [...words].sort((a, b) => a.length - b.length);
console.log('Ex. 5', wordLength);


