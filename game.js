
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
  document.getElementById("penguin-pic").src = "http://maxpixel.freegreatpicture.com/static/photo/1x/Kapow-Fight-Comic-Explosion-Comic-Book-Expletive-1601675.png";
  setTimeout(function () {
    document.getElementById("penguin-pic").src = "http://maxpixel.freegreatpicture.com/static/photo/1x/Linux-Zoo-Bird-Beak-Animal-Black-Penguin-Tux-23253.png";
  }, (600));
}

function changeImgHit() {
  document.getElementById("penguin-pic").src = "https://pixabay.com/get/e833b10e2ef3093ed1534705fb0938c9bd22ffd41db8124194f0c47da3/zap-1601678_1920.png";
  setTimeout(function () {
    document.getElementById("penguin-pic").src = "http://maxpixel.freegreatpicture.com/static/photo/1x/Linux-Zoo-Bird-Beak-Animal-Black-Penguin-Tux-23253.png";
  }, (600));
}

function changeImgKick() {
  document.getElementById("penguin-pic").src = "http://maxpixel.freegreatpicture.com/static/photo/1x/Fight-Pow-Expletive-Comic-Book-Explosion-Comic-1601674.png";
  setTimeout(function () {
    document.getElementById("penguin-pic").src = "http://maxpixel.freegreatpicture.com/static/photo/1x/Linux-Zoo-Bird-Beak-Animal-Black-Penguin-Tux-23253.png";
  }, (600));
}

update()