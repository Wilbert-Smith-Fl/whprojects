function welcome() {
    var userName = prompt("What is your name?");
    document.getElementById("Welcome").innerHTML = userName;
}

// welcome();

function fireworks() {
    document.getElementById("gif").style.backgroundImage = "url('/img/giphy.gif')";
    document.getElementById("gif").style.color = "white";
    slidecontent();    
    togglecolor();
}

function togglecolor(){
    document.body.classList.toggle("colorize");
}
function slidecontent(){
    document.getElementById("slide").classList.toggle("slide");
}

function praise(){
    // document.getElementById("praise").style.backgroundImage = "url('/img/praise.gif')";
    document.getElementById("praise").classList.toggle("praise");
}