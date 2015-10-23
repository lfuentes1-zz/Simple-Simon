(function (){
"use stritct";

// var randomColor = "";
var simonSequence = [];
var userSequence = [];


var simonColorGenerator = function (){
	var maxNumber = 4;
	var simonButtons = $('.simon-button'); //store the entire DIV in simonButtons -jQuery
	var randomNumber;
	

	var randomNumber = Math.floor(Math.random() * maxNumber);
	console.log(randomNumber);
	// console.log(simonButtons[randomNumber]);

	var randomColor = simonButtons[randomNumber];
	$(randomColor).animate({
				opacity: 0.50,
			}, 250, function () {
				// console.log ($(randomColor)); 
				// console.log ($(randomColor($("#simon-red").html() )));

				//push the color into the simonSequence array
				// simonSequence.push (randomColor.getAttribute('id')); //pushes to the end of the array
				simonSequence.push(randomNumber);
	});
	//not sure if I need the return value anymore
	return simonButtons[randomNumber]; //Returns DIV 0..3 depending on the random #-JavaScript
}

var userMatchesSequence = function (){
	//allow the user to enter values within 10 seconds otherwise they are doomed

	//store the value
	$("id").click(
		function() {
			$(this).animate({
				opacity: 0.50,
			}, 250).animate ({
				opacity: 1.0,
			}, 250);

			userSequence.push();
		}
	);		

	//make the comparison with simonArray
	//perform necessary actions depending on true or false - for false alert the user
	//return true or false - don't have a return statement inside an annonymous function
}




$("start-button").click(
function() {
	//can use $(this).function() when needed
	var userIsAwesome = true;
	var round = 1;

	// do {
		//computer turn
		randomColor = simonColorGenerator(); //not sure I need a return value right here

		//users turn
		userIsAwesome = userMatchesSequence (); //returns true if matching sequence; false otherwise

		//increase the round if successful
		round++;

		


		// users turn
	// } while (userIsAwesome  == true);		

});






//Event Handler - fade the color in and out if mouse enters the shape
// $(".simon-button").hover(
// 	function() {
// 		$(this).animate({
// 			opacity: 0.50,
// 		}, 250, function () {
// 			//Do nothing
// 		});

// 	}, function(){
// 		$(this).animate({
// 			opacity: 1.0,
// 		}, 250, function () {
// 			//Do nothing
// 		});
// 	}
// );

})();