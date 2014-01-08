$(document).ready(function() {
	var userGuess,
		answer,
		numberOfGuesses = 0, //declares all variables
		randomNumber=Math.floor(Math.random()*100); //generates my random number between 0 - 100

console.log("You have guessed " + userGuess, answer, numberOfGuesses, randomNumber);

$("#newGame").click(function() {
	// $("#inputBox").innerHTML;
	// console.log($("#inputBox").innerHTML);
	// console.log(document.getElementById("inputBox").value);
	$("#inputBox").val("");
	$("#guesses").html("");
	$("#message").html("Do you feel lucky?");
	numberOfGuesses = 0;

});



$("#submit").click(function() {
	userGuess = $("#inputBox").val();
	console.log(userGuess);
	numberOfGuesses++;
	console.log(numberOfGuesses);
});

});


