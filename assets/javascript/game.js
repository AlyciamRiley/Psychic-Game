// Declare variables
//=======================================================================
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var userGuess = 0;
var guessesRemaining = 9;
var wrongGuesses = [];
var computerGuess = 0;



//Functions
//===========================================================================

function startGame() {
    //random letter is chosed
    computerGuess =
        computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    //reset guesses back to 9
    guessesRemaining = 9;

    //updates HTML to reflect reset
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

    //wrong guesses are cleared
    wrongGuesses = [];

    //updates HTML to reflect reset
    document.getElementById("lettersGuessed").innerHTML = wrongGuesses;

};

function checkResults() {

    //user inputs guess 
    document.onkeyup = function () {
        userGuess = String.fromCharCode(event.keyCode).toLowerCase();




        //user guess is compared to computer guess      

        //incorrect guess
        if (userGuess != computerGuess) {
            alert("Try again!"); 

            //update number of guesses remaining
            guessesRemaining--;
            document.getElementById("guessesRemaining").innerHTML = guessesRemaining; 
        
            //update letters guessed
            wrongGuesses.push(userGuess);

            document.getElementById("lettersGuessed").innerHTML =
                wrongGuesses; 


            //testing
            console.log(userGuess);

        } else if ((userGuess == computerGuess)) {
            alert("You chose correctly!");
            //update win counter
            wins++;
            //update html
            document.getElementById("winCounter").innerHTML = wins;
            //restart game
            startGame();
            console.log(userGuess);

        }



        //guesses remaining counter goes down by 1 with each key input           
        if (guessesRemaining == 0) {
            alert("game over");
            losses++;
            document.getElementById("lossCounter").innerHTML = losses;
            startGame();

        }

     
    }


}




//Main Process - function is called
//==================================================================
startGame();
checkResults();
