
var health = 100
var name = "Waffler"
var hits = 0


function update() {
  document.getElementById("health").innerText = health
  document.getElementById("name").innerText = name
  document.getElementById("hits").innerText = hits
  if (health <= 0) {
    node.removeAttribute("disabled=false")
  }
}
update()

function slap() {
  health -= 1
  update()
  hits += 1
}

function hit() {
  health -= 5
  update()
  hits += 1
}

function kick() {
  health -= 10
  update()
  hits += 1
}