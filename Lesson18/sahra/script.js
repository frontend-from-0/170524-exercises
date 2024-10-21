// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10
const integersEx1 = [1, 2, 3, 4];
const integersEx1V2 = [10, 2, 30, 4];
function sum(myArr){
  let sum = 0;
  for(let i = 0; i < myArr.length; i++){
    sum += myArr[i];
  }
  return sum;
}
const result = sum(integersEx1V2);
console.log(result);

console.log('----------------------------');
// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5
function numbers(myArr){
  let sum = 0;
  for(let i=0; i < myArr.length; i++){
    sum += myArr[i];
  }
  sum /= myArr.length;
  return sum;
}
const example2 = [4,8,12,20];
const resultEx2 = numbers(example2);
console.log(resultEx2);

console.log('----------------------------');
// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World !"

let stringE3 = ["Hello", "World", "!"];
function sentence(myArr){
  return myArr.join(" ");
}
const resultEx3 = sentence(stringE3);
console.log(resultEx3);

console.log('----------------------------');
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 3, 7]
let arrayEx = [1, 2, 3, 4, 7, 10];
function odd(myArr){  
  let numbers = []
  for(let i=0; i < myArr.length; i++){
  if(myArr[i] % 2 !== 0){
    numbers.push(myArr[i]);
  }
  }
  return numbers;
}
const resultEx4 = odd(arrayEx);
console.log(resultEx4);


console.log('----------------------------');
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10] // 1 is not even
const testArrayEx5 = [1, 2, 3, 4, 7, 10];
function even(myArr){  
  let numbers = []
  for(let i=0; i < myArr.length; i++){
  if(myArr[i] % 2 === 0){
    numbers.push(myArr[i]);
  }
  }
  return numbers;
}
const resultEx5 = even(testArrayEx5);
console.log(resultEx5);

console.log('----------------------------');
// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]
const testArrayEx6 = [1, 2, 3, 4, 2];
function value(myArr){  
  let arrayEx6 = []
  for(let i=0; i < myArr.length; i++){
    let valueToRemove = 2;
  if(myArr[i] !== valueToRemove){
    arrayEx6.push(myArr[i]);
  }
  }
  return arrayEx6;
}
const resultEx6 = value(testArrayEx6);
console.log(resultEx6);

console.log('----------------------------');
// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]
const testObjEx7 = { name: "John", age: 30, city: "New York" };
function getObjectKeys(obj) {
  return Object.keys(obj);
}
const resultEx7 = getObjectKeys(testObjEx7);
console.log(resultEx7);

console.log('----------------------------');
// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]
const testObjEx8 = { name: "John", age: 30, city: "New York" };
function getObjectValues(obj) {
  return Object.values(obj);
}
const resultEx8 = getObjectValues(testObjEx8);
console.log(resultEx8);

console.log('----------------------------');
// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false
const testObjEx9 = { name: "John", age: 30, city: "New York" };
function keys(obj, key) {
  return obj.hasOwnProperty(key); 
}
const resultEx9 = keys(testObjEx9, "age");
console.log(resultEx9);

console.log('----------------------------');
// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}
const testObjEx10 = { name: "John", age: 30 };
function add(obj, key, value) {
  obj[key]= value;
  return obj;
}
const resultEx10 = add(testObjEx10, "city","New York");
console.log(resultEx10);

console.log('----------------------------');
// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}
const testObjEx11 = { name: "John", age: 30, city: "New York" };
function remove(obj,key){
  delete obj[key];
  return obj;
}
const resultEx11 = remove(testObjEx11, "age");
console.log(resultEx11);


console.log('----------------------------');
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}
const array1Ex12 = ["name", "age", "city"];
const array2Ex12 = ["John", 30, "New York"];
function newObject(key,value){
  const obj = {};
  for (let i = 0; i < key.length; i++) {
    obj[key[i]] = value[i]; 
  } return obj;
}
const resultEx12 = newObject(array1Ex12,array2Ex12);
console.log(resultEx12);