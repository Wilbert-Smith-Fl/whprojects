var textBox = document.getElementById("textBox");
var next = document.getElementById("next");

var backgroundImages = ['<img src="img/startingTown.jpg" alt="fantasy town by hillside." class="CurrentPicture">','<img src="img/outsideTavern.jpg" alt="a view of the tavern from the outside" class = "CurrentPicture"> <img src= "img/tavern Room.jpg" alt="" class="CurrentPicture">']

var CurrentPicture = document.getElementById("imageContainer");

CurrentPicture.innerHTML = backgroundImages[0];

var scene = 0;

function nextScene(){
    if(scene == 0)
}

function startScene(){
    backgroundImages[0] = backgroundImages[1];
    CurrentPicture.innerHTML = backgroundImages;
}

console.log(backgroundImages[0]);
next.addEventListener("click", nextScene);
window.addEventListener("click", nextScene);