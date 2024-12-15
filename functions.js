// FUNCTIONS 
// () >>>> pranthesis
// functionality 6 
//function addition () {
   // var a = 10;
  //  var b = 15;
 //  var c = a + b;
  //  console.log(c);
//}

//addition();
//addition();
//addition();
//addition();
//addition();
// fahrenheit to celsius 
// Non parametric function 
//function toCelsius(){
   // var F = 98;
  //  var x = (5/9) * (F - 32);
  //  console.log(x);
//}
//toCelsius();
// parametric function 
// function toCelsius (F){
  //return (5/9) * (F - 32);
//}
// 1st method 
//console.log(toCelsius(98));
// 2nd method 
//var value = toCelsius(98);
//console.log(value);
// parameter ki value tb deni hai jb hm function ko call kren gy 
// Task 
// celcius to fahrenheit 
//function tofahrenheit(C){
    // var C = 37;
  //  var F = (9/5) * C + 32;
  //  console.log(F);
//}
//tofahrenheit(37);
//tofahrenheit(40);
//tofahrenheit(57);

// TASK  
// non parameteric or parametric 
// to fahrenheit function 
// WebDev = i am a web developer;

// // parametric function 
// function toCelsius(F){
//   return (5/9) * (F - 32);
// }

// var count = 0;

// function myCount() {
//   count  ++;
//  console.log("Button clicked " + count + "times.");
// }


// functionality 6 lines


// var count  = 0;
// function myCount() {
//   count ++;
// console.log(count);
//  }

// myCount();
// NESTED FUNCTIONS
//function outerFunction(){

 // console.log("This is an outer function");
 // function innerFunction(){
 //   console.log("This is my inner function");
 // }
 // innerFunction();


//}
//outerFunction();
// You cant inner function out of outerfunction.
//function add(){
  //var a = 10;
  //var b = 20;
  //var c = a + b;
//}
//function addition(a,b){
  //c = a + b;
  //innerHeight();  // callback 
  //}


// _____________________________________________________
 // DICTIONARY
//var dictionary = {
//    peregrinate : "To travel or wander around from place to place.",
//    sesquipedalian : "Long and characterized by the use of long words; or , a person who uses long words." , 
//    Ephemeral : "Lasting for a very short time; fleeting.",
//    Antediluvian : "Extremely old, outdated, or from before the biblical flood; ancient.",
//    Cacophony : "A harsh, discordant mixture of sounds."
 //}
 //console.log(dictionary.peregrinate);
 //console.log(dictionary.sesquipedalian);
 //console.log(dictionary.Ephemeral);
 //console.log(dictionary.Antediluvian);
 //console.log(dictionary.Cacophony);
// _________________________________________________________________________________-


// A function that takes a callback function as an argument 
//function greet(name, callback) {
  //console.log("hello " + name);
 // callback(); // calling the callback function after greeting 
//}

// Callback function 
//function sayGoodbye(){
//  console.log("Goodbye!");
//}

// Passing the sayGoodbye function as a callback to greet 
//greet("NAQEEB", sayGoodbye);

// LOOPS
 //console.log(1);
 //console.log(2);
 //console.log(3);
 //console.log(4);
 //console.log(5);
 //console.log(6);
 //console.log(7);
 //console.log(8);
 //console.log(9);
 //console.log(10);


// FOR LOOPS 
//for(inialization ; condition ; increament ) {
  //console.log();
//}

//for( let i = 0; i <= 500 ; i++) {
  //console.log(i);
//}


//var array = ['Vidura', 'Wila', 'Finrod', 'Vaemond', 'Dranreb', 'Balzarina', 'Petruchio', ' Fridli' ];
 //console.log(array[0] );
 //console.log(array[1] );
 //console.log(array[2] );
 //console.log(array[3] );
 //console.log(array[4] );
 //console.log(array[5] );
 //console.log(array[6] );
 //console.log(array[7] );

 //for(let i = 0; i <= array.lenth; i++){
   // console.log([array[i]]); 
 //}



//function loop(){
  //for(let i = 0; i<= array.length; i++){
    //console.log([array[i]]);
  //}
//}
//loop();
// DOM Manipulation

//   function dark() {
//    document.body.style.backgroundColor = 'black';
//   }

//   function light() {
//      document.body.style.backgroundColor = 'pink';
//    }

//   function grey() {
//    document.body.style.backgroundColor = 'grey';
//  }

// document.getElementsByTagName('h1')[0].innerHTML = 'I am a 1st heading';
// getElementsByTagName, attribute of getElementByID >>> innerHTML (jo bhi us mai likha hai usy change kr do)

// START
//  console.log("p");
//  alert("N4UR6");
//  var a = 20;
//  var b = 45;
//  var c = a + b;
//  document.write(c);
 // accessing through id and class 
//  document.getElementById('secondH1').innerHTML = "I am a second heading";
//  document.getElementsByClassName('thirdH1')[0].innerHTML = "I am a third heading";



// 3 ways 
// getElementById("  idExample ")
// getElemetByClassName("   ")
// getElementByTagName("    ")
// document.getElementById("idElement").innerHTML="h3 tag" ;
// document.getElementsByClassName(".classExample")[0].innerHTML = "h2 tag"  ;
// document.getElementsByTagName("h1").innerHTML = "h1 tag" ;
// SAME AS 
//  document.querySelector(" #idElement ").innerHTML = "h3 tag" ;
//  document.querySelector(" .classExample ").innerHTML = "h2 tag";
//  document.querySelector(" h1 ").innerHTML = "h1 tag";

