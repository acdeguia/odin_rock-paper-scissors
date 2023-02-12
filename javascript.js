let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let getPlayerChoice = ''
let rounds = 1;

//this function randomly returns either rock, paper and scissor by using Math.random function

function getComputerChoice() {
    let array = ['ROCK', 'PAPER', 'scissors']
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}
//this function plays a single round of rps, and then return a string that declares the winner by using if-else statement
function playRound(playerSelection, computerSelection) {
 
            playerSelection = getPlayerChoice;
            document.getElementById("player-selection").innerHTML = playerSelection;

            computerSelection = getComputerChoice().toUpperCase();
            document.getElementById("computer-selection").innerHTML = computerSelection;
            
            // document.getElementById("number-of-rounds").innerHTML = 'Round: ' + rounds;

            if(playerSelection === computerSelection){
                draw +=1;
                // document.getElementById("draw").innerHTML = 'Draw: ' + draw;
                document.getElementById("result").innerHTML = 'Draw!';
            }else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
                playerScore += 1;
                document.getElementById("player-score").innerHTML =  playerScore;
                document.getElementById("result").innerHTML = 'You won! Paper beats Rock';
            }else if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
                computerScore += 1;
                document.getElementById("computer-score").innerHTML =  computerScore;
                document.getElementById("result").innerHTML = 'You Lose! Paper beats Rock';
            }else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
                computerScore += 1;
                document.getElementById("computer-score").innerHTML =  computerScore;
                document.getElementById("result").innerHTML = 'You lose! Rock beats Scissors'
            }else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
                playerScore += 1;
                document.getElementById("player-score").innerHTML =  playerScore;
                document.getElementById("result").innerHTML = 'You won! Rock beats Scissors'
            }else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
                computerScore += 1;
                document.getElementById("computer-score").innerHTML =  computerScore;
                document.getElementById("result").innerHTML = 'You lose! Scissors beats Paper'
            }else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
                playerScore += 1;
                document.getElementById("player-score").innerHTML =  playerScore;
                document.getElementById("result").innerHTML = 'You won! Scissors beats Paper'
            }
 }
 
//  This function calls the playRound function inside of this and stops the game once one player reacher 5 points. It also declare sthe winner at the end

function game() {
    if(playerScore < 5 && computerScore < 5){
    playRound()
    }
    if(playerScore === 5 || computerScore === 5){
        if(playerScore > computerScore){
            document.getElementById("result").innerHTML = ('Congratulations!');
        }else{
            document.getElementById("result").innerHTML = 'Better luck next time';
        }
    }
}

//created 3 buttons with the corresponding player choice
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    getPlayerChoice = 'ROCK'
    game()
    rounds += 1;
});


paper.addEventListener('click', () => {
    getPlayerChoice = 'PAPER'
    game()
    rounds += 1;
});


scissors.addEventListener('click', () => {
    getPlayerChoice = 'SCISSORS'
    game()
    rounds += 1;
});