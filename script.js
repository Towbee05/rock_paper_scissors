

const getComputerPlay = () => {
    const pick = ["rock", "paper", "scissors"];
    const selected = Math.floor(Math.random() * pick.length);
    const computerPlayed = pick[selected];
    
    return computerPlayed;
};

const getUserPlay = () => {
    let userPlayed = prompt("Enter your pick: ");
    const checkIfItIsRight = userPlayed.toLowerCase();
    if (!checkIfItIsRight) alert ("Response needed!!");
    return checkIfItIsRight;
};

const increaseScore = (numberOfRound) => {
    let computerscore = 0;
    let userscore = 0;
    
    while (numberOfRound > 0){
        let computerInput = getComputerPlay();
        let userInput = getUserPlay();
    
        if ((computerInput === "rock"  && userInput === "rock") 
            || (computerInput === "paper"  && userInput === "paper") 
            || (computerInput === "scissors"  && userInput === "scissors")
        ){
            console.log(`The computer played "${computerInput}" while user played "${userInput}"`);
            console.log("This round is a draw!!!!");
            numberOfRound --;
            console.log(`Rounds left: ${numberOfRound}`);
            console.log("\n");
        }
        // Condition checking if the computer wins that round
        else if ((computerInput === "rock" && userInput === "scissors") 
            || (computerInput === "scissors" && userInput === "paper") 
            || ( computerInput === "paper" && userInput === "rock" ) 
        ){
            computerscore++;
            console.log(`The computer played "${computerInput}" while user played "${userInput}"`);
            console.log("The computer wins!!!");
            console.log(`Computer: ${computerscore} \nUser: ${userscore}`)
            numberOfRound = numberOfRound - 1;
            console.log(`Rounds left: ${numberOfRound}`);
            console.log("\n");
        }
        // Condition checking if the user wins that round
        else if ((computerInput === "scissors" && userInput === "rock") 
            || (computerInput === "rock" && userInput === "paper") 
            || (computerInput === "paper" && userInput === "scissors")
        ){
            userscore++
            console.log(`The computer played "${computerInput}" while user played "${userInput}"`);
            console.log("The user wins!!!");
            console.log(`Computer: ${computerscore} \nUser: ${userscore}`)
            numberOfRound = numberOfRound - 1;
            console.log(`Rounds left: ${numberOfRound}`);
            console.log("\n");
        }

        // Catch any other response except rock, paper and scissors
        else{
            console.log("Invalid response!!!!!!!");
            console.log("GAME OVER!!!!!");
        }
    }
    // The counter hits zero
    console.log("GAME OVER");
    console.log("Computing final results...................");
    console.log(`Computer score : ${computerscore} \nUser score : ${userscore}`);
    computerscore > userscore ? console.log("Computer wins") : console.log("User wins"); 
}

increaseScore(5)