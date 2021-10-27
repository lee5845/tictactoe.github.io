function removeStart() // code from w3schools
{
    document.getElementById("start").style.display = "none";
}

function playAgain()
{
    document.getElementById("playAgain").style.display = "block";
    document.getElementById("board").style.display = "block";
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("buttonPlayAgain").style.display = "none";
}

/* plan for ticTacToe
() make 2 variable one X one O
() a boolean to decide if the turn is currently X or O
() start with X
() after you click a button while you are X change button id to X so next
   button click is an O
() repeat until 3 buttons = X or O
*/


var limit = 0;
var b1 = 0;
var b2 = 0;
var b3 = 0;
var b4 = 0;
var b5 = 0;
var b6 = 0;
var b7 = 0;
var b8 = 0;
var b9 = 0;
var xWin;
var oWin;
var tie;

function againYes()
{
    limit = 0;
    b1 = 0;
    b2 = 0;
    b3 = 0;
    b4 = 0;
    b5 = 0;
    b6 = 0;
    b7 = 0;
    b8 = 0;
    b9 = 0;
    document.getElementById("pbutton1").src = "img/button.jpg";
    document.getElementById("pbutton2").src = "img/button.jpg";
    document.getElementById("pbutton3").src = "img/button.jpg";
    document.getElementById("pbutton4").src = "img/button.jpg";
    document.getElementById("pbutton5").src = "img/button.jpg";
    document.getElementById("pbutton6").src = "img/button.jpg";
    document.getElementById("pbutton7").src = "img/button.jpg";
    document.getElementById("pbutton8").src = "img/button.jpg";
    document.getElementById("pbutton9").src = "img/button.jpg";
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
}

function againNo()
{
    document.getElementById("board").style.display = "none";
    document.getElementById("gameOver").style.display="block";
    document.getElementById("playAgain").style.display="block";
    document.getElementById("buttonPlayAgain").style.display="block";

    limit = 0;
    b1 = 0;
    b2 = 0;
    b3 = 0;
    b4 = 0;
    b5 = 0;
    b6 = 0;
    b7 = 0;
    b8 = 0;
    b9 = 0;
    document.getElementById("pbutton1").src = "img/button.jpg";
    document.getElementById("pbutton2").src = "img/button.jpg";
    document.getElementById("pbutton3").src = "img/button.jpg";
    document.getElementById("pbutton4").src = "img/button.jpg";
    document.getElementById("pbutton5").src = "img/button.jpg";
    document.getElementById("pbutton6").src = "img/button.jpg";
    document.getElementById("pbutton7").src = "img/button.jpg";
    document.getElementById("pbutton8").src = "img/button.jpg";
    document.getElementById("pbutton9").src = "img/button.jpg";
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
}

function playAgainX()//function playAgain is from w3schools I modified a bit so I can use it
{
    if (confirm("X Wins! Do You Wish To Play Again?"))
    {
        xWin = againYes();
    }
    else {
        xWin = againNo();
    }
}


function playAgainO()
{
    if (confirm("O Wins! Do You Wish To Play Again?"))
    {
        oWin = againYes();
    }
    else {
        oWin = againNo();
    }
}

function playAgainTie()
{
    if (confirm("Tie Game! Do You Wish To Play Again?"))
    {
        tie = againYes();
    }
    else {
        tie = againNo();
    }
}

function checkWinsO()
{
    if(b1 === true && b2 === true && b3 === true)
    {
        playAgainO();
    }
    else if(b4 === true && b5 === true && b6 === true)
    {
        playAgainO();
    }
    else if(b7 === true && b8 === true && b9 === true)
    {
        playAgainO();
    }
    else if(b1 === true && b4 === true && b7 === true)
    {
        playAgainO();
    }
    else if(b2 === true && b5 === true && b8 === true)
    {
        playAgainO();
    }
    else if(b3 === true && b6 === true && b9 === true)
    {
        playAgainO();
    }
    else if(b1 === true && b5 === true && b9 === true)
    {
        playAgainO();
    }
    else if(b3 === true && b5 === true && b7 === true)
    {
        playAgainO();
    }
}

