/*
    We want to grab the innerText of a button
    Take 
*/

const div = document.querySelector('div');

const buttons = document.querySelectorAll('button');
const reset = document.getElementById('reset');

const results = document.getElementById('results');

const computerScore = document.getElementById('computer-score')
let compScore = Number(computerScore.innerText);

const playerScore = document.getElementById('player-score')
let playScore = Number(playerScore.innerText);

buttons.forEach(btn => btn.addEventListener('click', playerPlay))

reset.style.visibility = 'hidden';
reset.addEventListener('click', resetGame)

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    switch (randomChoice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

function playerPlay(e) {
    playRound(computerPlay(), e.srcElement.innerText)
}

function playRound(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        results.innerText = 'tie';
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        compScore += 1;
        computerScore.innerText = compScore;
        results.innerText = 'lose';
    } else {
        playScore += 1;
        playerScore.innerText = playScore;
        results.innerText = 'win';
    }

    if (compScore >= 5) {
        reset.style.visibility = 'visible';
        results.innerText = 'Computer Wins! Better luck next time!'
        buttons.forEach(btn => btn.disabled = true)
        reset.disabled = false
    } else if (playScore >= 5) {
        reset.style.visibility = 'visible';
        results.innerText = 'You Win! Congratulations!'
        buttons.forEach(btn => btn.disabled = true)
        reset.disabled = false
    }
}

function resetGame() {
    playScore = 0;
    playerScore.innerText = 0;
    compScore = 0;
    computerScore.innerText = 0;
    results.innerText = '';
    buttons.forEach(btn => btn.disabled = false)
    reset.style.visibility = 'hidden';
}

// function game() {
//     let computerScore = 0;
//     let playerScore = 0;

//     for (i = 0; i < 5; i++) {
//         let computer = computerPlay();
//         let player = playerPlay();

//         let result = playRound(computer, player);
//         if (result === 'tie') {
//             console.log(`YOU TIE! ${player} TIES ${computer}!\nScore: Computer: ${computerScore}\tPlayer: ${playerScore}`);
//         } else if (result === 'lose') {
//             computerScore++;
//             console.log(`YOU LOSE THE ROUND! ${computer} BEATS ${player}!\nScore: Computer: ${computerScore}\tPlayer: ${playerScore}`);
//         } else {
//             playerScore++;
//             console.log(`YOU WON THE ROUND! ${player} BEATS ${computer}!\nScore: Computer: ${computerScore}\tPlayer: ${playerScore}`);
//         }
//     }

//     return playerScore > computerScore ? `You win ${playerScore} to ${computerScore}`
//         : playerScore < computerScore ? `Computer wins ${computerScore} to ${playerScore}`
//             : `You tied ${computerScore} to ${playerScore}`;


//     // console.log(`Computer: ${computer}\nPlayer: ${player}`);
// }

// alert(game())