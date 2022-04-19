//An array of possible moves that the computer can make
const selection = ["rock", "paper", "scissors"];



//A function that tells the computer to make a move; 
// By picking at random any one of the options in the selection array.
function computerGame() {
  let computerSelection =  selection[Math.floor(Math.random() * selection.length)]
  return computerSelection;
}

// A variable that keep the score of the player and the computer with a base value of 0
// If the player wins a singleRound, a value of 1 is added to the score || Same thing in the case of the computer
let playerScore = 0;
let computerScore = 0;


// The main brain of the game
// A function that select the winner of the game based on the input of the player's selection and the computers selection
// N>B this is only for a single game
function singleRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        if(playerSelection == computerSelection) {
            let message = `playerSelection is ${playerSelection} AND computerSelection is ${computerSelection}`
            console.log(message, "Its a Tie!!!!")
        }
    
        else if(
            (playerSelection == "rock" && computerSelection == "scissors")  ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")
        ) {
            let message = `playerSelection is ${playerSelection} AND computerSelection is ${computerSelection}`
            playerScore++
            console.log(message, "Player Wins!!!!!");
            return playerScore;
            
        }
    
        else {
            let message = `playerSelection is ${playerSelection} AND computerSelection is ${computerSelection}`
            computerScore++
            console.log(message,"Computer Wins!!!!")
            return computerScore;
            
        }
}


// A function that plays the singleRound for 5 times to determine the winner 
function game() {
    for(let i = 1; i <6; i++) {
        //The Move made by the player  
        const playerSelection = prompt("choose your destiny");
        singleRound(playerSelection, computerGame())
        console.log(`result of ${i} game`)
        console.log(`PlayerScore: ${playerScore} || ComputerScore: ${computerScore}`)
        

    }
    if(playerScore == computerScore) {
        console.log(`PlayerScore: ${playerScore} || ComputerScore: ${computerScore}`)
        console.log("Its a Tie!!!!")
    }
    else if (playerScore > computerScore) {
        console.log(`PlayerScore: ${playerScore} || ComputerScore: ${computerScore}`)
        console.log("Player Wins!!!!!");
    }
    else {
        console.log(`PlayerScore: ${playerScore} || ComputerScore: ${computerScore}`)
        console.log("Computer Wins!!!!")
    }
}

game()

