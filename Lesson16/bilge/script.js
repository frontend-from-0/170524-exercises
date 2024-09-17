/*  
Functions

Functions are one of the fundamental building blocks of the language. They are reusable blocks of code that can be executed when needed. Functions encapsulate a set of statements and can be called or invoked to perform a specific task or calculation. 

Anonymos Function Declaration 
function (parameter1, parameter2) {
  return parameter1 * parameter2;
};

Named function:
function multiplyTwoNumbers (parameter1, parameter2) {
  return parameter1 * parameter2;
}
multiplyTwoNumbers(10, 40);
multiplyTwoNumbers(1, 40);

Function Expression
const sumOfTwoNumbers = function (parameter1, parameter2) {
  return parameter1 + parameter2;
};

sumOfTwoNumbers(10, 15);

Arrow Function (introduced in ECMAScript 6 OR ES6)
Anonymus arrow function
() => {
  console.log('Hello world');
};

Single line arrow function experession
const greet = (name) =>  'Hello '+ name;
greet('John');

Multi line arrow function experession
const greet = () => {
  return 'Hello world';
};

greet();
*/
// IIFE (Immediately Invoked Function Expression)
(function multiplyTwoNumbers(parameter1, parameter2) {
  console.log("Hello");
  return parameter1 * parameter2;
})();

// Global scope
const NAME_ANOTHER_WORD = "John";

function greet(surname) {
  return `52. Name in the function scope: ${NAME_ANOTHER_WORD} ${surname}`;
}
console.log(greet("Doe"));

console.log("56. Name in the global scope", NAME_ANOTHER_WORD);

// console.log(multiplyTwoNumbers(1, 4));

/* 
Conditional statements (if...else, switch)

Conditional statements in JavaScript are used to make decisions and execute different blocks of code based on certain conditions. They allow you to control the flow of your program and determine which code should be executed depending on whether a condition evaluates to true or false.

if Statement

if (condition) {

}
// Same line if condition:
if (today === 'Wednessday') console.log('Join the lesson');

if ... else Statement
if (condition) {
 ... some code
} else if (another condtion) {
 ... some code
} else {
 ... some code
}

Switch statement
switch (day) {
  case 'Monday':  // this means that day === 'Monday'
   console.log('It\'s Monday'); 
   break;
  case 'Tuesday':
    console.log('It\'s Tuesday');
    break; // Use break key word if you don't use return key word in the statement;
    .... cases for other days of the week
  default:
    console.log('Unknow day');
    break;
}
*/

const today = "Tuesday";

if (today === "Tuesday") {
  console.log("Today is Tuesday!");
} else if (today === "Tuesday") {
  console.log("Today is Tuesday ??");
} else {
  console.log("Today is not Tuesday and not Sunday!");
}

// 1. Write a function that takes in a number and checks if it's even or odd using if else statement.

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(isEvenOrOdd(-27));
console.log(isEvenOrOdd(52));

// 2. Write a function that takes age as input. If the age is less than 18, print
// "Sorry, you are not old enough to vote". If the age is between 18 and 65 (inclusive),
// print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen".
function checkVotingEligebility(age) {
  if (age < 18) {
    return "Sorry, you are not old enough to vote";
  } else if (age >= 18 && age <= 65) {
    // age >=18 AND age <=65 (Alternative to logical and is logical OR ||)
    return "You are eligible to vote";
  } else {
    return "You are a senior citizen";
  }
}
console.log(checkVotingEligebility(65));
console.log(checkVotingEligebility(18));
console.log(checkVotingEligebility(17));
console.log(checkVotingEligebility(67));
// 3. Write a function that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.

function compareNumbers(number1, number2) {
  // You can skipp {} in if else statements if you only have *one line code* to execute in each case
  if (number1 === number2) return "Numbers are equal.";
  else if (number1 < number2) return "Number1 is less than Number2.";
  else return "Number1 is greater than Number2.";
}

console.log(compareNumbers(1, 50));

// 4. Write a function that takes in a string and checks if the first letter is uppercase using if else statement.
function isFirstLetterUpperCase(string) {
  const firstLetter = string.charAt(0); // string[0]
  if (string.length <= 0 || typeof string === "String")
    return "Invalid input value";

  if (firstLetter === firstLetter.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(isFirstLetterUpperCase(""));
console.log(isFirstLetterUpperCase("Write a function that"));

// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement.

function checkPositiveOrNegative(conditionalNumber) {
  if (conditionalNumber < 0) {
    return "The number is negative.";
  } else if (conditionalNumber === 0) {
    return "The number is zero.";
  } else {
    return "The number is positive.";
  }
}

console.log('Ex. 5:');

console.log(checkPositiveOrNegative(-5));
console.log(checkPositiveOrNegative(20));
console.log(checkPositiveOrNegative(0));

// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.

function isItLeapYear(year) {
  if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
    return "It's a leap year.";
  } else {
    return "It's not a leap year.";
  }
}

console.log('Ex. 6:');

console.log(isItLeapYear(2024));
console.log(isItLeapYear(1979));

// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.

function isItAboveOrBelowFreezing (temp) {
  if (temp < 0) {
    return 'It\'s below freezing.'
  }
  else if (temp === 0) {
    return 'It\'s the freezing point.'
  }
  else {
    return 'It\'s above freezing.'
  }
}

console.log('Ex. 7:');

console.log(isItAboveOrBelowFreezing(-1));
console.log(isItAboveOrBelowFreezing(25));
console.log(isItAboveOrBelowFreezing(0));

// 8. Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function findBodyMassIndex (weight, height) {
  let bmi = weight / (height ** 2); 

  if (bmi < 18.5) {
    return 'The person is underweight.'
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'The person is normal.'
  }
  else if (bmi >=25 && bmi <= 29.9) {
    return 'The person is overweight.'
  }
  else {
    return 'The person is obese.'
  }
}

