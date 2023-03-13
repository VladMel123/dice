function addDivWithMassege(id, message) {

  var elem = document.createElement("div");
  elem.append(message)
  document.getElementById(id).appendChild(elem)
  return elem;
}
document.addEventListener("DOMContentLoaded", ready);
function ready() {

  let btn = document.getElementById("btn")
  btn.addEventListener("click", runScript);
}

function runScript(event) {
  event.preventDefault()

  let diceNumber = document.getElementById("inp").value
  console.log(diceNumber)

  for (var i = 0; i < diceNumber; i++) {
    let number = Math.ceil(Math.random() * 6);
    var kubik = document.createElement("div")
    kubik.className = "kubik" + number;
    addDivWithMassege("diw", kubik)

  }
}