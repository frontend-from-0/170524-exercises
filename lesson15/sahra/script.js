/*
In JavaScript, a string is a sequence of characters used to represent text. Strings are one of the primitive data types in JavaScript and are immutable, meaning once a string is created, it cannot be changed. However, you can create new strings based on operations performed on existing ones. JavaScript provides a variety of methods to manipulate strings, making it easier to work with text.
*/

// 1. Find the Length of a String
// Check if a password meets a minimum length requirement.
const password = 'securePassword123';
console.log(
	`This is a password: ${password}. It's length is: ${password.length}`,
);
console.log(password, password.length);

// 2. Convert to Uppercase
// Convert user input to uppercase for standardization.
const userInput = 'hello world';
console.log(userInput.toUpperCase());
console.log(userInput);

const sentenseCapitalized = userInput
	.split(' ')
	.map((word) => word[0].toUpperCase() + word.slice(1))
	.join(' ');
console.log(sentenseCapitalized);

// 3. Convert to Lowercase (H)
// Normalize email addresses for comparison. Expected result: "user@example.com"
const email2 = 'USER@EXAMPLE.COM';
console.log(email2.toLowerCase());
console.log(email2);

// 4. Extract a Substring
// Use the `slice` method to extract 'Debugging code' from the string below.
const sentenceToSlice =
	'Debugging code can be a frustrating but necessary task.';
const ext = sentenceToSlice.slice(0, 14

);

const startIndex = sentenceToSlice.indexOf('Debugging code');
const lastIndex = startIndex + 'Debugging code'.length;
const result = sentenceToSlice.slice(startIndex, lastIndex);
console.log(result);

// Take 3 characters starting at the 5th carachter from the end of a string
const anotherString = 'A B C D E';
console.log(anotherString.slice(-5, -3));
console.log(anotherString.substring(-5, -3)); // Does not give us the same result as Slice

// 5. Trim Whitespace
// Clean up user input by removing unnecessary spaces.
const messyInput = '   messy input  ';
const withoutSpaces = messyInput.trim();
console.log(withoutSpaces);

// 6. Check if String Contains Substring
// Verify if a URL contains "https".
const url = 'HTTPS://example.com';
const protocol = 'https';
console.log(url.toLowerCase().includes(protocol));

// 7. Find Character at Index
// Find the initials of the name.
const firstName = 'D John Doe D ';
console.log(firstName.indexOf('D', 12), firstName.indexOf('J'));

if (firstName.indexOf('Jane') === -1) {
	console.log("Name isn't Jane");
}

// 8. Find Index of Substring (H)
// Find the position of a word 'JavaScript' in a sentence.
const sentenceWithAWordToFind =
	"The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.";
  const searchTerm = 'Javascript';
  const indexOfFirst = sentenceWithAWordToFind.indexOf(searchTerm);
  console.log(indexOfFirst);

// 9. Extract a Substring
// Extract the domain from an email address.
const email = 'user-name@google.com';
const startIndexOfDomain = email.indexOf('@') + 1;
const domain = email.substring(startIndexOfDomain);

console.log(domain);
// 10. Replace Substring
// Censor (replace 'bad' with 'good') a word in a sentence.
const sentence = 'This is a bad example bad.';
console.log(sentence.replace('bad', 'good'));

// 11. Repeat a String (H)
// Create a visual separator for console output. Expected result: "--------------------"

console.log("--------------------");

// 12. Check if String Starts With (H)
// Check if a file name starts with a specific prefix. Return true or false.
const fileName = 'report_2024.pdf';
const searchPrefix = 'report';
const startsWith = fileName.indexOf(searchPrefix) === 0;
console.log(startsWith);

console.log("--------------------");

// 13. Check if String Ends With (H)
// Check if a file name ends with a specific extension. Return true or false.
const fileName2 = 'report_2024.pdf';
const searchExt = '.pdf';
// i didnt understand the Ex12-13s logic, tried to do them with function if-else statements but it didnt work.
const endsWith = fileName2.lastIndexOf(searchExt) === (fileName2.length - searchExt.length);
console.log(endsWith);

console.log("--------------------");

// 14. Pad Start of String (H)
// Pad a number with zeros using padStart() function to ensure it has at least 5 digits.
const number = '42';
console.log(number.padStart(5, '0'));

console.log("--------------------");

// 15. Pad End of String (H)
// Pad a text with spaces to align it to the right. Expected result: "Align     "
const text = 'Align';
console.log(text.padEnd(10));

console.log("--------------------");

// 16. Split a String (H)
// Split a sentence into words.
const sentence2 = 'Learning JavaScript is fun';
const words = sentence2.split(' ');
console.log(words);

console.log("--------------------");

// 17. Convert String to Array of Characters (H)
// Convert a string into an array of its characters. Use sentence2 variable from exercise above.
const characters = sentence2.split('');
console.log(characters);

console.log("--------------------");

// 18. Reverse a String (H)
// Reverse the characters in a string. Use sentence2 variable from exercise above.

const reverse = characters.reverse();
console.log(reverse);

console.log("--------------------");

// 19. Replace All Occurrences of a Substring (H)
// Replace all instances of a word 'dog' in a text.
const paragraph = "I think Ruth's dog is cuter than your dog!";
const newParagraph = paragraph.replaceAll('dog', 'cat');
console.log(newParagraph);

console.log("--------------------");

// 20. Extract a Substring (H)
// Extract the price and currency from a string below using "slice" method and print it to console. Should return "9.99 USD"
const planPriceString = 'Premium plan - 9.99 USD/month.';
const newPlan = planPriceString.slice(15,23);
console.log(newPlan);