
// Variables //

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var yourGuesses = [];

    var wins = 0;
    var losses = 0;
    var chances = 9;
    


    var win = document.getElementById("winText");
    var lose = document.getElementById("loseText");
    var guessLeft = document.getElementById("chances");
    var userInputText = document.getElementById("userInput");
    var computerGuess = document.getElementById("computerGuess");
    
    


// Functions //

    document.onkeyup = function(event) {
        if ((chances > 0)) {
        var userInput = event.key;
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);

        if (userInput === computerChoice) {
            wins++;
            chances === 9;
            yourGuesses = [];
        } else {
            chances--
            yourGuesses.push(userInput);
        }

        if (chances === 0) {
            losses++;
            chances === 9;
            yourGuesses = [];
            
        }

        // Displaying wins, losses, guess left, and user's guess //

        win.textContent = "Wins: " + wins + ".";
        lose.textContent = "Losses: " + losses + ".";
        guessLeft.textContent ="Guesses left: " + chances;
        userInputText.textContent = "Your guesses so far: " + yourGuesses.join(",");
        }
    else {
        losses++
        chances = 9
        
    }
        


}
