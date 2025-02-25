
let computerChoice = "";

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