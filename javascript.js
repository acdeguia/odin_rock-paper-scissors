let playerSelection;
let computerSelection;
let userScore = 0;
let computerScore = 0;
let draw = 0;

function getComputerChoice() {
    let array = ['rock', 'paper', 'scissors']
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}

function getPlayerChoice(){
    const playerChoice = prompt('Choose between rock paper scissors');
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = getPlayerChoice().toLowerCase();
    console.log(playerSelection);

    computerSelection = getComputerChoice().toLowerCase();
    console.log(computerSelection);

    if(playerSelection === computerSelection){
        draw +=1;
        return 'Draw!';
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        userScore += 1;
        return 'You won! Paper beats Rock';
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore += 1;
        return 'You Lose! Paper beats Rock';
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore += 1;
        return 'You lose! Rock beats Rock'
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        userScore += 1;
        return 'You won! Rock beats Scissors'
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore += 1;
        return 'You lose Scissors beats Paper'
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        userScore += 1;
        return 'You won! Scissors beats Paper'
    }
 }
 
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log('Player Score: ' + userScore);
    console.log('Computer Score: ' + computerScore);
    console.log('Draw:' + draw);

    if(userScore > computerScore){
        return('congratulations!').toUpperCase()
    }else{
        return 'better luck next time'.toUpperCase();
    }
}

console.log(game());