function checkWinsX()
{
    if(b1 === false && b2 === false && b3 === false)
    {
        playAgainX();
    }
    else if(b4 === false && b5 === false && b6 === false)
    {
        playAgainX();
    }
    else if(b7 === false && b8 === false && b9 === false)
    {
        playAgainX();
    }
    else if(b1 === false && b4 === false && b7 === false)
    {
        playAgainX();
    }
    else if(b2 === false && b5 === false && b8 === false)
    {
        playAgainX();
    }
    else if(b3 === false && b6 === false && b9 === false)
    {
        playAgainX();
    }
    else if(b1 === false && b5 === false && b9 === false)
    {
        playAgainX();
    }
    else if(b3 === false && b5 === false && b7 === false)
    {
        playAgainX();
    }
    else if(limit == 9)
    {
        playAgainTie()
    }
}


// Logic For Buttons
function button1Count()
{
    /*b1 = true;
    limit = limit + 1;
    if(b1 = true)
    {
        document.getElementById("button1").style.display = "none";
    }
    return(limit);*/

    if(limit == 0)
    {
        b1 = true;
        checkWinsO();
        checkWinsX();
        document.getElementById("button1").disabled = true; // code from w3schools
        document.getElementById("pbutton1").src = "img/whiteO.png";
        limit = limit + 1;

        return("1"+ b1 + " " + limit)
    }
    else if(limit == 1)
    {
        b1 = false;
        limit = limit + 1;
        checkWinsO();
        checkWinsX();
        document.getElementById("button1").disabled = true;
        document.getElementById("pbutton1").src = "img/whiteX.jpg";
        return("1" + b1 + " " + limit)
    }
    else if(limit == 2)
    {
        b1 = true;
        limit = limit+1;
        checkWinsO();
        checkWinsX();
        document.getElementById("button1").disabled = true;
        document.getElementById("pbutton1").src = "img/whiteO.png";
        return("1t" + " " + limit)
    }
    else if (limit == 3)
    {
        b1 = false;
        limit = limit + 1;
        document.getElementById("button1").disabled = true;
        document.getElementById("pbutton1").src = "img/whiteX.jpg";
        checkWinsO();
        return("1f" + " " + limit)
    }
    else if (limit == 4)
    {
        b1 = true;
        limit = limit+1;
        document.getElementById("button1").disabled = true;
        document.getElementById("pbutton1").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("1t" + " " + limit)
    }
    else if (limit == 5)
    {
        b1 = false;
        checkWinsO();
        limit = limit + 1;
        document.getElementById("button1").disabled = true;
        document.getElementById("pbutton1").src = "img/whiteX.jpg";
        checkWinsO();
        checkWinsX();
        return("1f" + " " + limit)
    }
    else if (limit == 6)
    {
        b1 = true;

        limit = limit+1;
        document.getElementById("button1").disabled = true;
        document.getElementById("pbutton1").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("1t" + " " + limit)
    }
    else if (limit == 7)
    {
        b1 = false;
        limit = limit + 1;
        document.getElementById("button1").disabled = true;
        document.getElementById("pbutton1").src = "img/whiteX.jpg";
        checkWinsO();
        checkWinsX();
        return("1f" + " " + limit)
    }
    else if (limit == 8)
    {
        b1 = true;
        limit = limit+1;
        document.getElementById("button1").disabled = true;
        document.getElementById("pbutton1").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("1t" + " " + limit)
    }
}

