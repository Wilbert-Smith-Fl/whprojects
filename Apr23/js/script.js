//test

// if(typeof Storage !== "undefined"){
//     console.log("yay storage");
// }else{
//     console.log("Boo.")
// }

// var storageBtn1 = document.querySelector('#Btn1');
// var storageBtn2 = document.querySelector('#Btn2');

// storageBtn1.addEventListener('click', setLocalStorage);
// storageBtn2.addEventListener('click', setSessionStorage);


// function setLocalStorage(){
//     localStorage.setItem('lastname', 'Smith');
// }

// function setSessionStorage(){
//     sessionStorage.setItem('vehicle', 'Sedan');
// }

var saveBtn = document.querySelector("input[type='submit']");
if(localStorage.getItem("details") != null){
    saveBtn.addEventListener("click", checkPassword);
    saveBtn.removeEventListener("click", getUserInfo);
}else{
    saveBtn.addEventListener("click", getUserInfo);
    saveBtn.removeEventListener("click",checkPassword);
}

function getUserInfo(evt){
    evt.preventDefault();

    var radio = document.querySelector("input[type='radio']:checked").value;

    // console.log("get info");

    var userName = document.querySelector("input[type='text']").value;
    var password = MD5(document.querySelector("input[type='password']").value);
    
    localStorage.setItem("details",JSON.stringify(new userInfo(userName, password, radio)));
}

function userInfo(un, pw, theme){
    this.user = un;
    this.pass = pw;
    this.theme = theme;
}

function checkUserInfo(){
    if(localStorage.getItem("details") != null){
        var userInfo = JSON.parse(localStorage.getItem("details"));
        document.querySelector("input[type='text']").value = userInfo.user;
        document.querySelector("label[for='theme']").style.display = "none";
       

        console.log(userInfo);
    }else{
    // alert("please enter your password!")        
    }
}
checkUserInfo();

function checkPassword(evt){
    evt.preventDefault();
    var userName = document.querySelector("input[type='text']").value;
    var userPass = MD5(document.querySelector("input[type='password']").value);
    var userInfo = JSON.parse(localStorage.getItem("details"));    
    if(userName === userInfo.user && userPass === userInfo.pass){
        alert("welcome home");
        document.body.classList.add(userInfo.theme);
        console.log(userInfo.theme);
}else{
    alert("Enter your credintials")
    }
}