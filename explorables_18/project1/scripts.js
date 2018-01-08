// alert("Hello Craig!");

console.log("Hello again");

var me = "Craig";

var buttonOne = document.getElementById('button-one');
console.log(buttonOne);

var doSomething = function(){
	alert("You clicked Act 1!");
};

buttonOne.addEventListener("click", doSomething);