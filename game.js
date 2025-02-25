
let computerChoice = "";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            computerChoice = "Rock";
            return computerChoice;
        case 1:
            computerChoice = "Paper"
            return computerChoice;
        case 2:
            computerChoice = "Scissors";
            return computerChoice;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors – what's your choice?");
    if (humanChoice == "Rock" || "Paper" || "Scissors") {
        return humanChoice;
    } else {
        return "Error. Couldn't recognize your choice. Please try again!"
    }
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1).toLowerCase();
}

function playRound() {
    humanChoice = capitalizeFirstLetter(getHumanChoice());
    computerChoice = getComputerChoice();
    console.log("User chooses: " + humanChoice);
    console.log("Computer chooses: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie. Nobody gets this rounds point.")
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("Congrats! User wins a point!")
        humanScore += 1;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("Oh no! Computer wins a point!")
        computerScore += 1;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Congrats! User wins a point!")
        humanScore += 1;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("Oh no! Computer wins a point!")
        computerScore += 1;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("Oh no! Computer wins a point!")
        computerScore += 1;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("Congrats! User wins a point!")
        humanScore += 1;
    }
    console.log("User score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i);
        playRound();
    }
    if (humanScore > computerScore) {
        console.log("Amazing!!! User wins the whole game.")
    } else if (computerScore > humanScore) {
        console.log("Ok. Computer has won. Try again!")
    } else {
        console.log("It's a tie")
    }
}