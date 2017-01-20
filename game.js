
// Global vars
var health = 100;
var slap = 1;
var punch = 10;
var kick = 20;
var hadouken = 50;
var hits = 0;



function onSlap() {
    if (health > 0) {
        health = health - slap;
        if (health == 0 || health < 0) {
            gameOver();
        } drawUpdateHealth();
    } else {
        gameOver();
    }
}



function onPunch() {
    if (health > 0) {
        health = health - punch;
        drawUpdateHealth();
    } else {
        gameOver();
    }
}



function onKick() {
    // console.log(health);
    if (health > 0) {
        health = health - kick;
        drawUpdateHealth();
    } else {
        gameOver();
    }
}



function onHadouken() {
    if (health > 0) {
        health = health - hadouken;
        drawUpdateHealth();
    } else {
        gameOver();
    }
}

function onReset() {
    health = 100;
    hits = 0;
    drawUpdateHealth();
}

function gameOver() {
    document.getElementById("health1").innerHTML = 'Game Over!';
    document.getElementById("health").innerHTML = 'Good Job!!';
}

function drawUpdateHealth() {
    hits++;
    document.getElementById("health").innerHTML = health;
    document.getElementById("hits").innerHTML = hits;
}