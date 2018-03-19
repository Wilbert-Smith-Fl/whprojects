document.getElementById('btn2').style.color = "red";
document.getElementById('btn2').style.fontSize = "32px";
document.getElementById('btn2').style.backgroundColor = "black";


console.log('first console message Woohoo!');
console.info('this is info');
console.warn('Danger will Robinson');
console.error('this computer will now self destruct.');


// Browser Alert
// alert('Here is my pop up.');

// var userResult = confirm('warning if you continue you agree to our terms and services.');

// Browser Confirm Box
// console.log(userResult);

//browser prompt boxes.
// var userName = prompt("What is your name?");
// console.log(userName);

/*  variables
    Must start with lower case!
    must start with a letter.
    can contain underscores
    cannot have a hyphen (-)
    May use camelCasing
 */
var username; 
var room1;
var user_name;
var userName;
var theUsersFirstNameOnly;

var age = 27;
var decade = 10;
var double = 2;
var fourth = 4;
var newAge = ((age + decade) * double) / fourth;

console.log(newAge);
console.log(age+decade);
// var stringage = "27";

// concantination

// var firstName = prompt("what is your first name?");
// var lastName = prompt("what is your last name?");
// alert(firstName + " " + lastName);

// // interpalation  ${variable}

// alert(`${firstName} ${lastName}`);

// prompt user for: 
// make of vehicle
// year
// color
// confirm the result

// 3 new variable
//formatting: color, year, make

function getUserVehicle(){
    var vehicleColor = prompt("what color is your vehicle?");
    var vehicleYear = prompt("what year is your vehicle?");
    var makeOfVehicle = prompt("what is the make of your vehcile?");

    var userCar = `make sure that this ${vehicleColor}, ${vehicleYear} ${makeOfVehicle} is your car.`;

    // confirm(`are you sure that this ${userCar} is your vehicle?`);
    confirm(userCar);
}

function primaryUser(){
    var first = prompt("what is your first name?");
    var last = prompt("what is your last name?");
    var birth = prompt("where were you born?");

    document.getElementById('primaryUser').innerHTML = `Hello ${first}, I would like to say that ${last} is a nice last name. It is also nice to know that you were born in ${birth}. I hope you have a nice day.`
}

function userGames(){
    var game1 = prompt("whats the first game you like?");
    var game2 = prompt("whats another game you like?");
    var game3 = prompt("lastly I need one more game you like?");

    document.getElementById('userGames').innerHTML = `Oh ${game1} I know that game. I heard that it was fun! I don't know about ${game2} though. I heard that it was not fun, but ${game3} is a lot of fun. video games are fun to play.`
}

function userCharacter(){
    var char1 = prompt("first fictional character you like");
    var char2 = prompt("a character that you despise");
    var char3 = prompt("another character that you like.");

    document.getElementById('userCharacter').innerHTML = `The wind was blowing on this cold snowy mountain top as ${char1} walks through the howling winds. ${char1} looked at their surroundings watching carefully aware that someone was watching them. Then from under the snow ${char2} comes up and swings at ${char1} trying to make a finishing blow. Then as ${char1} struggles against ${char2}, ${char3} comes out of no where saving the day.`
}