function button2Count()
{
    if(limit == 0)
    {
        b2 = true;
        limit = limit + 1;
        document.getElementById("button2").disabled = true;
        document.getElementById("pbutton2").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("2" + b2 + " " + limit)

    }
    else if(limit == 1)
    {
        b2 = false;
        limit = limit+1;
        document.getElementById("button2").disabled = true;
        document.getElementById("pbutton2").src = "img/whiteX.jpg";
        checkWinsO();
        checkWinsX();
        return("2"+ b2 + " " + limit)
    }
    else if(limit == 2)
    {
        b2 = true;
        limit = limit + 1;
        document.getElementById("button2").disabled = true;
        document.getElementById("pbutton2").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("2" + b2 + " " + limit)
    }
    else if (limit == 3)
    {
        b2 = false;
        limit = limit+1;
        document.getElementById("button2").disabled = true;
        document.getElementById("pbutton2").src = "img/whiteX.jpg";
        checkWinsO();
        checkWinsX();
        return("2"+ b2 + " " + limit)
    }
    else if (limit == 4)
    {
        b2 = true;
        limit = limit + 1;
        document.getElementById("button2").disabled = true;
        document.getElementById("pbutton2").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("2" + b2 + " " + limit)
    }
    else if (limit == 5)
    {
        b2 = false;
        limit = limit+1;
        document.getElementById("button2").disabled = true;
        document.getElementById("pbutton2").src = "img/whiteX.jpg";
        checkWinsO();
        checkWinsX();
        return("2"+ b2 + " " + limit)
    }
    else if (limit == 6)
    {
        b2 = true;
        limit = limit + 1;
        document.getElementById("button2").disabled = true;
        document.getElementById("pbutton2").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("2" + b2 + " " + limit)
    }
    else if (limit == 7)
    {
        b2 = false;
        limit = limit+1;
        document.getElementById("button2").disabled = true;
        document.getElementById("pbutton2").src = "img/whiteX.jpg";
        checkWinsO();
        checkWinsX();
        return("2"+ b2 + " " + limit)
    }
    else if (limit == 8)
    {
        b2 = true;
        limit = limit + 1;
        document.getElementById("button2").disabled = true;
        document.getElementById("pbutton2").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("2" + b2 + " " + limit)
    }
}

function button3Count()
{
    if(limit == 0)
    {
        b3 = true;
        limit = limit + 1;
        document.getElementById("button3").disabled = true;
        document.getElementById("pbutton3").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("3" + b3 + " " + limit)
    }
    else if(limit == 1)
    {
        b3 = false;
        limit = limit+1;
        document.getElementById("button3").disabled = true;
        document.getElementById("pbutton3").src = "img/whiteX.jpg";
        checkWinsO();
        checkWinsX();
        return("3"+ b3 + " " + limit)
    }
    else if(limit == 2)
    {
        b3 = true;
        limit = limit + 1;
        document.getElementById("button3").disabled = true;
        document.getElementById("pbutton3").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("3" + b3 + " " + limit)
    }
    else if (limit == 3)
    {
        b3 = false;
        limit = limit+1;
        document.getElementById("button3").disabled = true;
        document.getElementById("pbutton3").src = "img/whiteX.jpg";
        checkWinsO();
        checkWinsX();
        return("3"+ b3 + " " + limit)
    }
    else if (limit == 4)
    {
        b3 = true;
        limit = limit + 1;
        document.getElementById("button3").disabled = true;
        document.getElementById("pbutton3").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("3" + b3 + " " + limit)
    }
    else if (limit == 5)
    {
        b3 = false;
        limit = limit+1;
        document.getElementById("button3").disabled = true;
        document.getElementById("pbutton3").src = "img/whiteX.jpg";
        checkWinsO();
        checkWinsX();
        return("3"+ b3 + " " + limit)
    }
    else if (limit == 6)
    {
        b3 = true;
        limit = limit + 1;
        document.getElementById("button3").disabled = true;
        document.getElementById("pbutton3").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("3" + b3 + " " + limit)
    }
    else if (limit == 7)
    {
        b3 = false;
        limit = limit+1;
        document.getElementById("button3").disabled = true;
        document.getElementById("pbutton3").src = "img/whiteX.jpg";
        checkWinsO();
        checkWinsX();
        return("3"+ b3 + " " + limit)
    }
    else if (limit == 8)
    {
        b3 = true;
        limit = limit + 1;
        document.getElementById("button3").disabled = true;
        document.getElementById("pbutton3").src = "img/whiteO.png";
        checkWinsO();
        checkWinsX();
        return("3" + b3 + " " + limit)
    }
}

