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
        return "Its a Draw! Play again?"
    } else return "Wrong cast, please type 'rock', 'paper' or 'scissors'.";
}

let playerChoice = prompt("Type 'Rock', 'Paper' or 'Scissors'.");
let playerSelection = playerChoice.toLowerCase();
/*let computerSelection = getComputerChoice();*/

/*console.log (playRound(playerSelection, computerSelection));*/


function game(){
    let playerWin = 0;
    let pcWin = 0;
    let tie = 0;

    for(var i=0; i<5; i++){
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        if (playRound(playerSelection, computerSelection) === "You Win! Scissors cuts paper into pieces!"){
            playerWin ++;
        } else if (playRound(playerSelection, computerSelection) === "You Win! Rock smashes scissors into pieces!"){
            playerWin ++;
        } else if (playRound(playerSelection, computerSelection) === "You Win! Paper wraps rock into submission!"){
            playerWin ++;
        } else if (playRound(playerSelection, computerSelection) === "You Lose! Rock smashes scissors into pieces!"){
            pcWin ++;
        } else if (playRound(playerSelection, computerSelection) === "You Lose! Paper wraps rock into submission!"){
            pcWin ++;
        } else if (playRound(playerSelection, computerSelection) === "You Lose! Scissors cuts paper into pieces!"){
            pcWin ++;
        } else tie ++;
    }

    console.log(playerWin);
    console.log(pcWin);
    console.log(tie);

    if (playerWin > pcWin){
        return "You Win in a best of 5!";
    } else if (playerWin < pcWin){
        return "You Lose in a best of 5!";
    } else return "You tied the best of 5!";
}
console.log(game());