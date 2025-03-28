// 2. Object Destructuring
// Given the following object, use object destructuring to assign the values of name and age to their respective variables:
const personE14 = {
  name: "John Doe",
  age: 25,
};

const {name: personE14Name, age} = personE14;
console.log(personE14Name , age);

// 8. Safe Access to Nested Object Properties
// Update the code to safely access userName and userCity using optional chaining to handle cases where properties might be missing.
const userEx8 = {
  profile: {
    // optional
    name: "Alice",
    address: {
      city: "Wonderland",
    },
  },
};

const ex8UserName = userEx8?.profile?.name;
const ex8UserCity = userEx8?.profile?.address?.city;

console.log(ex8UserName, ex8UserCity);

// 9. Handle Missing Properties
// Update the code to use optional chaining to safely access userCountry and provide a default value of 'Unknown' if the property is missing.

const userEx9 = {
  profile: {
    name: "Alice",
  },
};

const ex9UserCity = userEx9?.profile?.address?.country ?? "Unknown";
console.log(ex9UserCity);

// 10. Optional Chaining with Function Calls
// Update the code to safely call the getName function using optional chaining, considering that profile or getName might be missing.

const userEx10 = {
  profile: {
    getName: () => "Alice",
  },
};

const ex10GetName = userEx10?.profile?.getName?.();
console.log(ex10GetName);

// 11. Rewrite the code using the nullish coalescing operator (??) to assign a default value to storedData only if userInput is null or undefined.
let userInput;
// let storedData = userInput ? userInput : "Default Value";
let storedData = userInput ?? "default value";

console.log(storedData); // Default Value

// 12. Rewrite the code using the nullish coalescing operator to display number of users even if it is 0.
let userCount = 0;
let displayCount = userCount || "No users";

console.log(displayCount); // No users

// 13. Rewrite the code using the nullish coalescing operator to assign a default value of 3000 to timeout if config.timeout is null or undefined.

const config = {
  timeout: null,
};

 config.timeout ?? 3000;

console.log(timeout); // 3000

// 14. NESTED ARRAY DESTRUCTURING
// Given the following nested array, use nested array destructuring
// to assign the first, second, and third nested arrays to variables a, b, and c:
const nestedNumbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const [a,b,c] =nestedNumbers;
console.log(a,b,c);

// 15. SPREAD OPERATOR WITH ARRAYS
// Merge the two arrays 'arr1' and 'arr2' into a new array 'merged'
// using the spread operator:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];
console.log(merged);


// 16. SPREAD OPERATOR WITH OBJECTS
// Merge these two objects 'defaults' and 'overrides' into a new object 'config'
// such that 'overrides' properties take precedence if they exist:
const defaults = {
  mode: "production",
  debug: false,
  version: "1.0.0",
};

const overrides = {
  debug: true,
  version: "1.1.0",
};

const ex16Config = {
  ...defaults, ...overrides
}

console.log(ex16Config);

// 17. SHORT-CIRCUIT EVALUATION
// Use logical AND (&&) and OR (||) to conditionally assign values to
// 'statusMessage' and 'fallbackName' based on the variables below:

const isLoggedIn = true;
const userName = "Alice";
const providedName = "";

const statusMessage = isLoggedIn &&  `${userName} is logged in.`;

console.log(statusMessage);

const fallbackName = providedName || userName;

console.log(fallbackName);

// Using && to show a message only if 'isLoggedIn' is true
// Declare a variable 'statusMessage' and assign a message based on the condition
// console.log(statusMessage); // "Welcome back, Alice!"

// Using || to provide a fallback name if 'providedName' is falsy
// const userDisplayName =
// console.log(userDisplayName); // "Guest"

// 18. OPTIONAL CHAINING WITH ARRAYS
// We have a nested data structure 'library' which may or may not have certain properties.
// Use optional chaining to safely access the title of the first book in 'fantasyBooks'.

const library = {
  sections: {
    fantasy: {
      books: [{ title: "The Hobbit" }, { title: "Harry Potter" }],
    },
    scienceFiction: {
      books: [{ title: "Dune" }],
    },
  },
};

const fantasyBookTitle = library?.sections?.fantasy?.books?.[0]?.title;

console.log(fantasyBookTitle);


// Safely access 'title' of the first fantasy book:
// const fantasyTitle 
// console.log(fantasyTitle); // "The Hobbit"

// 20. NULLISH COALESCING VS. OR
// We have a variable that may be "" (empty string). If we use the OR operator,
// an empty string is falsy and will fall back. Use ?? to handle only null/undefined.

let userTitle = ""; // Intentionally an empty string

let displayTitleCoalescing = userTitle ?? "Untitled";

console.log(displayTitleCoalescing);



// Using || would produce a default:
// let displayTitleOr 
// console.log(displayTitleOr); // "Untitled" (not what we want if we want to allow "")

// Using ?? will treat "" as a valid value:
// let displayTitleCoalescing
// console.log(displayTitleCoalescing); // "" (accepts empty string as valid)