function button4Count()
{
    if(limit == 0)
    {
        b4 = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("pbutton4").src = "img/whiteO.png";
        limit = limit + 1;
        checkWinsO();
        checkWinsX();
        return("1"+ b4 + " " + limit)
    }
    else if(limit == 1)
    {
        b4 = false;
        limit = limit + 1;
        document.getElementById("button4").disabled = true;
        document.getElementById("pbutton4").src = "img/whiteX.jpg";
        checkWinsO();
        checkWinsX();
        return("4" + b4 + " " + limit)
    }
    else if(limit == 2)
    {
        b4 = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("pbutton4").src = "img/whiteO.png";
        limit = limit + 1;
        checkWinsO();checkWinsX();
        return("1"+ b4 + " " + limit)
    }
    else if (limit == 3)
    {
        b4 = false;
        limit = limit + 1;
        document.getElementById("button4").disabled = true;
        document.getElementById("pbutton4").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("4" + b4 + " " + limit)
    }
    else if (limit == 4)
    {
        b4 = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("pbutton4").src = "img/whiteO.png";
        limit = limit + 1;
        checkWinsO();checkWinsX();
        return("1"+ b4 + " " + limit)
    }
    else if (limit == 5)
    {
        b4 = false;
        limit = limit + 1;
        document.getElementById("button4").disabled = true;
        document.getElementById("pbutton4").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("4" + b4 + " " + limit)
    }
    else if (limit == 6)
    {
        b4 = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("pbutton4").src = "img/whiteO.png";
        limit = limit + 1;
        checkWinsO();checkWinsX();
        return("1"+ b4 + " " + limit)
    }
    else if (limit == 7)
    {
        b4 = false;
        limit = limit + 1;
        document.getElementById("button4").disabled = true;
        document.getElementById("pbutton4").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("4" + b4 + " " + limit)
    }
    else if (limit == 8)
    {
        b4 = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("pbutton4").src = "img/whiteO.png";
        limit = limit + 1;
        checkWinsO();checkWinsX();
        return("1"+ b4 + " " + limit)
    }
}

function button5Count()
{
    if(limit == 0)
    {
        b5 = true;
        document.getElementById("button5").disabled = true;
        document.getElementById("pbutton5").src = "img/whiteO.png";
        limit = limit + 1;
        checkWinsO();checkWinsX();
        return("5"+ b5 + " " + limit)
    }
    else if(limit == 1)
    {
        b5 = false;
        limit = limit + 1;
        document.getElementById("button5").disabled = true;
        document.getElementById("pbutton5").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("5f" + " " + limit)
    }
    else if(limit == 2)
    {
        b5 = true;
        limit = limit+1;
        document.getElementById("button5").disabled = true;
        document.getElementById("pbutton5").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("5t" + " " + limit)
    }
    else if (limit == 3)
    {
        b5 = false;
        limit = limit + 1;
        document.getElementById("button5").disabled = true;
        document.getElementById("pbutton5").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("5f" + " " + limit)
    }
    else if (limit == 4)
    {
        b5 = true;
        limit = limit+1;
        document.getElementById("button5").disabled = true;
        document.getElementById("pbutton5").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("5t" + " " + limit)
    }
    else if (limit == 5)
    {
        b5 = false;
        limit = limit + 1;
        document.getElementById("button5").disabled = true;
        document.getElementById("pbutton5").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("5f" + " " + limit)
    }
    else if (limit == 6)
    {
        b5 = true;
        limit = limit+1;
        document.getElementById("button5").disabled = true;
        document.getElementById("pbutton5").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("5t" + " " + limit)
    }
    else if (limit == 7)
    {
        b5 = false;
        limit = limit + 1;
        document.getElementById("button5").disabled = true;
        document.getElementById("pbutton5").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("5f" + " " + limit)
    }
    else if (limit == 8)
    {
        b5 = true;
        limit = limit+1;
        document.getElementById("button5").disabled = true;
        document.getElementById("pbutton5").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("5t" + " " + limit)
    }
}

