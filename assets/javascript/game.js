






//Results need to be displayed
//var wins = 0;
//var losses = 0;
//var guessesLeft = 0;



var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

 var computerGuess = 
     alphabet[Math.floor(Math.random() * alphabet.length)]
 console.log(computerGuess);

    document.onkeyup = function() {
    var userguess = 
        String.fromCharCode(event.keyCode).toLowerCase();
    

 


   if (userguess == computerGuess) {
     alert("You win!");
 
    }  if (userguess != computerGuess) {
        alert("You lose!");
    }
    }


/*//computer randomly generates a letter 
var computerGuess = 
     alphabet[Math.floor(Math.random() * alphabet.length)]
console.log(computerGuess);

//user picks a letter
document.onkeyup = function() {
    var userguess = 
    String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userguess);

//compare results
   

  
   if ((userguess != computerGuess)) {
       alert("Try again!");
   }*/
    
//track number of guesses
    //for loop? 
    
//After 9 tries, user loses. 
 



//display results
    //var html = "<h2>Guess which letter I'm thinking of! <h2>" +
        //"<p>wins: " + wins + "</p>" +
        //"<p>Losses: " + losses + "</p>" +
       // "<p>guessesLeft: " + guessesLeft + "</p>";
    
    //document.querySelector('#game').innerHTML = html;
    
//}
    
 