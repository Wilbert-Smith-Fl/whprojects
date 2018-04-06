// math object

// integers - whole numbers
// decimals - floats 

var wha = .1 * .2;

var rounded = Math.round(wha);

var roundUp = Math.ceil(.111111);

var roundDown = Math.floor(.999999);

var pi = Math.PI;

// console.log(Math.pow(8, 3));

// console.log(Math.sqrt(64));

//math random
// console.log(Math.random());

// console.log("rounded():", rounded, ".ceil():", roundUp, ".floor():", roundDown, ".pI:", pi);

// Random number generator

/*
var rand = Math.random();
rand = Math.floor(rand * 11);
console.log(rand);

function pickANum(){
    var userNum = prompt("guess a number in the range of 0-10");
    checkNum(userNum);
}
pickANum();

function pickAnotherNum(){
    var userNum = prompt("guess a number in the range of 0-10");
    checkNum(userNum);
}

function checkNum(num){
    if(num < rand){
        alert(num + " is to low. Pick Again");
        pickAnotherNum();
    }
    else if(num > rand){
        alert(num + " is to high. Pick Again");
        pickAnotherNum();
    }
    else {
        alert(num + "is the right number!! You Win!");
    }
}
*/

var userPick = document.getElementById("userPick");
var submitBtn = document.getElementById("submit");
var userPickRes = document.querySelector("h1");
var changeRand = document.getElementById("change");
var background = document.getElementById("color");

submitBtn.addEventListener("click", getUserPick);
changeRand.addEventListener("click", randomize);

var rand;
var attempts = 3;
var colorRand;
// console.log(rand);

function randomize(){
    attempts = 3;
    userPickRes.innerHTML = ""; 
    userPick.value = "";
    rand = Math.random();
    rand = Math.floor(rand * 11);
    console.log(rand);
    changeBackground();    
}
randomize();
changeBackground();

function getUserPick(){
    attempts = attempts - 1;
    var userNum = parseInt(userPick.value); 
    userPick.value = "";
    checkUserPick(userNum);
}

function checkUserPick(x){
    console.log(x);
    if( attempts > 0){ 
        if(x < rand){
        printUserRes(x + " is to low. Pick Again");
        }
        else if(x > rand){
        printUserRes(x + " is to high. Pick Again");
        }
        else if(x == rand){
            printUserRes(x + " is the right number!! You Win!");
        }
         else {
            printUserRes("Wrong answer!");
        }
        }
    else {
        printUserRes("Game over");
    }
}
function changeBackground(){
    colorRand = rand * 36;
    background.style.backgroundColor = "hsl("+colorRand+", 50%, 50%)";
    console.log(colorRand);

}   
function printUserRes(userRes){
    userPickRes.innerHTML = userRes;
}

console.log(window);
window.addEventListener("mousemove", function(e){
        var width = Math.round((e.x /window.innerWidth)*100);
        var height =  Math.round((e.y /window.innerHeight)*100);
        document.body.style.backgroundColor = `hsl(${colorRand}, ${width}%, ${height}%`;
})
