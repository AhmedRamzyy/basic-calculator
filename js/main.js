
var numOne = document.getElementById("num_one");
var numTwo = document.getElementById("num_two");
var answer = document.getElementById("result");

var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var divideButton = document.getElementById("divide");
var multiplyButton = document.getElementById("multiply");

function add(){
    var one = parseFloat(numOne.value) || 0 ;
    var two = parseFloat(numTwo.value) || 0  ;

    answer.innerHTML = "Answer: " + (one+two);
}
function subtract(){
    var one = parseFloat(numOne.value) || 0  ;
    var two = parseFloat(numTwo.value) || 0  ;

    answer.innerHTML = "Answer: " + (one-two);
}
function multiply(){
    var one = parseFloat(numOne.value) || 0  ;
    var two = parseFloat(numTwo.value) || 0  ;

    answer.innerHTML = "Answer: " + (one*two);
}
function divide(){
    var one = parseFloat(numOne.value) || 0  ;
    var two = parseFloat(numTwo.value) || 0  ;

    answer.innerHTML = "Answer: " + (one/two);
}
