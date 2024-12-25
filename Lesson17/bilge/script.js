// 1. Write a loop that prints out the numbers from 1 to 10.

console.log('Ex. 1: ');

for (let i = 1; i < 11; i++) {
  console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');

// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...

console.log('Ex. 2: ');

for (let i = 1; i < 21; i = i + 2) {
  console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');

// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...

console.log('Ex. 3: ');

for (let i = 1; i < 20; i = i + 2) {
  console.log(i+1);
}

console.log('- - - - - - - - - - - - - - - - - ');

// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [-10, -50, -20];
// [300, 100, 10, 23, 42, 505, 12, 7, 4, 900];
let maximumNumber = findMaxNumberInArray[0];

for (let i = 1; i < findMaxNumberInArray.length; i++) {
  if (findMaxNumberInArray[i] > maximumNumber) {
      maximumNumber = findMaxNumberInArray[i];
  }
}

console.log('Ex. 4: ');
console.log('Maximum Number In Array is : ' + maximumNumber);

console.log('- - - - - - - - - - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [1, 10, 23, 42, 0, 12, 7, 0];
let minimumNumber = 0;

for (let i = 0; i < findMinNumberInArray.length; i++) {
  if (findMinNumberInArray[i] < minimumNumber) {
    minimumNumber = findMinNumberInArray[i];
  }
}

console.log('Ex. 5: ');
console.log('Minimum Number In Array is : ' + minimumNumber);

console.log('- - - - - - - - - - - - - - - - - ');

// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let reversedString = "";

for (let i = string.length - 1; i >= 0; i--) {
reversedString = reversedString + string[i];
}

console.log('Ex. 6: ');
console.log('The reverse of this string is: ' + reversedString);
console.log('- - - - - - - - - - - - - - - - - ');

// 7. Write a while loop that counts from 10 to 1 and prints out each number.

console.log('Ex. 7: ');

for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');

// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.

console.log('Ex. 8: ');

let iterations = 0; 
let randomNumber; // Declare randomNumber outside the loop

while (true) { // Runs until the break condition is met
  randomNumber = Math.floor(Math.random() * 10) + 1; 
  console.log(`The generated random number is: ${randomNumber}`);
  iterations++; 
  if (randomNumber > 8) {
    console.log('Random number is greater than 8!');
    break; 
  }
}

console.log('Total iterations: ' + iterations); // Print the total number of iterations
console.log('- - - - - - - - - - - - - - - - - ');

// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.

console.log('Ex. 9: ');

let k = 1;
do {
    console.log('Do-while loop iteration:', k);
    k++;
} while (k <= 10);

console.log('- - - - - - - - - - - - - - - - - ');

// The for...in loop in JavaScript is used for iterating over the properties of an object. 
// for (variable in object) {
//   // code to be executed for each property
// }

// 10. Write a for...in loop that prints out the keys and values of an object.
const person = { name: "John", surname: "Doe", age: 30, city: "New York" };

console.log('Ex. 10: ');

for ( const key in person){
  console.log(`${key}: ${person[key]}`);
}


// 11. Write a for...in loop that sums the values of an object.
const obj = { a: 10, b: 20, c: 30, d: 23 };

console.log('Ex. 11: ');

for ( const key in obj){
  console.log(`${key}: ${obj[key]}`);
}