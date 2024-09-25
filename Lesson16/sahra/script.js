// 1. Write a function that takes in a number and checks if it's even or odd using if else statement.

function isEvenOrOdd(number) {
	if (number % 2 === 0) {
		return 'Even';
	} else {
		return 'Odd';
	}
}
console.log(isEvenOrOdd(-27));
console.log(isEvenOrOdd(52));

// 2. Write a function that takes age as input. If the age is less than 18, print
// "Sorry, you are not old enough to vote". If the age is between 18 and 65 (inclusive),
// print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen".
function checkVotingEligebility(age) {
	if (age < 18) {
		return 'Sorry, you are not old enough to vote';
	} else if (age >= 18 && age <= 65) {
		// age >=18 AND age <=65 (Alternative to logical and is logical OR ||)
		return 'You are eligible to vote';
	} else {
		return 'You are a senior citizen';
	}
}
console.log(checkVotingEligebility(65));
console.log(checkVotingEligebility(18));
console.log(checkVotingEligebility(17));
console.log(checkVotingEligebility(67));
// 3. Write a function that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.

function compareNumbers(number1, number2) {
	// You can skipp {} in if else statements if you only have *one line code* to execute in each case
	if (number1 === number2) return 'Numbers are equal.';
	else if (number1 < number2) return 'Number1 is less than Number2.';
	else return 'Number1 is greater than Number2.';
}

console.log(compareNumbers(1, 50));

// 4. Write a function that takes in a string and checks if the first letter is uppercase using if else statement.
function isFirstLetterUpperCase(string) {
	const firstLetter = string.charAt(0); // string[0]
  if (string.length <= 0 || typeof string === 'String') return 'Invalid input value';

	if (firstLetter === firstLetter.toUpperCase()) {
		return true;
	} else {
		return false;
	}
}
console.log(isFirstLetterUpperCase(''));
console.log(isFirstLetterUpperCase('Write a function that'));

// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement. (H)
function number(x) {
  if(x > 0) {
    return 'positive';
  } else if (x === 0) {
    return 'zero';
  } else if(x < 0){
    return 'negative';
  }
}
console.log(number(3));
console.log(number(-3));
console.log(number(0));

// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement. (H)
function year(number) {
  if(number % 4 === 0) {
      if (number % 100 !== 0) {
      return 'leap year';
    } else {
      return 'not a leap year';
    }
} else if(number % 400 === 0){
  return 'leap year';
} else if(number % 400 !== 0){
  return 'not a leap year';
}}
console.log(year(2345));
console.log(year(2004));
console.log(year(4400));


// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement. (H)
function temperature(number2){
  if(number2 > 0){
    return 'above freezing';
  } else if(number2 < 0){
    return 'below freezing';
  }
}
console.log(temperature(-22));
console.log(temperature(35));

// 8.(H) Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity
function bodyMassIndex(weight,height){
 
 
  if (weight / (height * height )<= 18.5){
    return 'Underweight';
  } else if (weight / (height * height) > 18.5 && weight / (height * height) <=24.9 ){
    return 'Healty Weight';
  } else if (weight / (height * height) >= 25.0 && weight / (height * height) <=29.9 ){
    return 'Overweight';
  } else if (weight / (height * height) >=30.0 ){
    return 'Above Obesity';
  } 
}

console.log(bodyMassIndex(50,1.80));
console.log(bodyMassIndex(80,1.80));
console.log(bodyMassIndex(90,1.80));
console.log(bodyMassIndex(100,1.80));

// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement. (H)
function age(number3){
  if(number3 >= 0 && number3 <=12){
    return 'child';
  } else if (number3 >= 13 && number3 <=19){
    return 'teenager';
  } else if (number3 >= 20 && number3 <=64){
    return 'adult';
  } else if (number3 >= 65){
    return 'senior citizen';
  } 
}
console.log(age(5));
console.log(age(17));
console.log(age(49));
console.log(age(80));

// 10. Write a function that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote". (H)
function person(age,student){
  if( student === 'yes'){
      if(age < 18){
        return 'You are a student and not old enough to vote';
      } else if (age >= 18){
        return 'You are old enough to vote';
      }
  } else if(student === 'no'){
      if(age > 18 && age <= 65){
        return 'You are eligible to vote';
      } else if(age > 65){
        return 'You are a senior citizen';
      }
  }
}
console.log(person(17,'yes'));
console.log(person(24,'no'));
console.log(person(70,'no'));
console.log(person(30,'yes'));

// 11. Write a function that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary". (H)
function job(salary,experience){
  if( salary < 30.000 && experience < 5){
        return 'Sorry, we cannot offer you the job at this time';
  } else if ((salary >= 30.000 && salary < 50.000) && (experience >= 5 && experience <=10)){
        return 'We can offer you the job at a lower salary';
 } else if (salary >= 50.000 || experience >=10){
        return 'We can offer you the job at the requested salary';
  }
}
console.log(job(25.000,3));
console.log(job(35.000,7));
console.log(job(70.000,3));
console.log(job(25.000,15));

// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!". (H)
function user(score){
  if(score < 60){
    return 'You failed the test';
  } else if ( score >= 60 && score <=70){
    return 'You passed the test, but your grade is not great';
  } else if (score > 70 && score <=80){
    return 'You got a B';
  } else if (score > 80 && score <=90){
    return 'You got an A';
  } else if (score > 90){
    return 'You got an A+ - Great job!';
  }
}
console.log(user(55));
console.log(user(63));
console.log(user(71));
console.log(user(87));
console.log(user(91));

// 13. Write a function that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases. (H)
function user(monthNumber){
  let result = '';
  switch(monthNumber) {
    case 12:
    case 1:
    case 2:
      result = 'Winter';
      break;
    case 3:
    case 4:
    case 5:
      result = 'Spring';
      break;
    case 6:
    case 7:
    case 8:
      result = 'Summer';
      break;
    case 9:
    case 10:
    case 11:
      result = 'Fall';
  }
  return result;
} 
console.log(user(5));
console.log(user(12));
console.log(user(7));
console.log(user(9));


// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases. (H)
function grade(letter){
  let result = '';
  switch(letter){
    case 'A':
    case 'B':
    case 'C':
      result = 'Passed';
      break;
    case 'D':
    case 'F':
      result = 'Failed'; 
  }
  return result;
}
console.log(grade('A'));
console.log(grade('B'));
console.log(grade('D'));
console.log(grade('F'));

// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message. (H)
function user(humanAge){
  if(humanAge > 0){
    return (humanAge * 7);
  } else if (humanAge <= 0){
    return 'ERROR';
  }
  }
  console.log(user(25));
  console.log(user(0));
  console.log(user(-3));