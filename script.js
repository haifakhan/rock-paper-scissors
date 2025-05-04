function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getHumanChoice() {
        const choice = prompt("Please enter your choice (rock, paper, scissors):");
        const choices = ["rock", "paper", "scissors"];
        if (choices.includes(choice)) {
            return choice;
        } else {
            console.log("Invalid choice. Please choose rock, paper, or scissors.");
            return null;
        }
    }

    function playRound(humanChoice, computerChoice) {
        if (!humanChoice) {
            console.log("No valid choice made. Round skipped.");
            return;
        }

        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("You win this round!");
            humanScore++;
        } else {
            console.log("Computer wins this round!");
            computerScore++;
        }

        rounds++;
        console.log(`Score after round ${rounds}: You - ${humanScore}, Computer - ${computerScore}`);
    }
    // play 5 games
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score: You - ${humanScore}, Computer - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Final Score: You - ${humanScore}, Computer - ${computerScore}`);
    } else {
        console.log(`It's a tie! Final Score: You - ${humanScore}, Computer - ${computerScore}`);
    }
}

playGame();