$(document).ready(function(){
"use stritct";

var simonSequence = [];
var playerSequence = [];
var userActive = false;
var round = 0;
var index = 0;

function simonGeneratesSequence(){
	var maxNumber = 4;
	var simonButtons = $('.simon-button'); //store the entire DIV in simonButtons -jQuery
	var randomNumber;
	var index = 0;

	updateRoundCounter();
	
	var randomNumber = Math.floor(Math.random() * maxNumber);
	var randomColor = simonButtons[randomNumber];

	//simon's turn message
	$("#player-messages").fadeIn(3000, function() {
    	$("#player-messages").html("Simon's Turn");
  	});

	//push the color into the simonSequence array
	simonSequence.push(randomNumber);
	console.log ("simonSequence array: " + simonSequence);

	//animates the simon sequence
	simonSequence.forEach(function(arrayValue, index){
		setTimeout(function(){
			$("[data-button-number='"+ arrayValue + "']").animate({
				opacity: 0.50
			}, 50).animate({
				opacity: 1.0
			}, 1000);
		}, index * 1000);
	});

	//delay the players turn message	
	setTimeout(function (){
		$("#player-messages").fadeIn(5000, function() {  
			$("#player-messages").html("Player's Turn")
		});
	}, simonSequence.length * 1000);
	
	//user's turn
	userActive = true;
	// return simonButtons[randomNumber]; //Returns DIV 0..3 depending on the random #-JavaScript
}

function matchingSequences(userClicked){
	//make the comparison with simonArray

	console.log (simonSequence);
	console.log (simonSequence[index]);
	console.log (userClicked);
	//check equality of arrays
	if (simonSequence[index] != userClicked) {
		//simon's turn message
		$("#player-messages").fadeIn(3000, function() {
    		$("#player-messages").html("Game Over!");
  		});
		console.log ("You lost, press start to try again!");
		userActive = false;
		simonSequence = [];
		playerSequence = [];
		round = 0;
		index = 0;
	} else {
		console.log("Player pressed correct color"); //continue
		index++;
	}

	//next round
	if ((index == simonSequence.length) && (userActive == true))
	{
		index = 0;
		playerSequence = [];
		setTimeout(function(){
			simonGeneratesSequence();
		}, 1000);
	}
	console.log ("<br");
}

function updateRoundCounter () {
	round = round + 1;
	$('#dynamic-round-number').html(round);
}

$(".start-button").click(
function() {
	simonGeneratesSequence();
});

$(".simon-button").click( 
	function(event) {
		var buttonClicked;

		if (userActive === true){
			
			buttonClicked = parseInt($(this).attr("data-button-number"));

			//animates the button clicked and pushes into playerSequence array
			$(this).animate({
				opacity: 0.50,
			}, 500).animate ({
				opacity: 1.0,
			}, 500, function () {
				playerSequence.push(buttonClicked);
				console.log ("playerSequence array: " + playerSequence);
				//verify that the sequences match
				matchingSequences(buttonClicked);
			});
		}
});
});