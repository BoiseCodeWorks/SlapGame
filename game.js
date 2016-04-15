
var Item = function(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    };


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
    var activeItemElem = document.getElementById("active-items");
    var pressedButton = document.getElementById(itemToUse);
    player.playerInventory.push(items[itemToUse]);
    activeItemElem.innerHTML += "<div>" + items[itemToUse].name + "</div>";
    pressedButton.style.display = "none";
    //display panel?
    
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
    return rawDamage*(1-damageModValue);
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
    no = new Audio("no.wav");
    getName();
    updatePets();
    updatePatience();
    player.playerInventory = [];
    document.getElementById("active-items").innerHTML = ""
    document.getElementById("box").style.display = "inline-block";
    document.getElementById("liveMouse").style.display = "inline-block";
    document.getElementById("catnip").style.display = "inline-block";
}


replay()