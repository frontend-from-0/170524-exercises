// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10
const integersEx1 = [1, 2, 3, 4];
const integersEx1V2 = [10, 2, 30, 4];

function getSumOfArray(array) {

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(getSumOfArray(integersEx1));
console.log(getSumOfArray(integersEx1V2));

console.log(getSumOfArray([...integersEx1, ...integersEx1V2]));
console.log([...integersEx1, ...integersEx1V2]); // [1, 2, 3, 4, 10, 2, 30, 4]
console.log([integersEx1, integersEx1V2]); // [[1, 2, 3, 4], [10, 2, 30, 4]]

console.log("Exercise 1: ");
console.log('----------------------------');
// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5
const integersEx2 = [1, 2, 3, 4];

function getAvgOfArray(array) {

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

  }
  const averageArray = sum / array.length;
  return averageArray;
}

console.log("Exercise 2:");
console.log(getAvgOfArray(integersEx2));
console.log('----------------------------');
// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World !"

let stringE3 = ["Hello", "World", "!"];
// const spacialCharacter = ['.', ',', ':', ';', '!'];
function concatStrings(array) {
  return array.join(' ')
}


console.log("Exercise 3:");
console.log(concatStrings(stringE3));
console.log('----------------------------');
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 3, 7]
let arrayEx = [1, 2, 3, 4, 7, 10];

function getOddNumbers(array) {
  let oddNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNumbers.push(array[i]);
    }
  }
  return oddNumbers;
}
console.log("Ex4");
console.log(getOddNumbers(arrayEx));
console.log('----------------------------');
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]
const testArrayEx5 = [1, 2, 3, 4, 7, 10];

function getEvenNumbers(array) {
  let evenNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers.push(array[i]);
    }
  }
  return evenNumbers;
}

console.log('Exercise 5: ');
console.log(getEvenNumbers(testArrayEx5));
console.log('----------------------------');
// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]
const testArrayEx6 = [1, 2, 3, 4, 2];

function removeValueFromArray(value, array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (value !== array[i]) {
      result.push(array[i]);
    }
    // result = [...result, array[i]]

  }
  return result;
}

console.log("exercise 6:");
console.log(removeValueFromArray(2, testArrayEx6));
console.log('----------------------------');
// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]
const testObjEx7 = { name: "John", age: 30, city: "New York" };
function getObjectKeys(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}

console.log("exercise 7:");
console.log(getObjectKeys(testObjEx7));
console.log('----------------------------');
// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]
const testObjEx8 = { name: "John", age: 30, city: "New York" };
function getObjectvalues(obj) {
  let values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
}
console.log("exercise 8:");
console.log(getObjectvalues(testObjEx8));
console.log('----------------------------');
// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false
const testObjEx9 = { name: "John", age: 30, city: "New York" };

function keyExists(obj, key) {
  return key in obj;
}

console.log("Ex 9:");
console.log(keyExists(testObjEx9, "name"));
console.log(keyExists(testObjEx9, "sity"));
console.log('----------------------------');
// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}
const testObjEx10 = { name: "John", age: 30 };

function addKeyValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log("Ex 10:");
console.log(addKeyValue(testObjEx10, "city", "İstanbul"));
console.log('----------------------------');
// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}
const testObjEx11 = { name: "John", age: 30, city: "New York" };

function removeKeyValue(obj, key) {
  delete obj[key];
  return obj;
}
console.log("Ex 11:");
console.log(removeKeyValue(testObjEx11, "city"));
console.log('----------------------------');
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}
const array1Ex12 = ["name", "age", "city"];
const array2Ex12 = ["John", 30, "New York"];
function addKeysToObject(keys, values) {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
}
console.log("Ex 12:");
console.log(addKeysToObject(array1Ex12, array2Ex12));
console.log('----------------------------');