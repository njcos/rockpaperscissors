let choice = prompt("Rock, Paper, Scissors?");
let choiceLowerCase = choice.toLowerCase();
let choiceNumber = 0;
let opponentsChoice = random(3)


if (choiceLowerCase === "rock") {
    choiceNumber = 0;
} else if (choiceLowerCase === "paper") {
    choiceNumber = 1;
} else if (choiceLowerCase === "scissors") {
    choiceNumber = 2;
} else {

}


function random(max) {
    return Math.floor((Math.random()) * max)
}

