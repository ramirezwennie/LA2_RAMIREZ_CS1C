const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ageCheck.js
rl.question("Enter your age: ", (age) => {
    age = parseInt(age);
    if (age < 13) console.log("You are a child.");
    else if (age <= 19) console.log("You are a teenager.");
    else console.log("You are an adult.");

    // gradeAssignment.js
    rl.question("Enter your score: ", (score) => {
        score = parseInt(score);
        if (score >= 90) console.log("Your grade is: Excellent.");
        else if (score >= 80) console.log("Your grade is: Good.");
        else if (score >= 70) console.log("Your grade is: Fair.");
        else console.log("Your grade is: Needs Improvement.");

        // taskCalendar.js
        rl.question("Enter a day of the week: ", (day) => {
            day = day.toLowerCase();
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
            console.log("Even numbers from 1 to 10:");
            for (let i = 2; i <= 10; i += 2) console.log(i);

            // numberGuess.js
            const correctNumber = Math.floor(Math.random() * 10) + 1;
            const askGuess = () => {
                rl.question("Guess a number between 1 and 10: ", (guess) => {
                    guess = parseInt(guess);
                    if (guess < correctNumber) {
                        console.log("Too low!"); askGuess();
                    } else if (guess > correctNumber) {
                        console.log("Too high!"); askGuess();
                    } else {
                        console.log("Correct!");

                        // passwordPrompt.js
                        const correctPassword = "correctPassword";
                        const askPassword = () => {
                            rl.question("Enter your password: ", (password) => {
                                if (password !== correctPassword) {
                                    console.log("Incorrect, try again."); askPassword();
                                } else {
                                    console.log("Access granted.");
                                    rl.close();
                                }
                            });
                        };
                        askPassword();
                    }
                });
            };
            askGuess();
        });
    });
});

