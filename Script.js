

// document.getElementById("btn")
function addDivWithMassege(id, message) {

    var elem = document.createElement("div");
    elem.append(message)
    document.getElementById(id).appendChild(elem)
    return elem;
  }
//   let dice1 = document.getElementsByClassName("kubik1")
//   let dice2 =  document.getElementsByClassName("kubik2")
//   let dice3 = document.getElementsByClassName("kubik3")
//   let dice4 = document.getElementsByClassName("kubik4")
//   let dice5 = document.getElementsByClassName("kubik5")
//   let dice6 = document.getElementsByClassName("kubik6")

  document.addEventListener("DOMContentLoaded", ready);
  function ready() {
    
    let btn = document.getElementById("btn")
    btn.addEventListener("click", runScript);
  }
  
  function runScript(event) {
    event.preventDefault()
    // todo clear error
   
    let diceNumber = document.getElementById("inp").value
    console.log(diceNumber)

    
  for (var i = 0; i < diceNumber; i++){
    let number = Math.ceil(Math.random() * 6);
    var kubik = document.createElement("div")
    kubik.className = "kubik" + number;
    addDivWithMassege("diw", kubik)
    
  }
}






   

 
// runScript(diceNumber)
// alert(diceNumber)
// let statistics = {};
// let numberOfThrows = 10000;
// let message = "";
// for (key in statistics) {
//     // statistics[key];
//     message +="\n" + key + " = " + statistics[key];
   

// }
// alert(message)
// // alert(JSON.stringify(statistics, "\n"))
// function throwDice(diceNumber) {
    
//     let numbers = 0
//     for (var i = 0; i < diceNumber; i++) {
//         let number = Math.ceil(Math.random() * 6);
//         // console.log(number)
//         numbers += number;
//         // Add number value to numbers; add " " after each number+
//     }
//     return numbers;
//