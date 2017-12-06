

// declare variablessss



// 1. Computer must generate random letter


    var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var wins = 0;
    var losses = 0;
    //var letterIndex = ;
    var guessesRemaining = 9;
    
    

newRound();

   
function newRound() {
//1
    var computerGuess = 
     computerChoices[Math.floor(Math.random() * computerChoices.length)];
     console.log(computerGuess);


// 2. User must choose first letter 


document.onkeyup = function(event) {
    var userGuess = 
        String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);
  
//var winsContainer = document.getElementById('wins);

// 3. Compare first guess with computer guess


    if ((userGuess == computerGuess)) {
        alert("You win!");
        wins++;
        
    } else {
        alert("Try again!");
    }

}

   
    
newRound(); 
}
   




    // a. If it's correct
        // wins goes up by 1 
        //code starts over
    // b. If its incorrect
        // User guess is logged under "Letters Guessed"
            //letterIndex++
        // Number of guesses remaining goes down by 1

    



// 4. Code repeats 9 times
// 5. If user doesn't guess within 9 guesses    
    // losses goes up by 1
    // Code starts over







    

