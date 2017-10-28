// variable declaration
	// wins, losses, CPU number, User number
var wins = 0;
var losses = 0;
var cpuNum = 0;
var userNum = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;


$(document).ready(function () {
	// helper function to generate random number (inclusive) given max and min
	function generateRandomNum (min,max) {
		return Math.floor(Math.random() * max) + min;
	}

	// generate random number for CPU between 19 - 120
		// when page loads and when game ends

	cpuNum = generateRandomNum(19, 120);
	
	crystal1 = generateRandomNum(1,12);
	crystal2 = generateRandomNum(1,12);
	crystal3 = generateRandomNum(1,12);
	crystal4 = generateRandomNum(1,12);

	$('.blue-crystal').on('click', function () {
		userNum += crystal1;
	});
	
});
