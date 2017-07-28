$(document).ready(function() {
	var index = 0;
	var timeClock = {
		time : 20,

		resettimeClock: function() {
			this.time = 20;
			$(".timer").html("<h3>" +  "time remaining:  " + this.time + " seconds" + "</h3>");
		},
			initializeCounter: function() {
				var second = 1000;
				counter = setInterval(timeClock.count, second);	
			},
				stopCounter: function() {
					clearInterval(counter);
				},
					count: function() {
						timeClock.time--;

							if (timeClock.time >= 0) {
								$(".timer").html("<h3>" +  "time remaining:  " + timeClock.time + " seconds" + "</h3>");
							}
							else {
								index++;
								answerWrong();
								timeClock.resettimeClock();

								if (index < qArray.length) {
									loadQuest(index);
								} 
								else {
									$(".selection").hide();
									showScore();
								}
							}
					}
	};

var yah = 0;
var nah = 0;

var q1 = {
	quest : "The human genome is:",
		choices : [	"A. All of our genes",
				 		"B. All of the DNA and RNA in our cells",
				 		"C. All of our DNA",
				 		"D. Responsible for all our physical characteristics"],
		states : [false, false, true, false],
	answer : "C. All of our DNA"
};

var q2 = {
	quest : "Scientists now think humans have how many protein-encoding genes:",
		choices : [	"A. More than  1 million",
				 		"B. 275,000 - 375,000",
				 		"C. 65 - 75,000",
				 		"D. 20 - 25,000"],
		states : [false, false, false, true],
	answer : "A. More than  1 million"
};

var q3 = {
	quest : "How many chromosomes do humans have?",
		choices : [	"A. 46",
				 		"B. 102",
				 		"C. 88",
				 		"D. 15822"],
		states : [true, false, false, false],
	answer : "A. 46"
};

var qArray = [q1, q2, q3];

function loadQuest(questSelection) {
	timeClock.resettimeClock();
  		$(".quest").html("<h3>" + qArray[questSelection].quest + "</h3>");
  		$("#bA").text(qArray[questSelection].choices[0]).show();
  		$("#bB").text(qArray[questSelection].choices[1]).show();
  		$("#bC").text(qArray[questSelection].choices[2]).show();
  		$("#bD").text(qArray[questSelection].choices[3]).show();
}

function setup() {
	index = 0;
	$('.quest').append();
	$('#starter').on('click', function() {
		$(this).hide();
		timeClock.initializeCounter();
	 	loadQuest(index);
	});
}		

function getAnswer() {

	$('.selection').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".quest").text('');
		$("#bA").text('');
		$("#bB").text('');
		$("#bC").text('');
		$("#bD").text('');
		loadQuest();
	})
}

//message correct:
function swish() {
	yah++;
	alert("That's the one! You got it! Another one in the basket!");
}

//message incorrect:
function bish() {
	nah++;
	alert("That's INCORRECT! You bloated sack of methylation!");
}

function showScore() {
	$('.quest').empty();
	$('.quest').append("<h4><p>FINAL SCORE:</p></h4>");
	$('.quest').append("<h4><p>SWISH: " + yah + "    ||    BISH: " + nah + "</p></h4>");
	timeClock.stopCounter();
	$('.timer').empty();
}

setup();
$(".selection").on("click", function() {
 /*console.log($(this));*/
 if(this.id == "bA") {
 	var pick = "A";
 } else if(this.id == "bB") {
 	pick = "B";
 } else if (this.id == "bC") {
 	pick = "C";
 } else if (this.id == "bD") {
 	pick = "D";
 } 
 
 if ((pick == 'A') && (qArray[index].states[0] == true)) {
 		swish();
 } 
 	else if (pick == 'A') {
 		bish();
 	}

 if ((pick == 'B') && (qArray[index].states[1] == true)) {
 		swish();
 } 
 	else if (pick == 'B') {
 		bish();
 	}
if ((pick == 'C') && (qArray[index].states[2] == true)) {
 		swish();
 } 
 	else if (pick == 'C') {
 		bish();
 	}

if ((pick == 'D') && (qArray[index].states[3] == true)) {
 		swish();
 }
  	else if (pick == 'D') {
 		bish();
 	}

/*
for (i=0;i<qArray.length;i++) {
	if ((pick == "A" || "B" || "C" || "D") && (qArray[index].states[i] == true)) {
		swish();
	}	
	else if (pick == "A" || "B" || "C" || "D") {
		bish();
	}
}
*/

 $(".quest").text('');
 $("#bA").text('');
 $("#bB").text('');
 $("#bC").text('');
 $("#bD").text('');
 index++;
 if (index < qArray.length) {
 	loadQuest(index);
 } else {
 	$(".selection").hide();
 	showScore();
 }
});

});