function button6Count()
{
    if(limit == 0)
    {
        b6 = true;
        limit = limit+1;
        document.getElementById("button6").disabled = true;
        document.getElementById("pbutton6").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("6t" + " " + limit)
    }
    else if(limit == 1)
    {
        b6 = false;
        limit = limit + 1;
        document.getElementById("button6").disabled = true;
        document.getElementById("pbutton6").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("6f" + " " + limit)
    }
    else if(limit == 2)
    {
        b6 = true;
        limit = limit+1;
        document.getElementById("button6").disabled = true;
        document.getElementById("pbutton6").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("6t" + " " + limit)
    }
    else if (limit == 3)
    {
        b6 = false;
        limit = limit + 1;
        document.getElementById("button6").disabled = true;
        document.getElementById("pbutton6").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("6f" + " " + limit)
    }
    else if (limit == 4)
    {
        b6 = true;
        limit = limit+1;
        document.getElementById("button6").disabled = true;
        document.getElementById("pbutton6").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("6t" + " " + limit)
    }
    else if (limit == 5)
    {
        b6 = false;
        limit = limit + 1;
        document.getElementById("button6").disabled = true;
        document.getElementById("pbutton6").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("6f" + " " + limit)
    }
    else if (limit == 6)
    {
        b6 = true;
        limit = limit+1;
        document.getElementById("button6").disabled = true;
        document.getElementById("pbutton6").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("6t" + " " + limit)
    }
    else if (limit == 7)
    {
        b6 = false;
        limit = limit + 1;
        document.getElementById("button6").disabled = true;
        document.getElementById("pbutton6").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("6f" + " " + limit)
    }
    else if (limit == 8)
    {
        b6 = true;
        limit = limit+1;
        document.getElementById("button6").disabled = true;
        document.getElementById("pbutton6").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("1t" + " " + limit)
    }
}

function button7Count()
{
    if(limit == 0)
    {
        b7 = true;
        limit = limit + 1;
        document.getElementById("button7").disabled = true;
        document.getElementById("pbutton7").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("7" + b7 + " " + limit)
    }
    else if(limit == 1)
    {
        b7 = false;
        limit = limit+1;
        document.getElementById("button7").disabled = true;
        document.getElementById("pbutton7").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("7"+ b7 + " " + limit)
    }
    else if(limit == 2)
    {
        b7 = true;
        limit = limit + 1;
        document.getElementById("button7").disabled = true;
        document.getElementById("pbutton7").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("7" + b7 + " " + limit)
    }
    else if (limit == 3)
    {
        b7 = false;
        limit = limit+1;
        document.getElementById("button7").disabled = true;
        document.getElementById("pbutton7").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("7"+ b7 + " " + limit)
    }
    else if (limit == 4)
    {
        b7 = true;
        limit = limit + 1;
        document.getElementById("button7").disabled = true;
        document.getElementById("pbutton7").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("7" + b7 + " " + limit)
    }
    else if (limit == 5)
    {
        b7 = false;
        limit = limit+1;
        document.getElementById("button7").disabled = true;
        document.getElementById("pbutton7").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("7"+ b7 + " " + limit)
    }
    else if (limit == 6)
    {
        b7 = true;
        limit = limit + 1;
        document.getElementById("button7").disabled = true;
        document.getElementById("pbutton7").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("7" + b7 + " " + limit)
    }
    else if (limit == 7)
    {
        b7 = false;
        limit = limit+1;
        document.getElementById("button7").disabled = true;
        document.getElementById("pbutton7").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("7"+ b7 + " " + limit)
    }
    else if (limit == 8)
    {
        b7 = true;
        limit = limit + 1;
        document.getElementById("button7").disabled = true;
        document.getElementById("pbutton7").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("7" + b7 + " " + limit)
    }
}
function button8Count()
{
    if(limit == 0)
    {
        b8 = true;
        limit = limit + 1;
        document.getElementById("button8").disabled = true;
        document.getElementById("pbutton8").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("8" + b8 + " " + limit)
    }
    else if(limit == 1)
    {
        b8 = false;
        limit = limit+1;
        document.getElementById("button8").disabled = true;
        document.getElementById("pbutton8").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("8"+ b8 + " " + limit)
    }
    else if(limit == 2)
    {
        b8 = true;
        limit = limit + 1;
        document.getElementById("button8").disabled = true;
        document.getElementById("pbutton8").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("8" + b8 + " " + limit)
    }
    else if (limit == 3)
    {
        b8 = false;
        limit = limit+1;
        document.getElementById("button8").disabled = true;
        document.getElementById("pbutton8").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("8"+ b8 + " " + limit)
    }
    else if (limit == 4)
    {
        b8 = true;
        limit = limit + 1;
        document.getElementById("button8").disabled = true;
        document.getElementById("pbutton8").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("8" + b8 + " " + limit)
    }
    else if (limit == 5)
    {
        b8 = false;
        limit = limit+1;
        document.getElementById("button8").disabled = true;
        document.getElementById("pbutton8").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("8"+ b8 + " " + limit)
    }
    else if (limit == 6)
    {
        b8 = true;
        limit = limit + 1;
        document.getElementById("button8").disabled = true;
        document.getElementById("pbutton8").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("8" + b8 + " " + limit)
    }
    else if (limit == 7)
    {
        b8 = false;
        limit = limit+1;
        document.getElementById("button8").disabled = true;
        document.getElementById("pbutton8").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("8"+ b8 + " " + limit)
    }
    else if (limit == 8)
    {
        b8 = true;
        limit = limit + 1;
        document.getElementById("button8").disabled = true;
        document.getElementById("pbutton8").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("8" + b8 + " " + limit)
    }
}

