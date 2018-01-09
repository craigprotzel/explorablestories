// alert("Hello Craig!");

console.log("Hello again");
/*
var me = "Craig";

var buttonOne = document.getElementById('button-one');
// var doSomething = function(){
// 	var theInstructions = document.getElementById('instruction');
// 	theInstructions.innerHTML = "Yeah!!!";
// };

buttonOne.addEventListener("click", function(evt){
	console.log(evt);
	var theInstructions = document.getElementById('instruction');
	theInstructions.innerHTML = "Yeah!!!";
});


var buttonTwo = document.getElementById('button-two');
var doSomethingTwo = function(){
	var theInstructions = document.getElementById('instruction');
	theInstructions.innerHTML = "Yeah 2!!!";
};
buttonTwo.addEventListener("click", doSomethingTwo);


var buttonThree = document.getElementById('button-three');
var doSomethingThree = function(){
	var theInstructions = document.getElementById('instruction');
	theInstructions.innerHTML = "WooHoo 3!!!";
};
buttonThree.addEventListener("click", doSomethingThree);
*/

$("#button-one").click(function(){
	//update page for button one
	console.log("Button One was pressed!");
	$(".content").hide();
	$("#content-one").show();
});

$("#button-two").click(function(){
	//update page for button two
	console.log("Button Two was pressed!");
	$(".content").hide();
	$("#content-two").show();
});

$("#button-three").click(function(){
	//update page for button three
	console.log("Button Three was pressed!");
	$(".content").hide();	
	$("#content-three").show();
});


