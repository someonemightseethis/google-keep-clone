var no1 = Math.floor(Math.random()*6)+1;
var diceimg1="dice" + no1 + ".png";
var src1="images/"+diceimg1;

document.querySelectorAll("img")[0].setAttribute("src", src1);

var no2 = Math.floor(Math.random()*6)+1;
var diceimg2="dice" + no2 + ".png";
var src2="images/"+diceimg2;

document.querySelectorAll("img")[1].setAttribute("src", src2);


if(no1==no2){
  document.querySelector('h1').textContent="DRAW.";
} else if (no1>no2) {
  document.querySelector('h1').textContent="Player1 WINS.";
} else if (no1<no2) {
  document.querySelector('h1').textContent="Player2 WINS.";
}
