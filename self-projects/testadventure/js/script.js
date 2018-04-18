var textBox = document.getElementById("textBox");
var next = document.getElementById("next");

var imgNum = 0;
var startTextNum = 0;
var startText = {
    intro: ["<h1>Hello there to continue the text please hit any key on your keyboard.</h1>", "<h1>so is it working?</h1>", "<h1>Are you sure?</h1>", "<h1>ok then lets begin!</h1>"]}     
var sequence1Text = [];
var images = document.querySelectorAll("img");
// var pictureOff = classlist.toggle("TurnedOff");
// var pictureOn = classlist.toggle("CurrentPicture");
// console.log(images[1]);
// console.log(next);

startScreen();
next.addEventListener("click", nextScene);
window.addEventListener("keypress", startScreen);
// console.log(next);

function nextScene(){
    for(var i = 0; i < 5; i++){   
    if(i == 1){
        console.log(i);
        beginGame();
    }
    else{
        changeScene();
        }
    }
}

function changeScene(){
    images[1].classList.toggle("CurrentPicture");
    images[2].classList.toggle("CurrentPicture");
}

function startScreen(){
    if( startTextNum < startText.intro.length){
        // console.log(startText[Text]);
        // console.log(Text);
        textBox.innerHTML = startText.intro[startTextNum];
        startTextNum++;
        // console.log(startText[Text]);
        // console.log(Text);
    }
    else{
        startTextNum = 0;
        textBox.innerHTML = "";
        beginGame();
    }
}

function beginGame(){
    images[0].classList.toggle("CurrentPicture");
    images[1].classList.toggle("CurrentPicture");
    // console.log(images[0].classList.toggle("turnedOff"));

}

// console.log(images);