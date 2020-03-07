

/*****
* Get the user value;
*Generate the random number 1 to 100 and save it in variable
*Create  the too high,too low or win display the message
*save the guess history result
*restart the game
*/



//Variable for store the correct random number
let correctNumber = getRandomNumber();

//Variable to store the list of guesses
let guesses = [];


window.onload  = function(){
    document.getElementById('number-submit').addEventListener('click',playGame);
    document.getElementById('number-reset').addEventListener('click',initGame);
    
    
}



//Functionality for playing the game
function playGame(){
   let numberGuess =  document.getElementById("number-guess").value;
   console.log(numberGuess);
   document.getElementById("number-guess").value="";
   displayNumber(numberGuess);
   saveGuesshistory(numberGuess);
}


//Generate the random Number
//Return the random Number between 1 and 100
function getRandomNumber(){

    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1;
    return wholeNumber;

}

//Disnplay result 
function displayNumber(numberGuess){
    if(numberGuess > correctNumber){
        showNumberHigh();
    }else if(numberGuess < correctNumber){
        showNumberBelow();
    }else if(numberGuess == correctNumber){
        showWonMsg();
    }
}

//Game initialize a new gmae reset all values
function initGame(){
    //Reset the correctNumber
    correctNumber = getRandomNumber();
    //Reset the result display
    document.getElementById("result").innerHTML = "";
    //Rest the guesses arry
    guesses = [];
    //Reset the guss history display
    displayhistory();
   

}


//Display guess history to user
function displayhistory(){
let index = guesses.length-1;
let list = "<ul class='list-group'>";

while(index >=0){
    list += "<li class='list-group-item'></li>"+ " You guessed " + guesses[index] +"</li>";
    index -=1;
}
list +='</ul>';
document.getElementById("history").innerHTML = list;
}


//Show diaglog Text
function getDiaglog(dialogType,text){
    let dialog;
    switch(dialogType){
        case "warning":
            dialog ="<div class='alert alert-warning'>"
            break;
            case "won":
                dialog ="<div class='alert alert-warning'>"
                break;
    }
    dialog += text;
    dialog +="</div>"
    return dialog;
}


//Show Won Message
function showWonMsg(){
    const text = "Awesome job,you got it!";
    let dialog = getDiaglog('won',text);
    document.getElementById("result").innerHTML = dialog;
}

//Show the High Number
function showNumberHigh(){
    const text = "Your guess is to high!";
    let dialog = getDiaglog('warning',text);
    document.getElementById("result").innerHTML = dialog;
}
//Show the Low Number
function showNumberBelow(){
    const text = "Your guess is to Low!";
    let dialog = getDiaglog('warning',text);
    document.getElementById("result").innerHTML = dialog;
}

//show the guess variable
function saveGuesshistory(guess){

    //Put guess in guesses variable
    guesses.push(guess);
    displayhistory();
   
}