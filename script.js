let userScore = 0;
let compScore = 0;


playGame()

function getComputerNumber () {
        let compNum = Math.floor((Math.random()) * 3);
        let choice = "";
        if (compNum === 0) {
            choice = "Rock"
        } else if (compNum === 1) {
            choice = "Paper"
        } else  {
            choice = "Scissors"
        }
    console.log(`Computer picks ${choice}`)
    return compNum;
}

function getUserChoice() {
    let choice = prompt("Rock, Paper, Scissors?").toLowerCase();
    return choice; 
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
    let u = user;
    let c = computer;
    let winner = ""

    if (u === 0 && c === 2) {
        winner = "You win!"
        userScore++;
    } else if (u === 1 && c === 0) {
        winner = "You win!"
        userScore++;

    } else if (u === 2 && c === 1) {
        winner = "You win!"
        userScore++;

    } else if (c === 0 && u === 2){
        winner = "You lose!"
        compScore++;

    } else if (c === 1 && u === 0){
        winner = "You lose!"
        compScore++;

    } else if (c === 2 && u === 1){
        winner = "You lose!"
        compScore++;

    } else {
        winner="It's a tie!"
        compScore++;
        userScore++;
    } 
 console.log(winner)
 return winner; 
//  console.log(`The score is User: ${userScore} Computer: ${compScore}`)
}

function playGame() {

    for(let i = 0; i <5; i++) {
        compare(userChoice(getUserChoice()), getComputerNumber())
        console.log(`The score is User: ${userScore} Computer: ${compScore}`)
    }

    if(userScore > compScore) {
        console.log("%cYou are the winner!", "font-weight: 800;font-size: 28px; background-color: Yellow; color: black")
    } else if (userScore < compScore) {
        console.log("%cThe computer wins", "font-weight: 800; font-size: 28px; background-color: Yellow; color: black");
    } else {
        console.log("%cIt's a tie!", "font-weight: 800; font-size: 28px; background-color: Yellow; color: black")
    }

}