// DIFFERENCE BETWEEN QUERYSELECTOR AND QUERYSELECTORALL 

// var query = document.querySelector(".classExample");
// console.log(query);

// var queryALL = document.querySelectorALL(".classExample");
// console.log(queryALL);

// var query = document.querySelector("#idExample");
// console.log(query)


// var className = document.getElementsByClassName("classExample")[2];
// console.log(className);
// var className = document.getElementById("idExample")[3]
//   console.log(className);
//   //  BOTH  ARE SAME 

//  var queryAll = document.querySelectorAll(".classExample");
// console.log(queryAll);



// function abc (){
//   var  accessingH1  = document.getElementsByTagName("h1")[0].innerHTML = "javascript";
//   console.log(accessingH1);
// }


// var attributeImg = document.getElementsByTagName("img")[0].getAttribute("src");
// console.log(attributeImg);


// var setImgSrc = document.getElementsByTagName("img")[0].setAttribute(  "src"  , "https://media.istockphoto.com/id/1202870693/photo/future-artificial-intelligence-robot-and-cyborg.jpg?s=612x612&w=0&k=20&c=Y1e8NLCRVg-_AM2JBv0NLQjJZo5gGfaO4mVsojNywFE="  );

// document.getElementsByTagName("img")[0].getAttribute("height" , "500px");
// // console.log(document.getElementsByTagName("h1")[0].getAttribute("class"));
// console.log(document.getElementsByTagName("img")[0].getAttribute("height"));




// var inputField = document.getElementsByTagName("input")[0].getAttribute("placeholder");
// var value = document.getElementsByTagName("input")[0].getAttribute("value");
// var type  = document.getElementsByTagName("input")[0].getAttribute("type");
// console.log(inputField);
// console.log(value);
// console.log(type);




//  Value
//  var inputvalue = document.getElementsByTagName("input")[0].value;
  // document.write(inputValue.value);
// window.addEventListener('load' , function() {
//   var inputValue = document.getElementsByTagName("input")[0];
//   this.document.write(inputValue.value);
// });




// var gettingPlaceholder = document.getElementsByTagName("input")[0].placeholder;
// // .getAttribute("placeholder");
// // var changeValue = document.getElementByTagName("input")[0].setAttribute("placeholder"  , "I am a placeholder");
//  console.log(gettingPlaceholder);



// //  function inputFieldValue(){
// // var value = document.getElementsByTagName("input")[0].value;
// // document.getElementsByTagName("p")[1].innerHTML = value;
//  // console.log(value);
//  // }  



//  var basicButton  =document.getElementById("basicButton");

//  basicButton.addEventListener("click" , function inputFieldValue() {
//   var value = document.getElementsByTagName("input")[0].value;
//   document.getElementsByTagName("p")[1].innerHTML = value;
//   // console.log(value);
//   }
// );



var basicButton = document.getElementsByTagName('button')[0];
basicButton.addEventListener("click" , function newFruit(){
var newFruit = document.createElement("li");
newFruit.innerHTML =  document.getElementsByTagName("input")[0].value;
var parent = document.getElementsByTagName("ul")[0];
parent.appendChild(newFruit)});



//  var newFruit = document.createElement("li");
//  newFruit.innerHTML = "watermelon";
//  var parent = document.getElementsByTagName("ul")[0];
//  parent.appendChild(newFruit);

// assignment : appendChild  ...removeChild ()
// input field value get 
// getAttribute  ....

// 2 way >> getAttribute("attributeName") ..... dot(.)attributeName
// addEventListener ( "konsa event", "function kya perform ho")
// 2nd parameter function hai lekin usy define bhi 2nd parameter mai hee krna hoga 



// var button = document.getElementsByTagName("button")[0];
// button.addEventListener(  "click" , function changeCSS(){
//       document.getElementsByTagName("p")[0].style.backgroundColor = "yellow";
//       document.getElementsByTagName("p")[0].style.fontsize =
//       "50px ";
//     }
// )

// var button = document.getElementsByTagName("button")[1];
// button.addEventListener("click", function changeCSS(){;
//       document.getElementsByTagName("p")[0].style.backgroundColor = "white";
//       document.getElementsByTagName("p")[0].style.fontsize = "16px ";
//     }
//       )


//   function  () {
//    const circle = document.getElementById("triangle");
// /   circle.classList.("triangle");
//   }



// const button = document.getElementById("hoverButton");

// button.addEventListener("mouseover" , function () {
//   button.classList.add("hover-style");
// });
// button.addEventListener("mouseout" , function () {
//   button.classList.remove("hover-style");
// });





// two event 
// click , mouseover , mouseout , input
// add and remove class  ....  html mai class add hori hai jb k nhi ki 




// input event addEventListener()
// document.getElementById("colorPicker").addEventListener("input" , function (event) {
//   const box = document.getElementById("dynamicBox");
//   box.style.backgroundColor = event.target.value;
// });




// var value = document.getElementsByTagName('input')[0].value;
//  document.getElementsByTagName('div')[0].style.backgroundColor = value;


//    function ChangeColor () {
//     var value = document.getElementsByTagName('input')[0].value;
//     document.getElementsByTagName('div')[0].style.backgroundColor = value;
   
//    }

// var basicButton = document.getElementsByTagName('button')[0];
// basicButton.addEventListener("click" , function() {
  //  var value = document.getElementsByTagName("input")[0].value;
  // document.getElementsByTagName('div')[0].style.backgroundColor = value;
// }
 // )


//  var value = document.getElementsByTagName("input")[0].value;
//   document.getElementsByTagName('div')[0].style.backgroundColor = value;
