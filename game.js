var patience = 100;
var pets = 0;
var no = new Audio("no.wav");

function updatePatience() {
    var patienceElem = document.getElementById("patience");
    patienceElem.innerText = patience;
    if (patience <= 0){
        document.getElementById("cat-img").style.backgroundImage = "url('angrycat.jpg')";
        no.play();
        document.getElementById("player-panel").classList.add("panel-danger");
        document.getElementById("pet-buttons").style.display = "none";
        document.getElementById("replay-button").style.display = "block";
        alert("Oh no! " + name + " is fed up with your measly attempts at affection.\n\n NOW, SUFFER THE CONCEQUENCES.")
    }
    else {
        document.getElementById("cat-img").style.backgroundImage = "url('cat.jpg')";
        document.getElementById("player-panel").classList.remove("panel-danger");
        document.getElementById("pet-buttons").style.display = "block";
        document.getElementById("replay-button").style.display = "none";
    }
}

function updatePets() {
    var petsElem = document.getElementById("pets");
    petsElem.innerText = pets;
}

function getName() {
    name = prompt("What is the name of your kitty?", "Snuggles McSnuggleface");
    var nameElem = document.getElementById("name");
    nameElem.innerText = name;
}

function stroke() {
    patience -= 1;
    updatePatience();
    pets++;
    updatePets();
}

function caress() {
    patience -= 5;
    updatePatience();
    pets++;
    updatePets();
}

function rubBelly() {
    patience -= 10;
    updatePatience();
    pets++;
    updatePets();
}

function replay() {
    patience = 100;
    pets = 0;
    getName();
    updatePets();
    updatePatience(); 
}


getName();
updatePets();
updatePatience();
