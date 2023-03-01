/*Script*/
const pcChoice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice (choice){
    let random = Math.floor (Math.random() * choice.length);
    return choice[random];
}

console.log("hello!");
console.log(getComputerChoice(pcChoice));