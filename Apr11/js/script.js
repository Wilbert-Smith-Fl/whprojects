

var btns = document.querySelectorAll("button");

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(evt){
        // console.log(evt.target);
        // console.log(this);
    })
}


window.addEventListener("click", function(evt){
    // console.log(evt.target.nodeName);
    if(evt.target.nodeName == "BUTTON"){
        // console.log(evt.target);
        // console.log(this);
    }
});

var cars = ["jeep", "honda", "jeep", "subaru"];
// console.log(cars);

// objects

var car = {
    type: "jeep",
    model: "wrangler",
    color: "black",
    offroad: true,
    trim: ["sunroof", "hardtop", "4 wheel drive"]
};

// console.log(car.trim)

var mainCharacter = {
    firstName: "Wilbert",
    lastName: "Smith",
    age: 21,
    height: "6'6",
    hair: true,
    hairColor: "brown",
    facialHair: true,
    facialHairColor: "brown",
    greeting: function(msg){
        // console.log(this.firstName);
        // console.log(msg +" "+ this.firstName);
    }
}
// console.log(mainCharacter.firstName);
mainCharacter.middleName = "LEROY";

// console.log(mainCharacter);

mainCharacter.greeting("Hey there!");

mainCharacter.firstName = "Celeb";

mainCharacter.greeting("I'm Now!")

//constructor object
function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.greeting = function(msg){
        // console.log(msg + this.firstName);
    };
}

var myDad = new Person("Brent", "Smith", 56, "Brown Eyes");
var druid = new Person("Celeb", "Lasdir", 200, "Silver Eyes");
var fighter = new Person("Zorc", "the II", 20, "Brown Eyes");

// console.log(myDad);

fighter.greeting("HEllo ");

function signUp(){
    var user
}

var form = document.querySelector("form");

var users = [];
// user = 0;

// console.log(user);
function UserAccount(email, username, password){
    this.emailAddress = email;
    this.username = username;
    this.password = password;
};

var submitBtn = document.querySelector("input[type='submit']");
submitBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    users.push(new UserAccount(
        form.elements[0].value,
        form.elements[1].value,
        form.elements[2].value
        )
            );    
    console.log(users);
    // user++;
    // for( var i = 0; i < form.elements.length - 1; i++){
    //     console.log(form.elements[i].value);    
    // }
    // console.log(user);
});
// console.log(submitBtn);