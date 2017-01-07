console.log("Loaded!");

// var showTheText = function(){
// 	// $('#button1-text')
// 	console.log("Please show the text");
// };

// buttonOne.click(showTheText);

var buttonOne = $('#button1');
buttonOne.click(function(){
	console.log("Please show the text!");
	$('.content').hide();
	$('#button1-text').show();
});

var buttonTwo = $('#button2');
buttonTwo.click(function(){
	$('.content').hide();
	$('#button2-text').show();
});

var buttonThree = $('#button3');
buttonThree.click(function(){
	$('.content').hide();
	$('#button3-text').show();
});