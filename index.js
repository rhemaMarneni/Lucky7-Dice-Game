var currBalance = 2000;
var range = 0;

function startOver() {
	currBalance = 2000;
	document.getElementById("bal").innerHTML =
		"Your Current Balance is: " + currBalance + " coins";
	range = 0;
	document.getElementById("first").classList.remove("bet-btn-inactive");
	document.getElementById("first").classList.remove("select-btn");
	document.getElementById("second").classList.remove("bet-btn-inactive");
	document.getElementById("second").classList.remove("select-btn");
	document.getElementById("third").classList.remove("bet-btn-inactive");
	document.getElementById("third").classList.remove("select-btn");
	document.querySelector(".result").innerHTML = "Start when you are ready!";
}

function betFirst() {
	document.getElementById("first").classList.toggle("select-btn");
	if (document.getElementById("first").classList.contains("select-btn")) {
		range = 1;
		document.getElementById("second").classList.remove("select-btn");
		document.getElementById("third").classList.remove("select-btn");
	} else {
		range = 0;
	}
}

function betSecond() {
	document.getElementById("second").classList.toggle("select-btn");
	if (document.getElementById("second").classList.contains("select-btn")) {
		range = 2;
		document.getElementById("first").classList.remove("select-btn");
		document.getElementById("third").classList.remove("select-btn");
	} else {
		range = 0;
	}
}

function betThird() {
	document.getElementById("third").classList.toggle("select-btn");
	if (document.getElementById("third").classList.contains("select-btn")) {
		range = 3;
		document.getElementById("second").classList.remove("select-btn");
		document.getElementById("first").classList.remove("select-btn");
	} else {
		range = 0;
	}
}

function rollTheDice() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	document
		.getElementsByTagName("img")[0]
		.setAttribute("src", "./images/dice" + randomNumber + ".png");
	return randomNumber;
}

function gamePlay() {
	if (currBalance === 0) {
		endGame();
	}
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	document
		.getElementsByTagName("img")[0]
		.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;
	document
		.getElementsByTagName("img")[1]
		.setAttribute("src", "./images/dice" + randomNumber2 + ".png");
	sumval = randomNumber1 + randomNumber2;
	currBalance -= 500;

	if (range === 1) {
		if (sumval >= 2 && sumval <= 6) {
			currBalance += 1000;
			document.querySelector(".result").innerHTML = "Yay! What a guess";
			document.getElementById("bal").innerHTML =
				"Your Current Balance is: " + currBalance + " coins";
		} else {
			document.querySelector(".result").innerHTML = "Bad Guess :(";
			document.getElementById("bal").innerHTML =
				"Your Current Balance is: " + currBalance + " coins";
		}
	} else if (range === 2) {
		if (sumval === 7) {
			currBalance += 1000;
			document.querySelector(".result").innerHTML = "Yay! What a guess";
			document.getElementById("bal").innerHTML =
				"Your Current Balance is: " + currBalance + " coins";
		} else {
			document.querySelector(".result").innerHTML = "Bad Guess :(";
			document.getElementById("bal").innerHTML =
				"Your Current Balance is: " + currBalance + " coins";
		}
	} else if (range === 3) {
		if (sumval >= 8 && sumval <= 12) {
			currBalance += 1000;
			document.querySelector(".result").innerHTML = "Yay! What a guess";
			document.getElementById("bal").innerHTML =
				"Your Current Balance is: " + currBalance + " coins";
		} else {
			document.querySelector(".result").innerHTML = "Bad Guess :(";
			document.getElementById("bal").innerHTML =
				"Your Current Balance is: " + currBalance + " coins";
		}
	} else {
		document.querySelector(".result").innerHTML = "Choose a bet first";
	}
}

function endGame() {
	document.getElementById("bal").innerHTML = "Your Current Balance is: 0";
	document.querySelector(".result").innerHTML =
		"You ran outta money. Start Over :(";
	document.getElementById("first").classList.add("bet-btn-inactive");
	document.getElementById("second").classList.add("bet-btn-inactive");
	document.getElementById("third").classList.add("bet-btn-inactive");
	document.getElementById("btn").classList.add("bet-btn-inactive");
}
