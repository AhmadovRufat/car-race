var tm;
var cx;
var gameBegin;
var cars;


var sum = +prompt("Enter your amount");
var betCar = +prompt("Which car would you like to bet on? (Insert number from 1 to 5)");
var betAmount = +prompt("How much you put for that car?");



function startRace() {
    if (gameBegin == 1) {
        return;
    }
    gameBegin = 1;
    cars = [];
    cx = []
    for (i=0; i<5; i++) {
        cars[i] = document.getElementById("car"+i);
        cars[i].style.border = "none";
        cx[i] = 1000;
        
    }
    tm = setInterval(Timer, 50);
}

function Timer() {
    for (i=0; i<5; i++) {
        cx[i] -= Math.floor(Math.random()*10+2);
        
        if (cx[i] <= 0) {
            clearInterval(tm);
            gameBegin = 0;
            
            if (i == (betCar-1)) {
                alert("Congrats! You won: " + (sum+betAmount))
                sum += betAmount;
            } else {
                alert("You lost! The amount left: " + (sum-betAmount)+"." + " The winner is: "+(i+1))
                sum -= betAmount;

            }
            cars[i].style.border = "5px ridge yellow";
            return;
        }
        
        cars[i].style.left = cx[i]+"px";
    }
        
}