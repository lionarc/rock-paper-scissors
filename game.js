
let humanScore = 0;
let computerScore = 0;
let playerSelection = "";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper"
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection) {

    let computerChoice = getComputerChoice();

    console.log("PlayerSelection: " + playerSelection);
    console.log("Computer chooses: " + computerChoice);

    // Update player selection display
    document.getElementById('result').innerHTML = `
        <p>Player Selection: ${playerSelection}</p>
        <p>Computer Selection: ${computerChoice}</p>
    `;

    if (playerSelection === computerChoice) {
        console.log("It's a tie. Nobody gets this rounds point.")
        document.getElementById('result').innerHTML += `<p>It's a tie!</p>`;
    } else if (playerSelection === "Rock" && computerChoice === "Scissors") {
        console.log("Congrats! User wins a point!")
        humanScore++;
        document.getElementById('result').innerHTML += `<p>Congrats! You win this round!</p>`;
    } else if (playerSelection === "Rock" && computerChoice === "Paper") {
        console.log("Oh no! Computer wins a point!")
        computerScore++;
        document.getElementById('result').innerHTML += `<p>Computer wins this round!</p>`;
    } else if (playerSelection === "Paper" && computerChoice === "Rock") {
        console.log("Congrats! User wins a point!")
        humanScore++;
        document.getElementById('result').innerHTML += `<p>Congrats! You win this round!</p>`;
    } else if (playerSelection === "Paper" && computerChoice === "Scissors") {
        console.log("Oh no! Computer wins a point!")
        computerScore++;
        document.getElementById('result').innerHTML += `<p>Computer wins this round!</p>`;
    } else if (playerSelection === "Scissors" && computerChoice === "Rock") {
        console.log("Oh no! Computer wins a point!")
        computerScore++;
        document.getElementById('result').innerHTML += `<p>Computer wins this round!</p>`;
    } else if (playerSelection === "Scissors" && computerChoice === "Paper") {
        console.log("Congrats! User wins a point!")
        humanScore++;
        document.getElementById('result').innerHTML += `<p>Congrats! You win this round!</p>`;
    }
    console.log("User score: " + humanScore);
    console.log("Computer score: " + computerScore);
    
    checkForWinner();

    // Update scoreboard
    document.getElementById('human-score').textContent = humanScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function checkForWinner() {
    if (humanScore === 5) {
        document.getElementById('winner').innerHTML = `<p>Amazing!!! User wins the whole game.</p>`;
        console.log("Amazing!!! User wins the whole game.")
        resetGame();
    }
    else if (computerScore === 5) {
        document.getElementById('winner').innerHTML = `<p>Ok. Computer has won. Try again!</p>`;
        console.log("Ok. Computer has won. Try again!")
        resetGame();
    } else {
        document.getElementById('winner').innerHTML = ``;
}
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}