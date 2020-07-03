var randomNumber1;
randomNumber1 = Math.floor((Math.random() * 6) + 1 );
console.log(randomNumber1);

document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2;
randomNumber2 = Math.floor((Math.random() * 6) + 1 );
console.log(randomNumber2);

document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Winss!!";

}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Winss!!";

}

else {
    document.querySelector("h1").innerHTML = "Draw!!"
}