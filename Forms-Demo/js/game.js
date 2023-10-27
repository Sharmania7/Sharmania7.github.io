// This is for two truths and a lie

let fname = ""; 

function greet(){
    let greetParagraph = document.getElementById("greet");

    // get values from form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    //show results
    greetParagraph.innerHTML = " Greetings " + age + " year old " + fname + "  " + lname;
    }

    //funciton fo tviia
function trivia(){
    let triviaAnswer = document.getElementById("trivia-answer");

    //get results
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // now process answers

    if (chocolateSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong. Chocolate addict. ";
    } else if (tunaSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong. Blud likes his rotten tuna.";
    } else {
        triviaAnswer.innerHTML = fname + ", you are correct. ";
    }
}

function game(){
    let gameAnswer = document.getElementById("game-answer");

    //get results
    let truth1selected = document.getElementById("truth1").checked;
    let lieSelected = document.getElementById("lie").checked;
    let truth2selected = document.getElementById("truth2").checked;

    // now process answers

    if (truth1selected){
        gameAnswer.innerHTML = fname + ", you are wrong, I am capable of playing good golf.";
    } else if (lieSelected){
        gameAnswer.innerHTML = fname + ", you are correct unfortunately. I could have won it at the last match of the szn but I doubled the last hole";
    } else {
        gameAnswer.innerHTML = fname + ", you are wrong, I live in Bellevue. ";
    }

}


