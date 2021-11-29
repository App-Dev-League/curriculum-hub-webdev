var coinFlipScore = 0;
var rockPaperScissorsScore = 0;

function madLibs(adj, noun1, verb, noun2) {
    return `The ${adj} ${noun1} ${verb} over the ${noun2}.`;
}

function rockPaperScissors(userChoice) {
    userChoice = userChoice.toLowerCase();

    if(!["rock", "paper", "scissors"].includes(userChoice)) {
        return "Invalid option. Must be \"rock\", \"paper\", or \"scissors\".";
    }

    var randomNumber = Math.floor(Math.random() * 3);
    var computerChoice;
    if (randomNumber === 2) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    var winner;
    if(userChoice === computerChoice) {
        winner = null
    }
    else if(userChoice === "rock") {
        if(computerChoice === "paper") {
            winner = "computer";
        } else {
            winner = "user";
            rockPaperScissorsScore++;
        }
    } 
    else if(userChoice === "paper") {
        if(computerChoice === "scissors") {
            winner = "computer";
        } else {
            winner = "user";
            rockPaperScissorsScore++;
        }
    } 
    else {
        if(computerChoice === "rock") {
            winner = "computer";
        } else {
            winner = "user";
            rockPaperScissorsScore++;
        }
    }

    return `The user chose ${userChoice}, and the computer chose ${computerChoice}, so the winner is the ${winner ?? "no one"} and your score is ${rockPaperScissorsScore}.`;
}

function coinFlip(userChoice) {
    userChoice = userChoice.toLowerCase();

    if(!["heads", "tails"].includes(userChoice)) {
        return "Invalid option. Must be \"head\" or \"tails\".";
    }

    var winner;
    var computerChoice = Math.floor(Math.random() * 2) === 0 ? "heads" : "tails";
    if(userChoice == computerChoice) {;
        winner = "user";
        coinFlipScore++;
    } else {
        winner = "computer";
    }

    return `The user chose ${userChoice}, and the computer chose ${computerChoice}, so the winner is ${winner} and your score is ${coinFlipScore}.`;
}