// variables
var nav = document.getElementById("nav");
var navBtn = document.getElementById("navBtn");
var background = document.getElementById("background");
var content = document.getElementById("content");
var reference1 = document.getElementById("reference1");
var reference2 = document.getElementById("reference2");
var userName = document.getElementById("userName");
var writeName = document.getElementById("writeName");
var mainBackground = document.getElementById("mainBackground");
var styleName = document.getElementById("styleName");


//event listeners
userName.addEventListener("click", getName);
styleName.addEventListener("click", bigName);
reference1.addEventListener("click", linkName);
reference2.addEventListener("click", linkName);
navBtn.addEventListener("click", moveNav);
//functions
function getName(){
    var name = prompt("whats your name?");
    writeName.innerHTML = name;
    styleName.classList.toggle("show");    
}
function bigName(){
    writeName.style.color = "white";
    console.log('hello');
    writeName.style.fontSize = "64px";
}
function linkName(){
    reference1.classList.toggle("colorChange");
    reference2.classList.toggle("colorChange");
}
function moveNav(){
    nav.classList.toggle("right");
}
mainBackground.style.backgroundColor = "aqua";
