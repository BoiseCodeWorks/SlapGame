
var Item = function(name, modifier, description, html) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.panelHTML = html;
    };


var items = {
    box: new Item("Empty Cardboard Box", 0.2, "Empty, yet strangely alluring.", '<div class="col-xs-4 panel-default"> <div class="panel-heading">Cardboard Box</div> <div class="panel-body"> <img class="item-img img-responsive" src="box.jpg"> </div> <div class="panel-footer"> Empty, yet strangely alluring.</div></div>'),
    liveMouse: new Item("Live Mouse", 0.3, "Alive and wrigling.", '<div class="col-xs-4 panel-default"><div class="panel-heading">Live Mouse</div> <div class="panel-body"> <img class="item-img img-responsive" src="mouse.jpg"></div><div class="panel-footer">Alive and wriggling.</div></div>'),
    catnip: new Item("Catnip", 0.4, "Sweet, sweet kitty drugs.", '<div class="col-xs-4 panel-default"><div class="panel-heading">Catnip</div><div class="panel-body"><img class="item-img img-responsive" src="catnip.jpg"></div><div class="panel-footer">Sweet, sweet kitty drugs.</div></div>')
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
    var pressedButton = document.getElementById(itemToUse);
    var activeItemElem = document.getElementById("active-items")
    player.playerInventory.push(items[itemToUse]);
    activeItemElem.innerHTML += items[itemToUse].panelHTML;
    pressedButton.style.display = "none"; 
}

function updatePatience() {
    var patienceElem = document.getElementById("patience");
    patienceElem.innerText = patience;
    if (patience <= 0){
        document.getElementById("cat-img-div").innerHTML = '<img class="img-responsive cat-img" src="angrycat.jpg">'
        no.play();
        document.getElementById("player-panel").classList.add("panel-danger");
        document.getElementById("pet-buttons").style.display = "none";
        document.getElementById("replay-button").style.display = "block";
        alert("Oh no! " + name + " is fed up with your measly attempts at affection.\n\n NOW, SUFFER THE CONCEQUENCES.")
    }
    else {
        document.getElementById("cat-img-div").innerHTML = '<img class="img-responsive cat-img" src="cat.jpg">';
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

function petAction(rawDamage) {
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
    document.getElementById("box").style.display = "inline-block";
    document.getElementById("liveMouse").style.display = "inline-block";
    document.getElementById("catnip").style.display = "inline-block";
    document.getElementById("active-items").innerHTML = "";
}


replay()