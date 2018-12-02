// https://www.geeksforgeeks.org/javascript-math-random-function/

var min=4; 
var max=5;  
var random = Math.random() * (+max - +min) + +min; 
document.write("Random Number Generated : " + random );  