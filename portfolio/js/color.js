// function switchColor(){
//     document.getElementById('switchColor').style.backgroundColor = "darkblue";
//     document.getElementById('switchColorText').style.color = "white";
// }

function switchColor(){
    // document.getElementById('switchColor').classList.add('Darkmode');
    document.getElementById("switchColor").classList.toggle("Darkmode");
    document.getElementById("switchColorText").classList.toggle("Darkmodetext");
}
