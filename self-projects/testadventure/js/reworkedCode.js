// var userCharacter = {
//     name: "john",
//     age: 20,
//     style: ["fighter", "thief", "wizard"],
// }
// console.log(userCharacter.style[0]);

alert("Hello there to continue the text please click any key on the keyboard.");
var textBox = document.getElementById("textBox");
var next = document.getElementById("next");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2")

var images = document.querySelectorAll("img");

var textNum = 0;

var sceneNum = 0;

var scenePart = 0;

var adventureNum = 0;

var gameText = {
    intro: ["<h1>Hello! and welcome to the town Stawford.</h1>", "<h1>The town most known for its strange stories.</h1>", "<h1>And here you are traveling to this town going to the hippo Inn.</h1>", "<h1>Its been a long day and you can see the Inn in the distance.</h1>"],
    Inn: ["<h1>Its been a long day traveling to town.</h1>","<h1>The best thing to do right now is to head to bed.</h1>", "<h1> However there seems to be some shady people in the alley way</h1>"],
    insideInn: ["<h1>You walk into the Inn and you hear the bard playing some Tunes</h1>","<h1>They remind you of home and of a better time</h1>","<h1>You walk up to the bar and ask a bar maid...</h1>"],
    BackAlley: ["<h1>You end up in the Alley with three strangers looking to you.</h1>", "<h1>Stranger 1: Hey you there! You trying to get into some trouble?<h1>","<h1>Stranger 3: Pffft, yeah like this guy would get into trouble leave him out of this</h1>","<h1>Stranger 2: if he wants to be here... he can be here... Let him decide.</h1>"],
    friendlyThief: ["<h1>Stranger 3: HAHAHA so you do have a spine come on we gotta test you!</h1>", "<h1>stranger 1: ...If you get in my way I will kill you.</h1>", "<h1>Stranger 2: Be quiet you idiots?... What we need to know is who you are?</h1>"],
    threatningThief: ["<h1>As you start to back up two of the strangers reach for something.</h1>", "<h1>It seems that they are pulling out their weapons and you forgot to bring yours</h1>", "<h1>Stranger 2: You better run I don't want to kill you... but my friends think otherwise.</h1>"],

}
// console.log(gameText);
// console.log(nextText);

nextText();

//background image functions

function changeScene(){
    if(sceneNum === 0){
        nextText()
    }
    else if( sceneNum === 1){
        tavernText()
        // console.log(sceneNum);
    }
    else if( sceneNum === 2){
        insideInntext()
        // console.log(sceneNum);
    }
    else if( sceneNum === 3){
        if(scenePart === 0){
            alleyText()
        }
        else if(scenePart === 1){
            friendText()
        }
        else{
            threatningText()
        }
        // console.log(sceneNum);
    }
    else if( sceneNum === 4){
        chooseClass()
    }
    else{
        location.reload();
    }
}

window.addEventListener("keypress", changeScene);


//move text functions
function nextText(){
    if(textNum < gameText.intro.length){
        textBox.innerHTML = gameText.intro[textNum];
        textNum++;
        // console.log(gameText.intro.length);
    }
    else{
        textNum = 0;
        textBox.innerHTML = "";
        sceneNum++;
        images[0].classList.toggle("CurrentPicture");
        images[1].classList.toggle("CurrentPicture");
    }
}

function tavernText(){
    if(textNum < gameText.Inn.length){
        textBox.innerHTML = gameText.Inn[textNum];
        textNum++;
        // console.log(gameText.Inn.length);
    }
    else if(textNum === 3){
        choice1.classList.toggle("none");
        choice2.classList.toggle("none");
        choice1.innerHTML = "follow them into the alley.";
        choice2.innerHTML = "ignore them and go into the Inn.";
        choice1.addEventListener("click", alleySwitch);
        choice2.addEventListener("click", insideInnSwitch);
    }
    else{
        textNum = 0;
        textBox.innerHTML = gameText.Inn[0];
    }
}
function insideInntext(){
    if(textNum < gameText.insideInn.length){
        textBox.innerHTML = gameText.insideInn[textNum];
        textNum++;
        // console.log(gameText.insideInn.length);
    }
    else{
        textNum = 0;
        textBox.innerHTML = "";
        sceneNum++;
    }
}
function alleyText(){
    if(textNum < gameText.BackAlley.length){
        textBox.innerHTML = gameText.BackAlley[textNum];
        textNum++;
        // console.log(gameText.BackAlley.length);
    }
    else if(textNum === 4){
        choice1.innerHTML = "Listen to the strangers";
        choice2.innerHTML = "Attempt to leave";        
        choice1.classList.toggle("none");
        choice2.classList.toggle("none");
        choice1.addEventListener("click", friendlyThief);
        choice2.addEventListener("click", threatningThief);
        // console.log(choice1, choice2);
    }
    else{
        textNum = 0;
        // textBox.innerHTML = "";
    }
}
function friendText(){
    if(textNum < gameText.friendlyThief.length){
        textBox.innerHTML = gameText.friendlyThief[textNum];
        textNum++;
        console.log(gameText.friendlyThief.length);
    }else{
        textNum = 0;
        textBox.innerHTML = "";
        // sceneNum = sceneNum +
    }
}
function threatningText(){
    if(textNum < gameText.threatningThief.length){
        textBox.innerHTML = gameText.threatningThief[textNum];
        textNum++;
        console.log(gameText.threatningThief.length);
    }else{
        textNum = 0;
        textBox.innerHTML = "";
        // sceneNum = sceneNum +
    }
}

//switch scenes functions
function alleySwitch(){
    choice1.removeEventListener("click", alleySwitch);
    choice2.removeEventListener("click", insideInnSwitch);
    choice1.classList.toggle("none");
    choice2.classList.toggle("none");
    sceneNum = sceneNum + 2;
    images[1].classList.toggle("CurrentPicture");
    images[3].classList.toggle("CurrentPicture");
    textNum = 0;
    textBox.innerHTML = "";
}
function insideInnSwitch(){
    choice1.removeEventListener("click", alleySwitch);
    choice2.removeEventListener("click", insideInnSwitch);
    choice1.classList.toggle("none");
    choice2.classList.toggle("none");
    sceneNum = sceneNum + 1;
    images[1].classList.toggle("CurrentPicture");
    images[2].classList.toggle("CurrentPicture");
    textNum = 0;
    textBox.innerHTML = "";
}

//switch text choices
function friendlyThief(){
    choice1.removeEventListener("click", alleySwitch);
    choice2.removeEventListener("click", insideInnSwitch);
    choice1.classList.toggle("none");
    choice2.classList.toggle("none");
    scenePart = 1;
}
function threatningThief(){
    choice1.removeEventListener("click", alleySwitch);
    choice2.removeEventListener("click", insideInnSwitch);
    choice1.classList.toggle("none");
    choice2.classList.toggle("none");
    scenePart = 2;
}