function button9Count()
{
    if(limit == 0)
    {
        b9 = true;
        limit = limit + 1;
        document.getElementById("button9").disabled = true;
        document.getElementById("pbutton9").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("9" + b9 + " " + limit)
    }
    else if(limit == 1)
    {
        b9 = false;
        limit = limit+1;
        document.getElementById("button9").disabled = true;
        document.getElementById("pbutton9").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("9"+ b9 + " " + limit)
    }
    else if(limit == 2)
    {
        b9 = true;
        limit = limit + 1;
        document.getElementById("button9").disabled = true;
        document.getElementById("pbutton9").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("9" + b9 + " " + limit)
    }
    else if (limit == 3)
    {
        b9 = false;
        limit = limit+1;
        document.getElementById("button9").disabled = true;
        document.getElementById("pbutton9").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("9"+ b9 + " " + limit)
    }
    else if (limit == 4)
    {
        b9 = true;
        limit = limit + 1;
        document.getElementById("button9").disabled = true;
        document.getElementById("pbutton9").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("9" + b9 + " " + limit)
    }
    else if (limit == 5)
    {
        b9 = false;
        limit = limit+1;
        document.getElementById("button9").disabled = true;
        document.getElementById("pbutton9").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("9"+ b9 + " " + limit)
    }
    else if (limit == 6)
    {
        b9 = true;
        limit = limit + 1;
        document.getElementById("button9").disabled = true;
        document.getElementById("pbutton9").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("9" + b9 + " " + limit)
    }
    else if (limit == 7)
    {
        b9 = false;
        limit = limit+1;
        document.getElementById("button9").disabled = true;
        document.getElementById("pbutton9").src = "img/whiteX.jpg";
        checkWinsO();checkWinsX();
        return("9"+ b9 + " " + limit)
    }
    else if (limit == 8)
    {
        b9 = true;
        limit = limit + 1;
        document.getElementById("button9").disabled = true;
        document.getElementById("pbutton9").src = "img/whiteO.png";
        checkWinsO();checkWinsX();
        return("9" + b9 + " " + limit)
    }
}