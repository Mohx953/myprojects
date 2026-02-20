/*console.log();

window.alert('this is an alert');
window.alert('mahamule ntshangase');
*//*
document.getElementById("myH1").textContent="hello";
document.getElementById("myP").textContent="I like pizza";*/
/*
let fullname="Mahamule";
let age='30';
let student = false;

document.getElementById("p1").textContent=`your name is ${fullname}`;
document.getElementById("p2").textContent=age;
document.getElementById("p3").textContent=student;*/

/*let students=30;
// students +=1;
// students*=2;
// students/=2;
// students**=2;
// students%=2;
// students--;





// console.log(students);
let result =1+2*3+4**2;
console.log(result);*/

// User input
/*
let username;
username = window.prompt("What is your username");
console.log(username);*/
/*
document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent=`Welcome ${username}`;
}
*/
// Type conversion
/*
let age =window.prompt("What is your age");
age = Number(age);
age +=1;
console.log(age, typeof age);*/

// Type conversion
/*
let x ="";
let y="pizza";
let z='';
x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/
/*
const PI = 3.14159;
let radius ;
let circumference;



// radius =window.prompt("Enter the radius of the circle");
radius = Number(radius);

// circumference = 2 * pi * radius;
// console.log(`The circumference of the circle is ${circumference}`);
document.getElementById("mySubmit").onclick=function(){
    radius =document.getElementById("myText").value;
    radius = Number(radius);
circumference = 2 * PI * radius;
document.getElementById("myH3").textContent=circumference + "cm";
}*/

// Counter program
/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countlabel");

let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}*/

/*
let x =3.99;
let y =2;
let z;

z = Math.round(x); //round up
z = Math.floor(x); //round down
z = Math.ceil(x); //round up
z = Math.trunc(y); //
z= Math.pow(x,y); //x to the power of y
z = Math.sqrt(x); //square root of x
z = Math.abs(-x); //absolute value of x
z = Math.max(1,2,3,4,5); //maximum value
z = Math.min(1,2,3,4,5); //minimum value
z = Math.random(); //random number between 0 and 1

console.log(z);*/

// Random Number Generator
/*
let randomNumber = Math.random() * 6; //random number between 0 and 6
randomNumber = Math.floor(randomNumber); //random number between 1 and 6
console.log(randomNumber);
const myBTN = document.getElementById("myBTN");
const mylabel = document.getElementById("mylabel");
const min = 1;
const max = 6;
let randomNum;

myBTN.onclick = function(){
    randomNum = Math.floor (Math.random() * max + min); //random number between 1 and 6
    mylabel.textContent = randomNum;
}*/
// IF statements

// let time =9;

// if (time <12){
//     console.log("Good morning");
// }
// else {
//     console.log("Good afternoon");
// }
// IF statements
/*
let isStudent =false;

if (isStudent){
    console.log("You are a student");
}
else{
    */


let hasLicense = true;
/*
if(age>=16){
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("You have a license");
    }
    else{
        console.log("You do not have a license");
    }
}
else{
    console.log("You are not old enough to drive");
}*/

// Else if statements
/*

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");
let age;
mySubmit.onclick = function(){
age = myText.value;
age= Number(age);
 if (age >=100){
    // console.log("You are too old to enter this site");
    myResult.textContent=`You are too old to enter this site`;
}
else if (age ==0){
    // console.log("You can't enter. You were just born");
    myResult.textContent=`You can't enter. You were just born`;

}
else if(age >=18){
    // console.log("You are an adult");
    myResult.textContent=`You are an adult and can enter this site`;
}
else if(age <0){
    // console.log("Age can't be negative");
    myResult.textContent=`Age can't be negative`;
}
else{
    // console.log("You are a minor");
    myResult.textContent=`You are a minor and cannot enter this site`;
}
}*/

// Checked property
/*
const myCheckbox = document.getElementById("myCheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercard");
const paypalbtn = document.getElementById("paypal");
const mysubmit = document.getElementById("mysubmit");
const myresult = document.getElementById("myresult");
const mypayresult = document.getElementById("payresult");

mysubmit.onclick =function(){
    if(myCheckbox.checked){
        myresult.textContent=`You are subscribed`;
    }
    else{
        myresult.textContent=`You are not subscribed`;
    }
    if(visabtn.checked){
        mypayresult.textContent=`You selected VISA`;
    }
    else if(mastercardbtn.checked){
        mypayresult.textContent=`You selected Mastercard`;
    }
    else if(paypalbtn.checked){
        mypayresult.textContent=`You selected PayPal`;
    }
    else{
        mypayresult.textContent=`You did not select a payment method`;
    }
}
    */

