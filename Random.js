window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#loaded';
		window.location.reload();
	}
}
let p1dicenum = Math.floor((Math.random() * 6) + 1);
if(p1dicenum === 1){
  document.getElementById("check1").src = "image/dice1.jpg";
}
if(p1dicenum === 2){
  document.getElementById("check1").src = "image/dice2.jpg";
}
if(p1dicenum === 3){
  document.getElementById("check1").src = "image/dice3.jpg";
}
if(p1dicenum === 4){
  document.getElementById("check1").src = "image/dice4.jpg";
}
if(p1dicenum === 5){
  document.getElementById("check1").src = "image/dice5.jpg";
}
if(p1dicenum === 6){
  document.getElementById("check1").src = "image/dice6.jpg";
}
let p2dicenum = Math.floor((Math.random() * 6) + 1);
if(p2dicenum === 1){
  document.getElementById("check2").src = "image/dice1.jpg";
}
if(p2dicenum === 2){
  document.getElementById("check2").src = "image/dice2.jpg";
}
if(p2dicenum === 3){
  document.getElementById("check2").src = "image/dice3.jpg";
}
if(p2dicenum === 4){
  document.getElementById("check2").src = "image/dice4.jpg";
}
if(p2dicenum === 5){
  document.getElementById("check2").src = "image/dice5.jpg";
}
if(p2dicenum === 6){
  document.getElementById("check2").src = "image/dice6.jpg";
}
if (p1dicenum > p2dicenum) {
  document.querySelector("h1").innerHTML = "Player 1 WIN!!";
}
else if (p1dicenum < p2dicenum) {
  document.querySelector("h1").innerHTML = "Player 2 WIN!!";
}
else {
  document.querySelector("h1").innerHTML = "DRAW!!";
}
