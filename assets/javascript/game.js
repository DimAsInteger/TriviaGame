//Initialize Numbers:
//onload loading of function to generate a random number between 1-100:

var randomnumber = ""; 
window.onload = function(){
    randnumber = Math.floor(Math.random()*100)+1;
      document.getElementById("num").innerHTML = randnumber;
};

//push 4 random numbers between 1-10 into 'startNumsPusher' array:
var starterNumsPusher = [];
function crystalNumsInt() {
	for(i=0;i<4;i++) {
  		var starterNums = Math.floor(Math.random()*10+1);
  		starterNumsPusher.push(starterNums);
  	}
  	//console.log(starterNumsPusher);
}
crystalNumsInt();

//restart the game:
var rand = "";
var score = 0;
$( document ).ready(function(){
function restart() {
  rand=Math.floor(Math.random()*100+1);
    $('#num').text(rand);
      starterNumsPusher = [];
        crystalNumsInt();
      score = 0;
    $('#userNum').text(score);
    //console.log("random number " + rand);
}
/*___________________________________________________________________________________________________________________
*/
//adds the number wins to "Wins: ":
var win = 0;
function winningDuh(){
    document.getElementById("outputStanding").innerHTML = "WINNING DUHHHHHHHHHHHHHHH!";
      win++; 
        document.getElementById("winner").innerHTML = win;
        //console.log("show me wins: " + win);
  restart();

}

//adds the number of losses to "Losses: "
var loss = 0;
function youreALooserBaby(){
    document.getElementById("outputStanding").innerHTML = "You're a looser, baby.";
      loss++;
        document.getElementById("loser").innerHTML = loss;
        //console.log("show me loss: " + loss);
  restart();
}

/*___________________________________________________________________________________________________________________________________
*/
//if/else if statements are conditional statements for winning or loosing for each crystal
var arr = [];
  $("#red").on ("click", function(){
    score = score + starterNumsPusher[0];
               /*----EVALUATE----*/
    //console.log("New total= " + score);
    //arr.push(score);
    //console.log("array of scored numbers = " + arr);
    //console.log("the final element in the array is = " + arr.slice(0).pop());
    $("#userNum").text(score);
      if (score == rand){winningDuh();}
        else if (score > rand){youreALooserBaby();}  
        })

$("#blue").on ("click", function(){
  score = score + starterNumsPusher[1];
               /*----EVALUATE----*/
    //console.log("New total= " + score);
    //arr.push(score);
    //console.log("array of scored numbers = " + arr);
    //console.log("the final element in the array is = " + arr.slice(0).pop());
    $("#userNum").text(score);
      if (score == rand){winningDuh();}
        else if (score > rand){youreALooserBaby();}  
        })

$("#yellow").on ("click", function(){
  score = score + starterNumsPusher[2];
               /*----EVALUATE----*/
    //console.log("New total= " + score);
    //arr.push(score);
    //console.log("array of scored numbers = " + arr);
    //console.log("the final element in the array is = " + arr.slice(0).pop());
    $("#userNum").text(score);
      if (score == rand){winningDuh();}
        else if (score > rand){youreALooserBaby();}  
        })


$("#green").on ("click", function(){
  score = score + starterNumsPusher[3];
               /*----EVALUATE----*/
    //console.log("New total= " + score);
    //arr.push(score);
    //console.log("array of scored numbers = " + arr);
    //console.log("the final element in the array is = " + arr.slice(0).pop());
    $("#userNum").text(score);
      if (score == rand){winningDuh();}
        else if (score > rand){youreALooserBaby();}  
        })

});