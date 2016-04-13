var patience = 100;
var name = "Mr. SnuggleFace";
var hits = 0;

function updatePatience() {
    var patienceElem = document.getElementById("patience");
    patienceElem.innerText = patience;
}

function slap() {
    patience -= 1;
    updatePatience();
    hits++;
}

function caress() {
    patience -= 5;
    updatePatience();
    hits++;
}

function rubBelly() {
    patience -= 10;
    updatePatience();
    hits++
}


updatePatience();
