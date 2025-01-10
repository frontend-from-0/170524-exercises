1. Write a function that takes an array of integers and returns the sum of all elements.
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

console.log("Exercise 1: ");

console.log(getSumOfArray(integersEx1));
console.log(getSumOfArray([...integersEx1, ...integersEx1V2]));


// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5

function findAvgOfAllElements(array) {
  let sum1 = 0;

  for (let i = 0; i < array.length; i++) {
    sum1 += array[i];    // This part comes from the previous example
  }

  const avg = sum1 / array.length; // changed 'let' to 'const' as suggested //
  return avg;
}

console.log("Exercise 2: ");

console.log(findAvgOfAllElements([1, 2, 3, 4]));


// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World !"

console.log("Exercise 3:");

let stringE3 = ["Hello", "World", "!"];

console.log(stringE3.join(' ').replace(/ !/, '!'));   //I took the solution one step ahead by using "replace" method to eliminate the space before the exclamation mark as you suggested in the lesson// 


// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 3, 7]
let arrayEx = [1, 2, 3, 4, 7, 10];

function findNewArrayWithOddNumbers (array) {  
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArr.push(array[i]);  //Used push() method to add each odd number in the new array
    }    
  } 
  return newArr;
}

console.log("Exercise 4: ");

console.log(findNewArrayWithOddNumbers(arrayEx));


// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]
const testArrayEx5 = [1, 2, 3, 4, 7, 10];

function findNewArrayWithEvenNumbers (array) {  
  let newArr2 = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArr2.push(array[i]);  
    }    
  } 
  return newArr2;
}

console.log('Exercise 5: ');

console.log(findNewArrayWithEvenNumbers(testArrayEx5));


// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]
const testArrayEx6 = [1, 2, 3, 4, 2];

function getNewArray(array, removedValue) {
  let resultArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== removedValue) {
      resultArr.push(array[i]);
    }
  }
  return resultArr;
}

console.log("Exercise 6: ");

console.log(getNewArray(testArrayEx6, 2));

// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]
const testObjEx7 = { name: "John", age: 30, city: "New York" };

function getObjectKeys (object) {
  let objectKeys = [];
  for (let key in object) {
    objectKeys.push(key);
  }
  return objectKeys;
}

console.log("Exercise 7: ");

console.log(getObjectKeys(testObjEx7));

// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]
const testObjEx8 = { name: "John", age: 30, city: "New York" };

function findValuesOfObject (object) {
  let returnValue = [];
  for (let keys in object) {
    returnValue.push(object[keys]);
  }
  return returnValue;
}

console.log("Exercise 8: ");

console.log(findValuesOfObject(testObjEx8));

// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false
const testObjEx9 = { name: "John", age: 30, city: "New York" };

console.log("Exercise 9: ");

console.log(testObjEx9.hasOwnProperty("age")); // deleted the findIfKeyExist function //

console.log(testObjEx9.hasOwnProperty("surname"));

// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}
const testObjEx10 = { name: "John", age: 30 };

function addKeyValuePair (obj, key, value) {
  if (!obj.hasOwnProperty(key)) {
    obj[key] = value;
  } 
  return obj;
}

console.log("Exercise 10: ");

console.log(addKeyValuePair(testObjEx10, "city", "New York"));

// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}
const testObjEx11 = { name: "John", age: 30, city: "New York" };

function removeKeyValuePair (obj, key) {
  if (obj.hasOwnProperty(key)) {   //checks if the key exists in the object and the proceeds to remove that key from the object
    delete obj[key];
  } 
  return obj;
}

console.log("Exercise 11: ");

console.log(removeKeyValuePair(testObjEx11, "city"));

// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}
const array1Ex12 = ["name", "age", "city"];
const array2Ex12 = ["John", 30, "New York"];

function takeValuesFromTwoArrays (array1, array2) {
  let newCrossedObj = {};   //created an object; since the output should be an object

  for (let i = 0; i < array1.length; i++) {
    newCrossedObj[array1[i]] = array2[i];
  }
  return newCrossedObj;
}

console.log(takeValuesFromTwoArrays(array1Ex12, array2Ex12));