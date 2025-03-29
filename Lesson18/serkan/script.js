// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10
const integersEx1 = [1, 2, 3, 4];
const integersEx1V2 = [10, 2, 30, 4];

function sumofArray (integersEx1) {
let sum = 0;
for (let i=0; i < integersEx1.length; i++) {
  sum+= integersEx1[i];

}
return sum;
}

console.log(sumofArray([1, 2, 3, 4]));
console.log("Exercise 1: ");
console.log('----------------------------');
// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5

const integersEx2 = [1, 2, 3, 4];
function getAvgArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  const avgArray = sum / array.length;
  return avgArray;
}

console.log(getAvgArray([1, 2, 3, 4]));
console.log("Exercise 2:");

console.log('----------------------------');
// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World !"

let stringE3 = ["Hello", "World", "!"];

console.log(stringE3.join(' '));


console.log("Exercise 3:");

console.log('----------------------------');
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 3, 7]
const arrayAllNumbers = [1, 2, 3, 4, 7, 10];
function takeOddNumber (array) {
  let oddNumber = [];
  for (let i=0; i< array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNumber.push(array[i]);
    }
  }
  return oddNumber; 
}
console.log(takeOddNumber(arrayAllNumbers));

console.log("Ex4");
console.log('----------------------------');
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]
const testArrayEx5 = [1, 2, 3, 4, 7, 10];
function takeEvenNumber (array) {
  let evenNumber = [];
  for (let i=0; i< array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumber.push(array[i]);
    }
  }
  return evenNumber; 
}
console.log(takeEvenNumber(testArrayEx5));

// I couldn't include '1' number here, I don't know how to do it.


console.log('Exercise 5: ');
console.log('----------------------------');
// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]
const testArrayEx6 = [1, 2, 3, 4, 2];

function removeValueFromArray (value, array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (value !== array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(removeValueFromArray(2, testArrayEx6));

console.log("exercise 6:");
console.log('----------------------------');
// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]
const testObjEx7 = { name: "John", age: 30, city: "New York" };

function takeObjOfArray (object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}
console.log(takeObjOfArray(testObjEx7));


console.log("exercise 7:");
console.log('----------------------------');
// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]
const testObjEx8 = { name: "John", age: 30, city: "New York" };

function takeValOfArray (value) {
  let values = [];
  for (let key in value) {
    values.push(value[key]);
  }
  return values;
}
console.log(takeValOfArray(testObjEx8));


console.log("exercise 8:");
console.log('----------------------------');
// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false
const testObjEx9 = { name: "John", age: 30, city: "New York" };

function getKeyArray(object, key) {
  return key in object;
}

console.log(getKeyArray(testObjEx9, "name"));
console.log(getKeyArray(testObjEx9, "surname"));

console.log("Ex 9:");

console.log('----------------------------');


// I honestly had a hard time with exercises 10, 11 and 12. I didn't know what to do.




// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}
const testObjEx10 = { name: "John", age: 30 };


console.log('----------------------------');
// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}
const testObjEx11 = { name: "John", age: 30, city: "New York" };


console.log('----------------------------');
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}
const array1Ex12 = ["name", "age", "city"];
const array2Ex12 = ["John", 30, "New York"];