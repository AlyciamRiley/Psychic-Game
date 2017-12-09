// Declare variables
//=======================================================================
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
//var letterIndex = ;
var guessesRemaining = 9;
var lettersGuessed = [];
var computerGuess = 0;



//Functions
//===========================================================================

function startGame() {
    computerGuess =
        computerChoices[Math.floor(Math.random() * computerChoices.length)];


    //reset
    guessesLeft = 9;
    lettersGuessed = "";
};

function gameContinues() {
    //user inputs guess 
    document.onkeyup = function () {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        console.log(userGuess);

        //user guess is compared to computer guess            

        if ((userGuess != computerGuess)) {
            alert("Try again!");
            guessesRemaining--;
            document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

        }

        if ((userGuess == computerGuess)) {
            alert("You chose correctly!");
            wins++;
            document.getElementById("winCounter").innerHTML = wins;

        }0
        //guesses remaining counter goes down by 1 with each key input           
        if ((guessesRemaining == 0)) {
            alert("game over");
            losses++;
            document.getElementById("lossCounter").innterHTML = losses;


        }

    }
    console.log(computerGuess);
//setting floor- when it hits floor, starts over (validation)


};

//checking / debugging
//====================================================================================


//Main Process - function is called
//==================================================================
startGame();
gameContinues();

//HTML updates to reflect changes
//====================================================================
document.getElementById("lettersGuessed").innerHTML = lettersGuessed;



