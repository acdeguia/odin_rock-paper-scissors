let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let getPlayerChoice = ''
let rounds = 1;

function getComputerChoice() {
    let array = ['rock', 'paper', 'scissors']
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}


function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice;
    document.getElementById("player-selection").innerHTML = 'Player: ' + playerSelection;

    computerSelection = getComputerChoice().toLowerCase();
    document.getElementById("computer-selection").innerHTML = 'Computer: ' + computerSelection;
    
    document.getElementById("number-of-rounds").innerHTML = 'Number of rounds: ' + rounds;

    if(playerSelection === computerSelection){
        draw +=1;
        document.getElementById("draw").innerHTML = 'Draw: ' + draw;
        return 'Draw!';
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore += 1;
        document.getElementById("player-score").innerHTML = 'Player score: ' + playerScore;
        return 'You won! Paper beats Rock';
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore += 1;
        document.getElementById("computer-score").innerHTML = 'Computer score: ' + computerScore;
        return 'You Lose! Paper beats Rock';
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore += 1;
        document.getElementById("computer-score").innerHTML = 'Computer score: ' + computerScore;
        return 'You lose! Rock beats Rock'
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore += 1;
        document.getElementById("player-score").innerHTML = 'Player score: ' + playerScore;
        return 'You won! Rock beats Scissors'
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore += 1;
        document.getElementById("computer-score").innerHTML = 'Computer score: ' + computerScore;
        return 'You lose Scissors beats Paper'
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore += 1;
        document.getElementById("player-score").innerHTML = 'Player score: ' + playerScore;
        return 'You won! Scissors beats Paper'
    }

 }
 
//  This function calls the playRound function inside of this to play 5 rounds and reports the winner at the end.

function game() {
    if(playerScore < 5 && computerScore < 5){
        playRound();
    }
}



let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let finalResult = document.querySelector("final-result")


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



