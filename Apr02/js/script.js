// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pClasslast = document.querySelector('.p:last-of-type');
// console.log(pClasslast);
// pClasslast.style.fontSize = '28px';

// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.color = 'red';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);
// pByClassname[0].style.fontSize = '48px';

// var pByTagname = document.getElementsByTagName('p');
// console.log(pByTagname);
// // pByTagname[9].style.color = 'yellow';
// console.log(pByTagname.length);


//for loop
// for(var i = 0; i < 10; i++){
//     pByTagname[i].style.color = 'red';
//     console.log(i);
// }

// var myName = "Wilbert";
// console.log(myName);

// for(var i = 0; i < myName.length; i++){
//     console.log(myName[i]);
// }

// getName();

// function getName(){
//     var userName = prompt("whats your first name?");
//     var lastName = prompt("whats your last name?");
//     var fullName = `${userName} ${lastName}`;
//     cycName(fullName); /* Argument  */
// }

// // -------------|var does not care|
// function cycName(z){ /*  Parameter  */
//     for(var i = 0; i < z.length; i++){
//         console.log(z[i]);
//         // console.log(i);
//     }
// }

//get user two numbers

// function getUserNums(){
//     var num1 = prompt("please enter a number");
//     var num2 = prompt("please enter another number");
//     addUserNums(num1, num2);
// }

// getUserNums();

//alert add numbers
// function addUserNums(x, y){
    // console.log(arguments);
    // alert(parseInt(x) + parseInt(y));
// }

getColors();

function getColors(){
    var userColor1 = prompt("pick a color");
    var userColor2 = prompt("pick another color");
    var userColor3 = prompt("pick your last color");
    useColor(userColor1, userColor2, userColor3);
}

function useColor(col1, col2, col3){
    console.log(arguments);
    var paragraph = document.querySelectorAll(".color");
    console.log(paragraph);
    for (var i = 0; i < paragraph.length; i++){
        paragraph[i].style.color = arguments[i];
    }
}