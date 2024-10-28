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
function positiveNegative(num) {
	if (num > 0) {
		return 'Number is positive';
	} else if (num < 0) {
		return 'Number is positive';
	} else {
		return 'Number is zero';
	}
}

console.log(positiveNegative(8));
console.log(positiveNegative(0));

// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement. (H)


// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement. (H)
function isWeatherContition(tempreture) {
	if (tempreture > 0 ) {
		return 'The weather is nice';
	} else if (tempreture < 0 ) {
		return 'The weather is bad';

	}
}

console.log(isWeatherContition(15));

// 8.(H) Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function heightAndWeight (height, weight) {
	const bmi = weight / (height * height);
	if (bmi > 30) {
		return 'Above	Obesity';
	} else if (bmi >= 25.0 && bmi < 30.0) {
		return 'Overweight';
	} else if (bmi >= 18.5 && bmi < 25.0) {
		return 'Healthy Weight';
	} else {
		return 'Underweight';
	}
}

console.log(heightAndWeight(1.74, 72));
// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement. (H)

function personAge(age) {
	if (age >= 0 && age <= 12) {
		return "child";
	} else if (age >= 13 && age <= 19) {
		return "teenager";
	} else if (age >= 20 && age <= 64) {
		return "adult";
	} else {
		return 'senior citizen';
	}
}
console.log(personAge(64));

// 10. Write a function that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote". (H)

function votingAge(age, student) {
	if (age < 18 && student) {
		return 'You are a student and not old enough to vote';
	} else if ((age >= 18 && age <= 65) && !student ) {
		return 'You are eligible to vote';
	} else if (age >= 18 && student) {
		return 'You are old enough to vote';
	} else {
		return 'You are a senior citizen';
	}
}
console.log(checkVotingAge(22, yes));

// 11. Write a function that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary". (H)

// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!". (H)

function testScore(score) {
	if (score < 60) {
		return 'You failed the test';
	} else if (score >= 60 && score <= 70) {
		return 'You passed the test, but your grade is not great';
	} else if (score >= 71 && score <= 80) {
		return 'You got a B';
	} else if (score >= 81 && score <= 90) {
		return 'You got a A';
	} else {
		return 'You got an A+ - Great job!';
	}
}
console.log(testScore(69));

// 13. Write a function that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases. (H)

function getSeasonNames(monthNumber) {
	switch (monthNumber) {
		case 1:
		case 2:
		case 12:
			console.log('Winter');
			break;
		case 3:
		case 4:
		case 5:
			console.log('Spring');
			break;
		case 6:
		case 7:
		case 8:
			console.log('Summer');
			break;
		case 9:
		case 10:
		case 11:
			console.log('Fall');
	}
}
console.log(getSeasonNames(7));

// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases. (H)

// I'm having a hard time here, to be honest. :)

// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message. (H)
