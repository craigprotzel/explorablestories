console.log("Loaded!");

//Make sure the doucment is fully loaded
$(document).ready(function(){
	//Click event for button 1
	$('#sketch-1-button').click(function(){
		$('.sketch-1').toggle();
	});

	//Click event for button 2
	$('#sketch-2-button').click(function(){
		$('.sketch-2').toggle();
	});
});