$(document).ready(function(){
"use stritct";

var simonSequence = [];
var playerSequence = [];

function simonGeneratesSequence(){
	var maxNumber = 4;
	var simonButtons = $('.simon-button'); //store the entire DIV in simonButtons -jQuery
	var randomNumber;
	
	var randomNumber = Math.floor(Math.random() * maxNumber);

	var randomColor = simonButtons[randomNumber];

	$("#player-messages").fadeIn(3000, function() {
    	$("#player-messages").html("Simon's Turn")
  	});

	$(randomColor).animate({
				opacity: 0.50
			}, 750).animate({
				opacity: 1.0
			}, 750, function () {
				//push the color into the simonSequence array
				simonSequence.push(randomNumber);
				console.log ("simonSequence array: " + simonSequence);
			});
	// return simonButtons[randomNumber]; //Returns DIV 0..3 depending on the random #-JavaScript
}

function playerMatchesSequence(){
	//allow the player to enter values within 10 seconds otherwise they are doomed
	var buttonClicked;

	$("#player-messages").fadeIn(5000, function() {
    	$("#player-messages").html("Player's Turn")
  	});

	$(".simon-button").click( 
		function(event) {
			//This pushes the item twice into the array???
			buttonClicked = $(this).attr("data-button-number");

			$(this).animate({
				opacity: 0.50,
			}, 500).animate ({
				opacity: 1.0,
			}, 500, function () {
				playerSequence.push(buttonClicked);
				console.log ("playerSequence array: " + playerSequence);
			});
			event.stopPropagation();

		}
	);		
}

function matchingSequences(){
	console.log("matching sequences function");
	//make the comparison with simonArray
	if (playerSequence[playerSequence.length-1] === simonSequence[simonSequence.length-1]){
		// var confirmed = confirm ("Are you ready for the next round?");
		console.log("player pressed correct color");
		return true;
	} else {
		console.log ("You lost, press start to try again!");
		return false;
	};
}

function updateRoundCounter (currentRound) {
	$('#dynamic-round-number').html(currentRound++);
	return currentRound++;
}

$(".start-button").click(
function(event) {
	var playerIsAwesome = true;
	var round = 1;
	// do {
		//simon turn
		simonGeneratesSequence();

		//player turn
	    playerMatchesSequence();
    	event.stopPropagation();


	    //verify that the sequences match
	    playerIsAwesome = matchingSequences();
	    if (playerIsAwesome === true){
	    	round = updateRoundCounter(round);
	    }
	    else {
	    	simonSequence = [];
			playerSequence = [];
			round = 1;
			playerIsAwesome = true;
	    }

		//play the sequences again with another round

	// } while (playerIsAwesome  == true);		
});




});