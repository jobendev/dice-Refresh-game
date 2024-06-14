if (window.performance.navigation.type === 0) {
    // if the page has been refreshed, call the rollDice() function.
   rollDice();
 }
function RollDice() {
var randomNumber1 = Math.round(Math.random() * 5)+1;
var randomNumber2 = Math.round(Math.random() * 5)+1;

var image1 = "images/dice"+randomNumber1+".png"
var image2 = "images/dice"+randomNumber2+".png"
document.querySelector("body > div.container > div:nth-child(2) > img").setAttribute("src", image1)
document.querySelector("body > div.container > div:nth-child(3) > img").setAttribute("src", image2)

if (randomNumber1 === randomNumber2) {
    document.querySelector("body > div.container > h1").innerHTML = "DRAWWWW!!!"
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("body > div.container > h1").innerHTML = "Player 1 Wins"
} else if (randomNumber1 < randomNumber2){
    document.querySelector("body > div.container > h1").innerHTML = "Player 2 Wins"
}
}
RollDice();