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
  if (string.length <= 0 || typeof string === 'String') 
		return 'Invalid input value';

	if (firstLetter === firstLetter.toUpperCase()) {
		return true;
	} else {
		return false;
	}
}
console.log(isFirstLetterUpperCase(''));
console.log(isFirstLetterUpperCase('Write a function that'));

// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement.

function checkPositiveOrNegative(number) {
	if (number < 0) {
		return "The number is negative.";
	} else if (number === 0) {
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

function isLeapYear(year) {
	if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
    return "It's a leap year.";
  } else {
    return "It's not a leap year.";
  }
}

console.log('Ex. 6:');

console.log(isLeapYear(2024));
console.log(isLeapYear(1979));

// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.

function isAboveOrBelowFreezing (temp) {
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

console.log(isAboveOrBelowFreezing(-1));
console.log(isAboveOrBelowFreezing(25));
console.log(isAboveOrBelowFreezing(0));

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

function checkAge(age) {
	if (age >= 0 && age <= 12) {
		return 'You are a child.'
  }
	else if (age >= 13 && age <= 19) {
		return 'You are a teenager.'
  }
	else if (age >= 20 && age <= 64) {
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

function checkVoteEligibility (age, student) {
	if (age < 18 && student) {
		return 'You are a student and not old enough to vote.'
  }
	else if (age >= 18 && student) {
		return 'You are old enough to vote.'
  }
	else if (age >= 18 && age <=65 && !student) {
		return 'You are eligible to vote.'
  }
  else {
    return 'You are a senior citizen.'
  }
}

console.log('Ex. 10:');

console.log(checkVoteEligibility(17, true));
console.log(checkVoteEligibility(18, true));
console.log(checkVoteEligibility(22, false));
console.log(checkVoteEligibility(70, false));

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

function checkGrade (score) {
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

console.log(checkGrade(59));
console.log(checkGrade(60));
console.log(checkGrade(80));
console.log(checkGrade(90));
console.log(checkGrade(91));

// 13. Write a function that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases.

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