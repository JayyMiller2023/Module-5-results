function DiceRoll() {
    var roll1 = Math.ceil(Math.random() *6)
    var roll2 = Math.ceil(Math.random() *6)
    var roll3 = Math.ceil(Math.random() *6)
    var roll4 = Math.ceil(Math.random() *6)
    var roll5 = Math.ceil(Math.random() *6)

    document.getElementById("D1").innerHTML = roll1;
    document.getElementById("D2").innerHTML = roll2;
    document.getElementById("D3").innerHTML = roll3;
    document.getElementById("D4").innerHTML = roll4;
    document.getElementById("D5").innerHTML = roll5;

    var result = roll1+roll2+roll3+roll4+roll5;

    if (result == 5) {
        document.getElementById("Result").innerHTML = "I am suprised you even have a life in the first place!";
    }
    else if (result == 6) {
        document.getElementById("Result").innerHTML = "Bro that was close!";
    }
    else if (result == 7) {
        document.getElementById("Result").innerHTML = "Bro that was close!";
    }
    else if (result == 8) {
        document.getElementById("Result").innerHTML = "Bro that was close!";
    }
    else if (result == 9) {
        document.getElementById("Result").innerHTML = "Bro that was close!";
    }
    else if (result == 10) {
        document.getElementById("Result").innerHTML = "Bro that was close!";
    }
    else if (result == 11) {
        document.getElementById("Result").innerHTML = "average-ish";
    }
    else if (result == 12) {
        document.getElementById("Result").innerHTML = "average-ish";
    }
    else if (result == 13) {
        document.getElementById("Result").innerHTML = "average-ish";
    }
    else if (result == 23) {
        document.getElementById("Result").innerHTML = "You got luck++!";
    }
    else if (result == 24) {
        document.getElementById("Result").innerHTML = "You got luck++!";
    }
    else if (result == 25) {
        document.getElementById("Result").innerHTML = "You got luck++!";
    }
    else if (result == 26) {
        document.getElementById("Result").innerHTML = "You got luck++!";
    }
    else if (result == 27) {
        document.getElementById("Result").innerHTML = "You got luck++!";
    }
    else if (result == 28) {
        document.getElementById("Result").innerHTML = "You got luck++!";
    }
    else if (result == 29) {
        document.getElementById("Result").innerHTML = "You got luck++!";
    }
    else if (result == 30) {
        document.getElementById("Result").innerHTML = "You got the 1/30 chance message - Go buy a lottery ticket!";
    }
    else {
        document.getElementById("Result").innerHTML = "You Rolled fairly!";
    }
}