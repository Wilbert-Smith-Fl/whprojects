// var userCharacter = {
//     name: "john",
//     age: 20,
//     style: ["fighter", "thief", "wizard"],
// }
// console.log(userCharacter.style[0]);

alert("Hello there to continue the text please click any key on the keyboard.");
var textBox = document.getElementById("textBox");
var next = document.getElementById("next");

var textNum = 0;


var gameText = {
    intro: ["<h1>Hello! and welcome to the town Stawford.</h1>", "<h1>The town most known for its strange stories.</h1>", "<h1>And here you are traveling to this town going to the hippo Inn.</h1>", "<h1>Its been a long night and you can see the Inn in the distance.</h1>"],
    Inn: ["<h1></h1>"],
    adventureStart: ["<h1></h1>"],
}
// console.log(gameText);
// console.log(nextText);

nextText(gameText, textNum);
window.addEventListener("keypress", nextText);

function nextText(text, num){
    if(num < text.intro.length){
        textBox.innerHTML = text.intro[num];
        num++;
        console.log(text.intro.length);
    }
    else{
        num = 0;
        textBox.innerHTML = "";
    }
}