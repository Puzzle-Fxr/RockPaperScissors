/*Script*/
/*const pcChoice = ['Rock', 'Paper', 'Scissors'];*/

function getComputerChoice (){
    const pcChoice = ['rock', 'paper', 'scissors'];
    let random = Math.floor (Math.random() * pcChoice.length);
    return pcChoice[random];
}

const score = document.querySelector('#score');
const wins = document.querySelector('#playerWins');
const pwins = document.querySelector('#pcWins');
const tie = document.querySelector('#draws');

let playerSelection = document.querySelectorAll('.btn');
playerSelection.forEach((btn)=> btn.addEventListener('click', ()=> {
    score.textContent = playRound(btn.id, getComputerChoice());
    wins.textContent = "Player Wins ="+playerWin;
    pwins.textContent = "Cpu Wins ="+pcWin;
    tie.textContent = "Draws ="+draw;
    declareWin();
}));

let playerWin = 0;
let pcWin = 0;
let draw = 0;

function declareWin (){
    if (playerWin === 5){
        console.log("it works");
    } else  if (pcWin === 5){
        console.log("losing sucks");
    };
};


function playRound (playerSelection, computerSelection){
    if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWin ++;
        return "You Win! Scissors cuts paper into pieces!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWin ++;
        return "You Win! Rock smashes scissors into pieces!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWin ++;
        return "You Win! Paper wraps rock into submission!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        pcWin ++;
        return "You Lose! Rock smashes scissors into pieces!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        pcWin ++;
        return "You Lose! Paper wraps rock into submission!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        pcWin ++;
        return "You Lose! Scissors cuts paper into pieces!";
    } else if (playerSelection === computerSelection) {
        draw ++;
        return "Its a tie!";
    } else return "Wrong cast, please type 'rock', 'paper' or 'scissors'.";
}


