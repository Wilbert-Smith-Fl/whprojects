var clientId = "ObeS_hjk5rr-wtA2FFHT3fsuYQWmA44e";
var str = "";
var searchBox = document.querySelector("header input");
searchBox.addEventListener("keyup", getUserStr);

function githubUsers(data){
    console.log(data);
}

function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
        }else{
            console.log("error", req.statusText);
        }
    }
    req.send(null);
}
function getUserStr(evt){

    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_Id=${clientId}`, githubUsers)

    // if(evt.key !== "undefined" && evt.key !== "backspace" && evt.key !== "Tab")
    // str += evt.key;

    // console.log(str, searchBox.value);
}