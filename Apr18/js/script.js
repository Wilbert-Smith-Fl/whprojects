// var paras = document.querySelectorAll("p");

// for(var i = 0; i < paras.length; i++){
//     // console.log(paras[i].classList.contains("para"));
//     if(!paras[i].classList.contains("para")){
//         console.log("thats not true");
//     }
// }

// console.log(3 == "3");

// console.log(typeof(3));
// console.log(typeof("3"));

// //   == loose comparison
// //   === strict comparison

// var userNum = parseInt(prompt("pick a number"));

// if(typeof(userNum) === "number"){
//     console.log(3 + userNum);
// }

var myUl = document.querySelector("ul");

var req = new XMLHttpRequest();
req.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=b73133a8e4e9ff27d97d1608969e5504");
req.onload = function(){
    if(req.readyState === 4){
    var apiData = JSON.parse(req.responseText);
    // console.log(apiData.emojis_url);
    processData(apiData);
    }
}
req.send(null);

function processData(data){
    for(var i = 0; i < data.list.length; i++){
        var weatherDesc = data.list[i].weather[0].description;
        var timeOfDay;
        var myLi = `
        <li>
            <p>${timeOfDay}</p>
        </li>`;
        myUl.innerHTML += myLi;
    }
}