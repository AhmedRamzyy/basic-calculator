var numOne = document.getElementById("num_one");
var numTwo = document.getElementById("num_two");
var answer = document.getElementById("result");

var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var divideButton = document.getElementById("divide");
var multiplyButton = document.getElementById("multiply");

function add() {
    var one = parseFloat(numOne.value) ;
    var two = parseFloat(numTwo.value) ;
    if (isNaN(one) === true || isNaN(two) === true ) {
        answer.innerHTML = "You Must Enter A Number " ;
    }else{
        answer.innerHTML = "Answer: " + (one + two);
    }
}

function subtract() {
    var one = parseFloat(numOne.value) ;
    var two = parseFloat(numTwo.value) ;
    if (isNaN(one) === true || isNaN(two) === true ) {
        answer.innerHTML = "You Must Enter A Number " ;
    }else{
        answer.innerHTML = "Answer: " + (one - two);
    }
}

function multiply() {
    var one = parseFloat(numOne.value) ;
    var two = parseFloat(numTwo.value) ;
    if (isNaN(one) === true || isNaN(two) === true ) {
        answer.innerHTML = "You Must Enter A Number " ;
    }else{
        answer.innerHTML = "Answer: " + (one * two);
    }
}

function divide() {
    var one = parseFloat(numOne.value) ;
    var two = parseFloat(numTwo.value) ;
    if (isNaN(one) === true || isNaN(two) === true )  {
        answer.innerHTML = "You Must Enter A Number " ;
    }else if(two === 0){
        answer.innerHTML = "Cannot Divide By Zero" ;
    }else{
        answer.innerHTML = "Answer: " + (one / two);
    }
}