console.log('Ex. 8:');

console.log(findBodyMassIndex(40, 1.70));
console.log(findBodyMassIndex(60, 1.70));
console.log(findBodyMassIndex(80, 1.70));
console.log(findBodyMassIndex(200, 1.70));

// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

function checkAge(ageOfThePerson) {
  if (ageOfThePerson >= 0 && ageOfThePerson <= 12) {
    return 'You are a child.'
  }
  else if (ageOfThePerson >= 13 && ageOfThePerson <= 19) {
    return 'You are a teenager.'
  }
  else if (ageOfThePerson >= 20 && ageOfThePerson <= 64) {
    return 'You are an adult.'
  }
  else {
    return 'You are a senior citizen.'
  }
}

console.log('Ex. 9:');

console.log(checkAge(12));
console.log(checkAge(19));
console.log(checkAge(64));
console.log(checkAge(65));


// 10. Write a function that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

const student = true;

function checkIfStudentAndVoteEligibility (age, student) {
  if (age < 18 && student === true) {
    return 'You are a student and not old enough to vote.'
  }
  else if (age >= 18 && student === true) {
    return 'You are old enough to vote.'
  }
  else if (age >= 18 && age <=65 && student === false) {
    return 'You are eligible to vote.'
  }
  else {
    return 'You are a senior citizen.'
  }
}

console.log('Ex. 10:');

console.log(checkIfStudentAndVoteEligibility(17, true));
console.log(checkIfStudentAndVoteEligibility(18, true));
console.log(checkIfStudentAndVoteEligibility(22, false));
console.log(checkIfStudentAndVoteEligibility(70, false));

// 11. Write a function that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

function decideTheSalaryOnExperience (salary, yearsOfExperience) {
  if (salary < 30.000 && yearsOfExperience <5) {
    return 'Sorry, we cannot offer you the job at this time.'
  }
  else if (salary < 50.000 && 5 <= yearsOfExperience <= 10) {
    return 'We can offer you the job at a lower salary.'
  }
  else {
    return 'We can offer you the job at the requested salary.'
  }
}

console.log('Ex. 11:');

console.log(decideTheSalaryOnExperience(25.000, 4));
console.log(decideTheSalaryOnExperience(45.000, 10));
console.log(decideTheSalaryOnExperience(50.000, 13));

// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

function decideTheLetterGrade (score) {
  if (score < 60) {
    return 'You failed the test.'
  }
  else if (score >= 60 && score <= 70) {
    return 'You passed the test, but your grade is not great.'
  }
  else if (score >= 71 && score <= 80) {
    return 'You got a B.'
  }
  else if (score >= 81 && score <= 90) {
    return 'You got a A.'
  }
  else {
    return 'You got an A+ - Great job!'
  }
}

console.log('Ex. 12:');

console.log(decideTheLetterGrade(59));
console.log(decideTheLetterGrade(60));
console.log(decideTheLetterGrade(80));
console.log(decideTheLetterGrade(90));
console.log(decideTheLetterGrade(91));

// 13. Write a function that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases.

const month = new Date().getMonth();   
const seasonName = findSeason(month);

function findSeason(month) {
  switch (month) {
      case 12:
      case 1:
      case 2:
          return "Winter";
      case 3:
      case 4:
      case 5:
          return "Spring";
      case 6:
      case 7:
      case 8:
          return "Summer";
      case 9:
      case 10:
      case 11:
          return "Autumn";
      default:
          return "Invalid month";
  }
}

console.log('Ex. 13:');

console.log(findSeason(1));
console.log(findSeason(4));
console.log(findSeason(13));

// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.

function checkIfTheGradeIsPassing(grade) {
  switch (grade) {
    case 'A':
    case 'B':
    case 'C':
      return "The grade is passing.";
    case 'D':
    case 'F':
      return "The grade is failing.";
    default:
      return "Invalid grade";
  }
}

console.log('Ex. 14:');

console.log(checkIfTheGradeIsPassing('A'));
console.log(checkIfTheGradeIsPassing('F'));

// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.

function findAgeInDogYears (dogYears) {
  const humanYears = 7 * dogYears;
  if (humanYears > 0) {
    return `Your age is ${dogYears} in dog years.`
  }
  else 
    return 'Invalid input'
}

console.log('Ex. 15:');

console.log(findAgeInDogYears(-10));
console.log(findAgeInDogYears(0));
console.log(findAgeInDogYears(20));