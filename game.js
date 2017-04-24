
var health = 100
var name = "Respectable Penguin"
var hits = 0


function update() {
  document.getElementById("health").innerText = health
  document.getElementById("name").innerText = name
  document.getElementById("hits").innerText = hits
}

function slap() {
  health -= 1
  hits += 1
  changeImgSlap()
  update()
}

function hit() {
  health -= 5
  hits += 1
  changeImgHit()
  update()
}

function kick() {
  health -= 10
  hits += 1
  changeImgKick()
  update()
}
function changeImgSlap() {
  document.getElementById("penguin-pic").src = "2017-04-24-00-21-40.png";
  setTimeout(function () {
    document.getElementById("penguin-pic").src = "http://maxpixel.freegreatpicture.com/static/photo/1x/Linux-Zoo-Bird-Beak-Animal-Black-Penguin-Tux-23253.png";
  }, (600));
}

function changeImgHit() {
  document.getElementById("penguin-pic").src = "2017-04-24-00-18-50.png";
  setTimeout(function () {
    document.getElementById("penguin-pic").src = "http://maxpixel.freegreatpicture.com/static/photo/1x/Linux-Zoo-Bird-Beak-Animal-Black-Penguin-Tux-23253.png";
  }, (600));
}

function changeImgKick() {
  document.getElementById("penguin-pic").src = "2017-04-24-00-23-18.png";
  setTimeout(function () {
    document.getElementById("penguin-pic").src = "http://maxpixel.freegreatpicture.com/static/photo/1x/Linux-Zoo-Bird-Beak-Animal-Black-Penguin-Tux-23253.png";
  }, (600));
}

update()