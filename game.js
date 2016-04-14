var patience = 100;
var pets = 0;
var no = new Audio("no.wav");

var Item = function(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){
        //returns one div each for each item you have in your possible items list
        return "<li><button>Hi</button></li>";
    };
    
    //"<button class='btn' onclick='useItem(items.box)'>Empty Cardboard Box</button>"
}

var items = {
    box: new Item("Empty Cardboard Box", 0.2, "A strangely alluring empty cardboard box."),
    liveMouse: new Item("Live Mouse", 0.3, "Alive and wrigling."),
    catnip: new Item("Catnip", 0.4, "Sweet, sweet kitty drugs.")
}

var player = {
    playerInventory: [],
    addMods: function(inventoryArray){
        var totalModValue = 0;
        for (var i = 0; i < inventoryArray.length; i++){
            var currentItem = inventoryArray[i];
            totalModValue += currentItem.modifier;
        }
        return totalModValue;
    }
}

function useItem(itemToUse){
    //put item in inventory --player.playerInventory.push(thatitem)
    player.playerInventory.push(itemToUse);   
    //might make button disappear so it can't be added to the array multiple times?
    //display a panel to rep item?
    //.....make sure at replay items are cleared from inventory, and test
}

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

function calcDamage (rawDamage) {
    var damageModValue = player.addMods(player.playerInventory);
    if (damageModValue === 0) {
        damageModValue = 1;
    }
    return rawDamage*damageModValue;
}

function stroke() {
    rawDamage = 1;
    var totalDamage = calcDamage(rawDamage);
    patience -= totalDamage;
    updatePatience();
    pets++;
    updatePets();
}

function caress() {
    rawDamage = 5;
    var totalDamage = calcDamage(rawDamage);
    patience -= totalDamage;
    updatePatience();
    pets++;
    updatePets();
}

function rubBelly() {
    rawDamage = 10;
    var totalDamage = calcDamage(rawDamage);
    patience -= totalDamage;
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


/*
function drawItems() {
    var itemsListElem = document.getElementById("player-items");
    itemsListElem.innerHTML += 
}*/


getName();
updatePets();
updatePatience();