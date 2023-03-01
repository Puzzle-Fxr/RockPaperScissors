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
    if (playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Paper" && computerSelection === "Rock"
    || playerSelection === "Scissorss" && computerSelection === "Paper") {
        return "You Win!";
    } else if (playerSelection === computerSelection){
        return "Its a Draw!"
    } else return "You Lose!";
}

let playerSelection = "Rock";
let computerSelection = getComputerChoice();
console.log (playRound(playerSelection, computerSelection));