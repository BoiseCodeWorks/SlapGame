
var health = 100

function slap() {
  health -= 1
  
}
function update() {
  document.getElementById("health").innerText = health
}

update()
