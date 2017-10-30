// variable declaration
	// wins, losses, CPU number, User number
var wins = 0;
var losses = 0;
var cpuNum = 0;
var userNum = 0;
var crystalVals = {
	blue: 0,
	green: 0,
	purple: 0,
	yellow: 0
};


$(document).ready(function () {
	// helper function to generate random number (inclusive) given max and min
	function generateRandomNum (min,max) {
		return Math.floor(Math.random() * max) + min;
	}

	// generate random number for CPU between 19 - 120 and for crystals 1 - 12
		// when page loads and when game ends
	function assignValues () {
		cpuNum = generateRandomNum(19, 120);
		userNum = 0;
		for (var key in crystalVals) {
			crystalVals[key] = generateRandomNum(1,12);
		}
	}

	// check user number against cpu num
		// if user number matches cpu num, increment wins
		// else if user number is greater than cpu num, increment losses
	function checkNums () {
		if (userNum === cpuNum) {
			wins++;
			assignValues();
		}
		else if (userNum > cpuNum) {
			losses++;
			assignValues();
		}
	}

	// update cpu num, user num, wins and losses
	function updateStats () {
		$('.wins').text('Wins: ' + wins);
		$('.losses').text('Losses: ' + losses);
		$('.CPUnum').text('Match this number: ' + cpuNum);
		$('.userNum').text('Your current count: ' + userNum);
	}

	// loads game stats and assigns game values upon opening the page
	assignValues();
	updateStats();


	// listen for click events on crystals
		// conditional statements to see which crystal was clicked
		// add that crystal's value to userNum
	$('.crystal').on('click', function () {
		var crystalColor = this.alt;
		userNum += crystalVals[crystalColor];
		checkNums();
		updateStats();
	});

	
});
