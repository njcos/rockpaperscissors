let userScore = 0;
let compScore = 0;
let userChoice = 0;

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissors')

const scores = document.querySelector('.score')
const userNumber = document.createElement('p')
const compNumber = document.createElement('p')
const imageLeft = document.querySelector('.imageLeft')
const imageRight = document.querySelector('.imageRight')
const userImage = document.createElement('img')
const compImage = document.createElement('img')
const finalScore = document.createElement('h1')
const winner = document.querySelector('.winner')
userNumber.classList.add("scores")
compNumber.classList.add("scores")
finalScore.classList.add('final')

imageRight.appendChild(compImage)
imageLeft.appendChild(userImage)


userNumber.textContent = `User Score: ${userScore}`
compNumber.textContent = `Computer Score: ${compScore}`

scores.appendChild(userNumber);
scores.appendChild(compNumber);

rock.addEventListener('click', () => {
    console.log('rock')
    userChoice = 0;
    userImage.src="./images/userRock.png"
    playGame()

})

paper.addEventListener('click', () => {
    console.log('paper')
    userChoice = 1;
    userImage.src="./images/userPaper.png"

    playGame()

})

scissor.addEventListener('click', () => {
    console.log('scissors')
    userChoice = 2;
    userImage.src="./images/userScissors.png"

    playGame()
})


function getComputerNumber () {
        let compNum = Math.floor((Math.random()) * 3);
        let choice = "";
        if (compNum === 0) {
            choice = "Rock"
            compImage.src = 'images/rock.png'

        } else if (compNum === 1) {
            choice = "Paper"
            compImage.src = 'images/paper.png'


        } else  {
            choice = "Scissors"

            compImage.src = 'images/scissors.png'

        }
    console.log(`Computer picks ${choice}`)
    return compNum;
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

 updateScore()
//  console.log(winner)
 return winner; 
//  console.log(`The score is User: ${userScore} Computer: ${compScore}`)
}

function playGame() {
    if(userScore  === 5 || compScore === 5){
        userScore = 0;
        compScore = 0;
        updateScore();
        winner.removeChild(finalScore)
        
    } 


     {
        compare(userChoice, getComputerNumber())
    }

    if (userScore === 5) {
        finalScore.textContent = 'You are the winner!'
        winner.appendChild(finalScore)
    } else if (compScore === 5) {
        finalScore.textContent= 'The computer is the winnner!'
        winner.appendChild(finalScore)
    } else if (userScore === 5 && compScore === 5) {
        finalScore.textContent= "It's a tie!"
        winner.appendChild(finalScore)
    }


}

function updateScore () {
    compNumber.textContent = `Computer Score: ${compScore}`
    userNumber.textContent = `User Score: ${userScore}`
    scores.appendChild(userNumber);
    scores.appendChild(compNumber);


}
