/*Script*/
/*const pcChoice = ['Rock', 'Paper', 'Scissors'];*/

function getComputerChoice (){
    const pcChoice = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor (Math.random() * pcChoice.length);
    return pcChoice[random];
}

console.log("hello!");
console.log(getComputerChoice());

function playRound (playerSelection, computerSelection){
}

let playerSelection = "Rock";
let computerSelection = getComputerChoice();