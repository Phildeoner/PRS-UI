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
let playerChoice = '';



//Create a Function (getPlayerChoice) to Grab user inputs as choice of paper, rock or scissors
function getPlayerChoice(){
    if (playerChoice === 'Paper'){
        userChoice_p.textContent = (`You Choose: Paper`);
        return "Paper";
    }else if (playerChoice === 'Rock'){
        userChoice_p.textContent = (`You Choose: Rock`);
        return "Rock";
    }else if (playerChoice === 'Scissors'){
        userChoice_p.textContent = (`You Choose: Scissors`);
        return "Scissors";
    }else {
        userChoice_p.textContent = ("What's Your Choice?");
    }
} 

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

//A function to updateScoreboard
function win() {
    userScore++;
    round++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    round_span.innerHTML = round;
    compileScores();
}

function lose() {
    computerScore++;
    round++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    round_span.innerHTML = round;
    compileScores();
}


function tie() {
    round++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    round_span.innerHTML = round;
    compileScores();
}
//A function to compile scores
function compileScores(){
    // Compile playerScore and computerScore and Declare a Winner.
    if (userScore === 5){
        remark_p.textContent = ("Congratulations, You Won the Game!!!");
        clearBoard();
    }else if(computerScore === 5){
        remark_p.textContent = ("Oh Oh You Lose to Computer!!!");
        clearBoard();
    }else {
        console.log("The Game is ON!!!");
    }
}

//A clearBoard function to reset all scores and rounds after any 5 point score
function clearBoard(){
    userScore = 0;
    computerScore = 0;
    round = 1;
}

//Create a Function (playRound) to call getPlayerChoice and getComputerChoice to play one round of the game
function playRound(playerChoice){
    playerChoice = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerChoice === computerSelection){
        remark_p.textContent = ("Its a Tie, Try Again!!!");
        tie(playerChoice);
    }else {
        if (playerChoice === "Paper"){
            if (computerSelection === "Rock"){
                remark_p.textContent = ("You Won!!! Paper Covers Rock.");
                win(playerChoice);
            }else {
                remark_p.textContent = ("You Lose!!! Scissors Cuts Paper.");
                lose(playerChoice);
            }
        }else if (playerChoice === "Rock"){
            if (computerSelection === "Scissors"){
                remark_p.textContent = ("You Won!!! Rock Smashes Scissors.");
                win(playerChoice);
            }else {
                remark_p.textContent = ("You Lose!!! Paper Covers Rock.");
                lose(playerChoice);
            }
        }else if(playerChoice === "Scissors"){
            if (computerSelection === "Paper"){
                remark_p.textContent = ("You Won!!! Scissors Cuts Paper.");
                win(playerChoice);
            }else {
                remark_p.textContent = ("You Lose!!! Rock Smashes Scissors.");
                lose(playerChoice); 
            }
        }
    }
}

//Craete a function (game) to call all three functions and  update scores.
function game(){
    paperBtn.addEventListener("click", function(){
        playerChoice = 'Paper';
        playRound("Paper");
    });
    rockBtn.addEventListener("click", function(){
        playerChoice = 'Rock';
        playRound("Rock");
    });
   scissorsBtn.addEventListener("click", function(){
        playerChoice = 'Scissors';
        playRound("Scissors");
    });
}
game();