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

function playerPlay() {
    return prompt("Rock, Paper or Scissors?").toUpperCase();
}

function playRound(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        return 'tie';
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        // return `YOU LOSE! ${computerSelection} BEATS ${playerSelection}!`;
        return 'lose';
    } else {
        return `win`;
        // return `YOU WIN! ${playerSelection} BEATS ${computerSelection}`;
    }

}


function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (i = 0; i <= 5; i++) {
        let computer = computerPlay();
        let player = playerPlay();

        let result = playRound(computer, player);
        if (result === 'tie') {
            console.log(`YOU TIE! ${player} TIES ${computer}!\nScore: Computer: ${computerScore}\tPlayer: ${playerScore}`);
        } else if (result === 'lose') {
            computerScore++;
            console.log(`YOU LOSE THE ROUND! ${computer} BEATS ${player}!\nScore: Computer: ${computerScore}\tPlayer: ${playerScore}`);
        } else {
            playerScore++;
            console.log(`YOU WON THE ROUND! ${player} BEATS ${computer}!\nScore: Computer: ${computerScore}\tPlayer: ${playerScore}`);
        }
    }

    let winner = playerScore > computerScore ? console.log('You win!') : console.log("You lose!")

    // console.log(`Computer: ${computer}\nPlayer: ${player}`);


}

console.log(game());