var searchBox = document.querySelector("input");
searchBox.addEventListener("keypress", getUserSearch);


var userSearch = "";

function getUserSearch(evt){
    if(evt.key !== "undefined" && evt.key !== "backspace" && evt.key !== "Tab")
    userSearch += evt.key;
}

function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open("GET", "https://rickandmortyapi.com/api/character");
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
        }else{
            console.log("error", req.statusText);
        }
    }
    req.send(null);
}

var cardList = document.querySelector("main ul");

function cardListData(cards){
    var card = `
        <li>
            <img src = "${cards.results[i].images}" alt = "${cards.results[i].name}">
            <h3>${cards.results[i].name}</h3>
        </li>
    `
    for(var i = 0; i < cards.length; i++)
    cardList.innerHTML += card;
}

getReq("https://rickandmortyapi.com/api/character", cardListData);

function getCharacter(searchSTR){
    var characterARR = [];
    console.log(searchSTR);
    getReq("https://rickandmortyapi.com/api/character", characterData);

    var req = new XMLHttpRequest();
    req.open("GET", "https://rickandmortyapi.com/api/character");
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            for(var i = 0; i < JSON.parse(req.responseText).results.length; i++){
                characterARR.push(JSON.parse(req.responseText).results[i]);
            }
            func(JSON.parse(req.responseText));
            console.log((JSON.parse(req.responseText)));
        }else{
            console.log("error", req.statusText);
        }
    }
    req.send(null);
    console.log(characterARR);

    for(var i = 0; i < characterARR.length; i++){
        if(searchSTR === characterARR[i].name);
        console.log(
            searchSTR,
            characterARR[i].name,
            "success"
        );
    }
}

function characterData(data){
    console.log(data);
    for(var i = 0; i < data.results.length; i++){
        console.log(data.results[i].name);
        return data.results[i].name;

    }
}