$(document).ready(function() {
	
	//declares all variables
	var userGuess, 
		answer,
		guessCount

		$("#newGame").click(function() {
		resetGame();
		});

		$("#submit").click(function() {
		userGuess = $("#inputBox").val();
		console.log(userGuess);
		checkGuess(userGuess);
		$("#guesses p").html(userGuess);
		});
		
		var resetGame = function() { 
		randomNumber=Math.floor(Math.random()*100); //generates my random number between 0 - 100
		console.log(randomNumber);
		$("#inputBox").val("");
		$("#guesses p").html("");
		$("#message").html("Do you feel lucky?");
		guessCount = 0;
		};

		function setCount(count) {
		$('#guesses').text(guessCount);
		};

	var checkGuess = function(userGuess) {
		var difference = Math.abs(randomNumber - userGuess);
		if (isNaN(userGuess)) {
			$("#message").html("enter a valid number");

		} else if (userGuess < 1 || userGuess > 100){
			$("#message").html("enter a number between 1 and 100");
		} else {
			guessCount++;
			setCount(guessCount);
			$("ul#guessList").append("<li>" + userGuess + "</li>");
			$("#inputBox").val("");

			if (userGuess == randomNumber) {
				$("#message").html("you won...").css("color", "black")
			} else if (difference < 5) {
				$("#message").html("very warm...").css("color", "red")
			} else if (difference < 10) {
				$("#message").html("warm...").css("color", "orange")
			} else if (difference < 20) {
				$("#message").html("cold...").css("color", "#00bfff")
			} else {
				$("#message").html("freezing...").css("color", "blue")
				
			}
		}
	};
		resetGame();

});


