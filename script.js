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
    wins.textContent = "Player Wins = "+playerWin;
    pwins.textContent = "Cpu Wins = "+pcWin;
    tie.textContent = "Draws = "+draw;
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

const vis = document.getElementsByClassName('vis');
const visOne = document.getElementById('visOne');
const visTwo = document.getElementById('visTwo');
const visThree = document.getElementById('visThree');
const visFour = document.getElementById('visFour');

function playRound (playerSelection, computerSelection){
    if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWin ++;
        visOne.style.visibility = 'hidden';
        visTwo.style.visibility = 'visible';
        visThree.style.visibility = 'hidden';
        visFour.style.visibility = 'hidden';
        return "You Win! Scissors cuts paper into pieces!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWin ++;
        visOne.style.visibility = 'visible';
        visTwo.style.visibility = 'hidden';
        visThree.style.visibility = 'hidden';
        visFour.style.visibility = 'hidden';
        return "You Win! Rock smashes scissors into pieces!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWin ++;
        visOne.style.visibility = 'hidden';
        visTwo.style.visibility = 'hidden';
        visThree.style.visibility = 'visible';
        visFour.style.visibility = 'hidden';
        return "You Win! Paper wraps rock into submission!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        pcWin ++;
        visOne.style.visibility = 'visible';
        visTwo.style.visibility = 'hidden';
        visThree.style.visibility = 'hidden';
        visFour.style.visibility = 'hidden';
        return "You Lose! Rock smashes scissors into pieces!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        pcWin ++;
        visOne.style.visibility = 'hidden';
        visTwo.style.visibility = 'hidden';
        visThree.style.visibility = 'visible';
        visFour.style.visibility = 'hidden';
        return "You Lose! Paper wraps rock into submission!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        pcWin ++;
        visOne.style.visibility = 'hidden';
        visTwo.style.visibility = 'visible';
        visThree.style.visibility = 'hidden';
        visFour.style.visibility = 'hidden';
        return "You Lose! Scissors cuts paper into pieces!";
    } else if (playerSelection === computerSelection) {
        draw ++;
        visOne.style.visibility = 'hidden';
        visTwo.style.visibility = 'hidden';
        visThree.style.visibility = 'hidden';
        visFour.style.visibility = 'visible';
        return "Its a tie!";
    } else return "Wrong cast, please type 'rock', 'paper' or 'scissors'.";
};


