//Paper Rock Scissors Game.
const prompt = require("prompt-sync")();

//Create a Function (getPlayerChoice) to Grab user inputs as choice of paper, rock or scissors
//Make user input Case insensitive
function getPlayerChoice(){
    const playerChoice = (prompt("Please Insert Choice, Paper, Rock or Scissors!")).toUpperCase();
    if (playerChoice == "PAPER" && playerChoice != " "){
        console.log(`You Choose: Paper`);
        return "Paper";
    }else if (playerChoice == "ROCK" && playerChoice !== " "){
        console.log(`You Choose: Rock`);
        return "Rock"
    }else if (playerChoice == "SCISSORS" && playerChoice != " "){
        console.log(`You Choose: Scissors`);
        return "Scissors"
    }else {
        console.log("Please Insert a Valid Choice of Rock, Paper or Scissors!")
    }
} 
//getPlayerChoice();

//Create a Function (getComputerChoice)to get computer Choice
function getComputerChoice(){ 
    const computerChoice = (Math.random());
    if (computerChoice <= 0.35){
        console.log(`Computer Choose: Paper`);
        return "Paper";
    }else if (computerChoice <= 0.70){
        console.log(`Computer Choose: Rock`);
        return "Rock";
    }else {
        console.log(`Computer Choose: Scissors`);
        return "Scissors"
    }
}
//getComputerChoice();

//Create a Function (playRound) to call getPlayerChoice and getComputerChoice to play one round of the game
function playRound(){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
        if (playerSelection === computerSelection){
            console.log("Its a Tie, Try Again!!!");
            return "Tie";
        }else {
            if (playerSelection === "Paper"){
                if (computerSelection === "Rock"){
                    console.log("You Won!!! Paper Covers Rock.");
                    return "Won";
                }else {
                    console.log("You Lose!!! Scissors Cuts Paper.");
                    return "Lose";
                }
            }else if (playerSelection === "Rock"){
                if (computerSelection === "Scissors"){
                    console.log("You Won!!! Rock Smashes Scissors.");
                    return "Won";
                }else {
                    console.log("You Lose!!! Paper Covers Rock.");
                    return "Lose";
                }
            }else if(playerSelection === "Scissors"){
                if (computerSelection === "Paper"){
                    console.log("You Won!!! Scissors Cuts Paper.");
                    return "Won";
                }else {
                    console.log("You Lose!!! Rock Smashes Scissors.");
                    return "Lose"; 
                }
            }else {
            console.log("Try Again!!!");
        }
    }
}
//playRound();

//Craete a function (game) to call all three functions and loop the game to play five rounds and update scores.
function game(){
    let playerScore = 0;
    let computerScore = 0;

    // Loop to play Five rounds of playRound.
        for (let i = 1; i <= 5; i++){
            const play = playRound();

    //Conditions for Scores Update for User and Computer
            if (play === "Won"){
                playerScore ++;
                console.log(`Round ${i} Score: User ${playerScore} : ${computerScore} Computer`);
            }else if (play === "Lose"){
                computerScore ++;
                console.log(`Round ${i} Score: User ${playerScore}  : ${computerScore}  Computer`);
            }else if (play === "Tie"){
                console.log(`Round ${i} Score: User ${playerScore}  : ${computerScore} Computer`);
            }else {
                console.log(`Round ${i} is Cancelled for Wrong Input, Try Again!`);
                break;
            }
        }
    
        // Compile playerScore and computerScore and Declare a Winner.
        if (playerScore > computerScore){
            console.log("Congratulations, You Won the Game!!!");
        }else if(playerScore < computerScore){
            console.log("Oh Oh You Lose to Computer!!!");
        }else {
            console.log("It was an Exciting Game to Decide, Its A Tie!!!");
        }
}
game();