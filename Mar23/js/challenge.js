var menu = document.getElementById("menu");
var userName = document.getElementById("userName");
var userStyle = document.getElementById("userStyle");

var nav = document.getElementById("nav");
var main = document.getElementById("main");
var user = document.getElementById("user");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
//event listen

menu.addEventListener("click", vertMenu);
userName.addEventListener("click", getUsername);
userStyle.addEventListener("click", styleUsername);
a1.addEventListener("click", function(e){
    e.preventDefault();
    console.log(e);
});
a2.addEventListener("click", colorText2);

//functions
function changeBody(){
    document.body.style.backgroundColor = "green";
}
changeBody();

function vertMenu(){
    nav.classList.toggle("vertical");
    main.classList.toggle("vertical");
}
function getUsername(){
    var userName = prompt("What is your name?");
    user.innerHTML = userName;
}
function styleUsername(){
    user.classList.add("mega");
}
function colorText1(){
    a1.style.color = "magenta";
}
function colorText2(){
    a2.style.color = "yellow";
}