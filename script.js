/*Script*/
/*const pcChoice = ['Rock', 'Paper', 'Scissors'];*/

function getComputerChoice (){
    const pcChoice = ['rock', 'paper', 'scissors'];
    let random = Math.floor (Math.random() * pcChoice.length);
    return pcChoice[random];
}

function playRound (playerSelection, computerSelection){
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors cuts paper into pieces!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock smashes scissors into pieces!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper wraps rock into submission!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock smashes scissors into pieces!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper wraps rock into submission!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors cuts paper into pieces!";
    } else if (playerSelection === computerSelection) {
        return "Its a tie!";
    } else return "Wrong cast, please type 'rock', 'paper' or 'scissors'.";
}

let playerWin = 0;
let pcWin = 0;
let draw = 0;

const score = document.querySelector('#score');

let playerSelection = document.querySelectorAll('.btn');
playerSelection.forEach((btn)=> btn.addEventListener('click', ()=> {
    score.textContent = playRound(btn.id, getComputerChoice());
}));

