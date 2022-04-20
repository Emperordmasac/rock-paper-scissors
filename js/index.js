//variables declaration
let computerInput;
let playerInput;
let computerScore;
let playerScore;

//DOM Query
let buttons = document.querySelector(".buttons");
const body = document.querySelector("body");
const container = document.querySelector(".container__game");
const displayResult = document.querySelector(".scoreDisplay");


//An array of the available selections that the computer can make
const availableSelection = ["Rock", "Paper", "Scissors"];

//a function for computer to pick an option at random from the array of availableSelections
function computerGame() {
        return availableSelection[~~(Math.random()*availableSelection.length)]
    }