// ternary operator    ?
// let age = 21;
// let status = age >= 18 ? "You are an adult" : "You are a minor";

// let time = 16;
// let greeting = time < 12 ? "Good morning" : time < 18 ? "Good afternoon" : "Good evening";


// console.log(greeting);

// let isstudent = false;
// let message = isstudent ? "You're a students" : "Youre not a students";
// console.log(message);
/*
let purchaseAmount = 150;
let discount = purchaseAmount > 100 ? 0.1 : 0;
console.log(`Your total is E: ${purchaseAmount - (purchaseAmount * discount)}`);*/

// Switches
/*
let day = 9;

switch(day){
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
    default:
            console.log(`${day} is an invalid day`);
}

let score = 9;
let lettergrade;

switch(true){
    case score >= 90:
        lettergrade = "A";
        break;
    case score >= 80:
        lettergrade = "B";
        break;
    case score >= 70:
        lettergrade = "C";
        break;
    case score >= 60:
        lettergrade = "D";
        break;

    default:
        lettergrade = "F";
    
}
console.log(lettergrade);*/

// String methods
/*
let username = "     Mahamule";
// console.log(username.length); //length of the string
username = username.toUpperCase();
username=username.toLowerCase();
username = username.repeat(3);
let result = username.startsWith("-");
console.log(result);*/

// String slicing
/*
const fullnam = "Mahamule Ntshangase";
let firstname = fullnam.slice(0, 7);
let lastname = fullnam.slice(4, 0);
console.log( lastname);*/

// Strict equality

// number guessing game
/*
const minnum = 50;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minnum + 1) + minnum);
console.log(answer);

let attemps=0;
let guess;
let running = true;

while(running==true){
    guess = window.prompt(`Guess a number between ${minnum} - ${maxnum}`);
    guess = Number(guess);
    console.log(typeof guess, guess);

    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }
    else if(guess<minnum || guess > maxnum){
        window.alert(`Please enter a number between ${minnum} - ${maxnum}`);
    }
    else {
        attemps++;
        if (guess<answer){
            window.alert(`Too low! Try again`);
        }
        else if(guess>answer){
            window.alert(`Too high! Try again`);
        }
        else {
            window.alert(`Correct, the ansser was ${answer}. You guessed it in ${attemps} attemps!`);
            running=false;
        }
    }
    
}*/

// Functions
/*
function happybirthday(username, age){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log(`Happy birthday dear ${username }`);
    console.log("Happy birthday to you");
    console.log(`You're ${age} years old`);
}

happybirthday(`Mahamule`, 22);*/
/*
function add(x, y){
let result = x + y;
return result;
}
let answer = add(2, 3);
// console.log(answer);
console.log(add(5, 10));*/

// temperature converter
/*
const textbox = document.getElementById("textbox");
const tofr = document.getElementById("toFR");
const tocel = document.getElementById("toCF");
const result = document.getElementById("result");
let temp;


function convert(){
    if(tofr.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 +32;
        result.textContent = temp.toFixed(1) + "°F";

    }else if(tocel.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(1) + "°C";
    }else {
        result.textContent=`Please select a conversion type`;
    }

}*/

// Spread operator
/*
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers);*/

// Rest parameters
/*
function openFridge(...foods){
    console.log(...foods);
}

function toGetFood(...foods){
    return foods;

}
const food1 = "Pizza";
const food2 = "Burger";
const food3 = "Pasta";


// openFridge(food1, food2, food3);
const foods = toGetFood(food1, food2, food3);
console.log(foods);*/
/*
function sum(...numbers){
    let result =0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log(`Your total is $${total}.00`);
function combineString(...strings){
    return strings.join(" ");
}
const fullname = combineString("Hello", "World", "from", "JavaScript");
console.log(fullname);*/

function rollDice(){
  const numofdice = document.getElementById("numofdice").value;
  const diceresult =document.getElementById("result");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for(let i=0; i<numofdice; i++){
    const value = Math.floor(Math.random() *6) +1;
    // console.log(value);
    values.push(value);
    images.push(`<img src="dice_images/${value}.png">`);
  }
//   console.log(values);
diceresult.textContent=`dice: ${values.join(', ')}`;
diceImages.innerHTML=images.join('');
}