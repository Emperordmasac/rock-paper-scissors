//An array of possible moves that the computer can make
const selection = ["rock", "paper", "scissors"];

// OPTIONAL: the player making a move on random based on the available options in the selection array
const optionalPlayerSelection = selection[Math.floor(Math.random() * selection.length)]

//The Move made by the player
const playerSelection = optionalPlayerSelection;

//A function that tells the computer to make a move; 
// By picking at random any one of the options in the selection array.
function computerGame() {
  let computerSelection =  selection[Math.floor(Math.random() * selection.length)]
  return computerSelection;
}


// The main brain of the game
// A function that select the winner of the game based on the input of the player's selection and the computers selection
// N>B this is only for a single game
function playSingleGame(playerSelection, computerSelection) {
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
        console.log(message, "Player Wins!!!!!");
    }

    else {
        let message = `playerSelection is ${playerSelection} AND computerSelection is ${computerSelection}`
        console.log(message,"Computer Wins!!!!")
    }
}

//printing the result of the game to the console.
console.log(playSingleGame(playerSelection, computerGame()))
