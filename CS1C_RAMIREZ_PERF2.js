// ageCheck.js
const age = parseInt(prompt("Enter your age:"));
if (age < 13) console.log("You are a child.");
else if (age <= 19) console.log("You are a teenager.");
else console.log("You are an adult.");

// gradeAssignment.js
const score = parseInt(prompt("Enter your score:"));
if (score >= 90) console.log("Your grade is: Excellent.");
else if (score >= 80) console.log("Your grade is: Good.");
else if (score >= 70) console.log("Your grade is: Fair.");
else console.log("Your grade is: Needs Improvement.");

// taskCalendar.js
const day = prompt("Enter a day of the week:").toLowerCase();
switch (day) {
    case "monday": console.log("Your task for Monday is: Finish your assignments."); break;
    case "tuesday": console.log("Your task for Tuesday is: Attend team meetings."); break;
    case "wednesday": console.log("Your task for Wednesday is: Work on your project."); break;
    case "thursday": console.log("Your task for Thursday is: Review notes."); break;
    case "friday": console.log("Your task for Friday is: Prepare reports."); break;
    case "saturday": console.log("Your task for Saturday is: Relax and unwind."); break;
    case "sunday": console.log("Your task for Sunday is: Plan for the upcoming week."); break;
    default: console.log("Invalid day entered. Please enter a valid day of the week.");
}

// evenNumbers.js
for (let i = 2; i <= 10; i += 2) console.log(i);

// numberGuess.js
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
while (guess !== correctNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (guess < correctNumber) console.log("Too low!");
    else if (guess > correctNumber) console.log("Too high!");
    else console.log("Correct!");
}

// passwordPrompt.js
const correctPassword = "correctPassword";
let password;
do {
    password = prompt("Enter your password:");
    if (password !== correctPassword) console.log("Incorrect, try again.");
} while (password !== correctPassword);
console.log("Access granted.");

            askGuess();
        });
    });
});

