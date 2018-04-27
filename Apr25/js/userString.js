function getUserStr(evt){

    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_Id=${clientId}`, githubUsers)

    // if(evt.key !== "undefined" && evt.key !== "backspace" && evt.key !== "Tab")
    // str += evt.key;

    // console.log(str, searchBox.value);
}