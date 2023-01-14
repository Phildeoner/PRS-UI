//DOM Elements
let userScore = 0;
let computerScore = 0;
let round = 1;
const paperBtn = document.querySelector(".Paper");
const rockBtn = document.querySelector(".Rock");
const scissorsBtn = document.querySelector(".Scissors");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const round_span = document.getElementById("round");
const remark_p = document.querySelector(".remark");
const userChoice_p = document.querySelector(".userChoice");
const compChoice_p = document.querySelector(".compChoice");
const clickPaper = paperBtn.addEventListener("click", game);
const clickRock = rockBtn.addEventListener("click", game);
const clickScissors = scissorsBtn.addEventListener("click", game);

//Create a Function (getPlayerChoice) to Grab user inputs as choice of paper, rock or scissors
function getPlayerChoice(){
    const playerChoice = (clickPaper || clickRock || clickScissors);
    if (playerChoice === clickPaper){
        userChoice_p.textContent = (`You Choose: Paper`);
        return "Paper";
    }else if (playerChoice === clickRock){
        userChoice_p.textContent = (`You Choose: Rock`);
        return "Rock";
    }else if (playerChoice === clickScissors){
        userChoice_p.textContent = (`You Choose: Scissors`);
        return "Scissors";
    }else {
        userChoice_p.textContent = ("What's Your Choice?");
    }
} 
//getPlayerChoice();

//Create a Function (getComputerChoice)to get computer Choice
function getComputerChoice(){ 
    const computerChoice = (Math.random());
    if (computerChoice <= 0.35){
        compChoice_p.textContent = (`Computer Choose: Paper`);
        return "Paper";
    }else if (computerChoice <= 0.70){
        compChoice_p.textContent = (`Computer Choose: Rock`);
        return "Rock";
    }else if (computerChoice <= 0.99){
        compChoice_p.textContent = (`Computer Choose: Scissors`);
        return "Scissors"
    }
    else {
        compChoice_p.textContent = (`What's Computer's Choice?`)
    }
}
//getComputerChoice();

//Create a Function (playRound) to call getPlayerChoice and getComputerChoice to play one round of the game
function playRound(){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
        if (playerSelection === computerSelection){
            remark_p.textContent = ("Its a Tie, Try Again!!!");
            return "Tie";
        }else {
            if (playerSelection === "Paper"){
                if (computerSelection === "Rock"){
                    remark_p.textContent = ("You Won!!! Paper Covers Rock.");
                    return "Won";
                }else {
                    remark_p.textContent = ("You Lose!!! Scissors Cuts Paper.");
                    return "Lose";
                }
            }else if (playerSelection === "Rock"){
                if (computerSelection === "Scissors"){
                    remark_p.textContent = ("You Won!!! Rock Smashes Scissors.");
                    return "Won";
                }else {
                    remark_p.textContent = ("You Lose!!! Paper Covers Rock.");
                    return "Lose";
                }
            }else if(playerSelection === "Scissors"){
                if (computerSelection === "Paper"){
                    remark_p.textContent = ("You Won!!! Scissors Cuts Paper.");
                    return "Won";
                }else {
                    remark_p.textContent = ("You Lose!!! Rock Smashes Scissors.");
                    return "Lose"; 
                }
            }else {
                remark_p.textContent = ("Make a Choice to Start!");
        }
    }
}
//playRound();

//Craete a function (game) to call all three functions and  update scores.
function game(){
// Compile playerScore and computerScore and Declare a Winner.
    if (userScore == 5){
        remark_p.textContent = ("Congratulations, You Won the Game!!!");
        clearBoard();
    }else if(computerScore == 5){
        remark_p.textContent = ("Oh Oh You Lose to Computer!!!");
        clearBoard();
    }else {
        console.log("The Game is ON!!!");
    }
}

//A function to update scoreboard
function upadteScoreBoard(){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    round_span.innerHTML = round;
    const play = playRound();
    
    //Conditions for Scores Update for User and Computer
    if (play === "Won"){
        userScore ++;
        round ++;
    }else if (play === "Lose"){
        computerScore ++;
        round ++;
    }else {
        round ++;
    }
}

//A clearBoard function to reset all scores and rounds after any 5 point score
function clearBoard(){
    userScore = 0;
    computerScore = 0;
    round = 1;
}