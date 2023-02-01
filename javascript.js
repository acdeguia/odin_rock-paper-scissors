let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let getPlayerChoice = ''
let rounds = 1;

//this function randomly returns either rock, paper and scissor by using Math.random function

function getComputerChoice() {
    let array = ['rock', 'paper', 'scissors']
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}
//this function plays a single round of rps, and then return a string that declares the winner by using if-else statement
function playRound(playerSelection, computerSelection) {
 
        playerSelection = getPlayerChoice;
            document.getElementById("player-selection").innerHTML = 'Player: ' + playerSelection;

            computerSelection = getComputerChoice().toLowerCase();
            document.getElementById("computer-selection").innerHTML = 'Computer: ' + computerSelection;
            
            document.getElementById("number-of-rounds").innerHTML = 'Number of rounds: ' + rounds;

            if(playerSelection === computerSelection){
                draw +=1;
                document.getElementById("draw").innerHTML = 'Draw: ' + draw;
                document.getElementById("result").innerHTML = 'Draw!';
            }else if (playerSelection === 'paper' && computerSelection === 'rock'){
                playerScore += 1;
                document.getElementById("player-score").innerHTML = 'Player score: ' + playerScore;
                document.getElementById("result").innerHTML = 'You won! Paper beats Rock';
            }else if (playerSelection === 'rock' && computerSelection === 'paper'){
                computerScore += 1;
                document.getElementById("computer-score").innerHTML = 'Computer score: ' + computerScore;
                document.getElementById("result").innerHTML = 'You Lose! Paper beats Rock';
            }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
                computerScore += 1;
                document.getElementById("computer-score").innerHTML = 'Computer score: ' + computerScore;
                document.getElementById("result").innerHTML = 'You lose! Rock beats Rock'
            }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
                playerScore += 1;
                document.getElementById("player-score").innerHTML = 'Player score: ' + playerScore;
                document.getElementById("result").innerHTML = 'You won! Rock beats Scissors'
            }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
                computerScore += 1;
                document.getElementById("computer-score").innerHTML = 'Computer score: ' + computerScore;
                document.getElementById("result").innerHTML = 'You lose Scissors beats Paper'
            }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
                playerScore += 1;
                document.getElementById("player-score").innerHTML = 'Player score: ' + playerScore;
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
            document.getElementById("final-result").innerHTML = ('congratulations! You won').toUpperCase()
        }else{
            document.getElementById("final-result").innerHTML = 'better luck next time'.toUpperCase();
        }
    }
}

//created 3 buttons with the corresponding player choice
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    getPlayerChoice = 'rock'
    game()
    rounds += 1;
});


paper.addEventListener('click', () => {
    getPlayerChoice = 'paper'
    game()
    rounds += 1;
});


scissors.addEventListener('click', () => {
    getPlayerChoice = 'scissors'
    game()
    rounds += 1;
});