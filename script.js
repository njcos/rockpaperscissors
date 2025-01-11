let choice = prompt("Rock, Paper, Scissors?").toLowerCase();
// let choiceLowerCase = choice.toLowerCase();
let choiceNumber = 0;
let opponentsChoice = random(3)

compChoice(opponentsChoice)
compare(userChoice(choice), opponentsChoice)

function random(max) {
    return Math.floor((Math.random()) * max)
}

function compChoice(num) {
    let choice = "";
    if (num === 0) {
        choice = "Rock"
    } else if (num === 1) {
        choice = "Paper"
    } else  {
        choice = "Scissors"
    }

    console.log(`Computer picks ${choice}`)
}

function userChoice(rps) {
   let userNumber = 0;
    if (rps === "rock") {
        userNumber = 0;
    } else if (rps === "paper") {
        userNumber = 1;
    } else if (rps === "scissors") {
        userNumber = 2;
    } else {   
    }
    return userNumber;
}

function compare(user, computer) {
    // console.log(user === computer);
    // console.log(computer);
    let u = user;
    let c = computer;

    let winner = ""

    if (u === 0 && c === 2) {
        winner = "You win!"
    } else if (u === 1 && c === 0) {
        winner = "You win!"
    } else if (u === 2 && c === 1) {
        winner = "You win!"
    } else if (c === 0 && u === 2){
        winner = "You lose!"
    } else if (c === 1 && u === 0){
        winner = "You lose!"
    } else if (c === 2 && u === 1){
        winner = "You lose!"
    } else {
        winner="It's a tie!"
    } 
 console.log(winner)
}