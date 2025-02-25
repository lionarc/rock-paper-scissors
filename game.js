
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
    if (humanChoice == "Rock" && "Paper" && "Scissors") {
        return humanChoice
    } else {
        return "Error. Couldn't recognize your choice. Please try again!"
    }
}

function playRound() {
    getHumanChoice();
    getComputerChoice();
    if (humanChoice == computerChoice) {
        console.log("It's a tie. Nobody gets this rounds point.")
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("Congrats! User wins a point!")
        humanScore += 1;
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("Congrats! Computer wins a point!")
        computerScore += 1;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("Congrats! User wins a point!")
        humanScore += 1;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("Congrats! Computer wins a point!")
        computerScore += 1;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("Congrats! Computer wins a point!")
        computerScore += 1;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("Congrats! User wins a point!")
        humanScore += 1;
    }
}