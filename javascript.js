let playerSelection;
let computerSelection;
let userScore = 0;
let computerScore = 0;
let draw = 0;
let getPlayerChoice = ''

const result = document.querySelector('result')


function getComputerChoice() {
    let array = ['rock', 'paper', 'scissors']
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}

//this function prompts the user to choose between rock, paper or scissors.

// function getPlayerChoice(){
//     const playerChoice = prompt('Choose between rock paper scissors');
//     return playerChoice;
// }

//this function plays a single round of rock, paper, scissors using if else loop. And it also declares the winner at the end.

function playRound(playerSelection, computerSelection) {

    playerSelection = getPlayerChoice.toLowerCase();
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
 
//  This function calls the playRound function inside of this to play 5 rounds and reports the winner at the end.

// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     console.log('Player Score: ' + userScore);
//     console.log('Computer Score: ' + computerScore);
//     console.log('Draw:' + draw);

//     if(userScore > computerScore){
//         return('congratulations! You won').toUpperCase()
//     }else{
//         return 'better luck next time'.toUpperCase();
//     }
// }

// console.log(game());


// console.log(playRound(playerSelection, computerSelection));


let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    getPlayerChoice = 'rock'
    console.log(playRound())
    
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    getPlayerChoice = 'paper'
    console.log(playRound())
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    getPlayerChoice = 'scissors'
    console.log(playRound())
});


