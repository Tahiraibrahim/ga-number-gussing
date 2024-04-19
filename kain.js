#! /usr/bin/env node
console.log("Guess a number between 1 to 10");
// Now variable create
let a = Math.floor(Math.random() * 7);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: "Enter your guess number you want:" });
    // Provide code 
    let ans = input.guess;
    if (a == ans) {
        console.log("Congratulation your guess number is correct ");
        break;
    }
    else {
        console.log("Sorry you guss wrong number try again");
    }
}
