//variables declaration

let computerInput;
let playerInput;
let computerScore;
let playerScore;

///////////////////////////////////////////////////////////////////////////////////////////////////

//DOM Query

let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const container = document.querySelector(".container__game");
const displayResult = document.querySelector(".scoreDisplay");
const declaration = document.querySelector(".dec__des")
const GoAgain = document.querySelector(".retry__btn")



//////////////////////////////////////////////////////////////////////////////////////////////////////
//to select playerInput from the images in the html
//loop through the buttons

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerInput = img.alt.toLowerCase();
        console.log(playerInput)

        //note
        //on Each=h button click play a Round of game
        oneRound(playerInput, computerInput)

        //and also check if we have a winner
        //first to reach 5
        if(playerScore == 5 || computerScore == 5) {
            declareWinner();
        }
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

//An array of the available selections that the computer can make
const availableSelection = ["Rock", "Paper", "Scissors"];

//a function for computer to pick an option at random from the array of availableSelections
function computerGame() {
        return availableSelection[~~(Math.random()*availableSelection.length)];
}

//////////////////////////////////////////////////////////////////////////////////////////////////
function oneRound(playerInput, computerInput) {
    computerInput = computerGame().toLowerCase();
    playerInput = playerInput.toLowerCase()

    if(playerInput == computerInput) {
        showResult("ITS A TIE");
    } 
    else if ((playerInput =='rock' && computerInput == 'scissors') || 
    (playerInput == "paper" && computerInput == "rock") || 
    (playerInput == 'scissors' && computerInput == "paper")) {
        playerScore = ++playerScore;
        keepPlayerScore();
        if(playerScore == 1) {
            showResult(
                `HAHAHAHAH LUCKY LUCKY LUCKY
                ${capitalLetter(playerInput)} beats ${capitalLetter(computerInput)}
            `)
        } else if(playerScore == 2) {
            showResult(
                `HAHAHAHAH YOU ARE STILL LUCKY HUMAN!!!!
                ${capitalLetter(playerInput)} beats ${capitalLetter(computerInput)}
            `)
        } else if(playerScore == 3) {
            showResult(
                `HAHAHAHAH DO YOU REALLY THINK YOU HAVE A CHANCE HUMAN!!!
                ${capitalLetter(playerInput)} beats ${capitalLetter(computerInput)}
            `)
        } else if(playerScore == 4) {
            showResult(
                `HAHAHAHAH TIME TO BRING IN THE BIG GUNS!!!
                ${capitalLetter(playerInput)} beats ${capitalLetter(computerInput)}
            `)
        } else {
            showResult(
                `HAHAHAHAH THIS IS NOT THE END \nWE WILL BE BACK!!!!!
                ${capitalLetter(playerInput)} beats ${capitalLetter(computerInput)}
            `)
        }
    }
    else {
        computerScore = ++computerScore;
        keepCpuScore();
        if(computerScore == 1) {
            showResult(
                `HAHAHAHAH THIS IS JUST WARM UP
                ${capitalLetter(computerInput)} beats ${capitalLetter(playerInput)}
            `)
        } else if(computerScore == 2) {
            showResult(
                `HAHAHAHAH AM NOT EVEN TRYING!!!!
                ${capitalLetter(computerInput)} beats ${capitalLetter(playerInput)}
            `)
        } else if(computerScore == 3) {
            showResult(
                `HAHAHAHAH OK LET ME CLOSE ONE EYE, THIS IS TOO EASY
                ${capitalLetter(computerInput)} beats ${capitalLetter(playerInput)}
            `)
        } else if(computerScore == 4) {
            showResult(
                `HAHAHAHAH LUCKY LUCKY LUCKY
                ${capitalLetter(computerScore)} beats ${capitalLetter(playerInput)}
            `)
        } else {
            showResult(
                `HAHAHAHAH JUST OBEDIENTLY STAY THERE AND BE EATEN HAHAHAHAH!!!!!!
                ${capitalLetter(computerInput)} beats ${capitalLetter(playerInput)}
            `)
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Helper functions
//1
function showResult(str) {
    displayResult.textContent = str;
}
//2
function declareWinner() {
    if(playerScore > computerScore) {
        declaration.textContent = `YOU WON!!  ||  HUMANS ARE SAVED \nFOR NOW!!!!!`
    }
    else {
        declaration.textContent =  `YOU LOST!!!! ||  HAHAHAHAH, KILL THEM ALL`
    }
}
//3
function keepPlayerScore() {
    let playerScorePad = document.querySelector("#yourScore");
    playerScorePad.textContent = playerScore;
}
function keepCpuScore() {
    let comScorePad = document.querySelector("#opponentScore");
    comScorePad.textContent = computerScore;
}
//4
function capitalLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}