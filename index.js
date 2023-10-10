var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;
var dice2=document.querySelector(".img2");
var dice1=document.querySelector(".img1");

if (randomNumber1==1)
    dice2.setAttribute("src","./images/dice1.png");
else if (randomNumber1==2)
dice2.setAttribute("src","./images/dice2.png");
else if (randomNumber1==3)
dice2.setAttribute("src","./images/dice3.png");
else if (randomNumber1==4)
dice2.setAttribute("src","./images/dice4.png");
else if (randomNumber1==5)
dice2.setAttribute("src","./images/dice5.png");
else 
dice2.setAttribute("src","./images/dice6.png");

if (randomNumber2==1)
    dice1.setAttribute("src","./images/dice1.png");
else if (randomNumber2==2)
dice1.setAttribute("src","./images/dice2.png");
else if (randomNumber2==3)
dice1.setAttribute("src","./images/dice3.png");
else if (randomNumber2==4)
dice1.setAttribute("src","./images/dice4.png");
else if (randomNumber2==5)
dice1.setAttribute("src","./images/dice5.png");
else 
dice1.setAttribute("src","./images/dice6.png");

var head = document.querySelector("h1");
if (randomNumber1==randomNumber2) {
    head.innerHTML="DRAW";
}
else if (randomNumber1>randomNumber2) {
    head.innerHTML="Player 2 Wins!🚩";
}
else {
    head.innerHTML="🚩Player 1 Wins!";
}