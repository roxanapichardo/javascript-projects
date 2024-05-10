const input = require('readline-sync');
const str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
const secondStr = str.slice(0, 3) + str.slice (3,10)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log('First word ${str} changed to ${secondStr}')
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question('Enter number you would like to move: ')
const userStr = ''


if (userInput < 2 && userInput > 1){
    userStr = str.slice(userInput , 2 + str.slice(1, userInput);
    console.log ('Word ${str} was changed to say ${userStr} ' ) 

    
} else { 
    console.log('Word input outside ')
}
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
