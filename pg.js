/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice;
const btnRoll = document.querySelector(".btn-roll"); 
const btnHold = document.querySelector(".btn-hold");
const imgDice = document.querySelector(".dice");
var playerOneCurrent = document.querySelector("#current-0");
scores = [0,0];
roundScore = 0;
activePlayer = 0;
dice = 0;

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

//when clicking roll dice, dice png pops up
//and saving the number in roundScore.
function whosActive(activeplayer){
	if(activeplayer === 0){
		document.querySelector(".player-0-panel").classList.add("active");
		document.querySelector(".player-1-panel").classList.remove("active");
}
	else{
		document.querySelector(".player-1-panel").classList.add("active");
		document.querySelector(".player-0-panel").classList.remove("active");
}
}
//function hold(){
//	scores[activePlayer] += roundScore;
//	var score = document.querySelector(`#score-${activePlayer}`);
//	score.textContent = scores[activePlayer];
//}

function rollDice(){
	dice = Math.floor(Math.random() * 6 + 1);
	imgDice.src = `dice-${dice}.png`;
	
	//default activePlayer == 0;
	if(dice !== 1){
		roundScore += dice;
		document.querySelector(`#current-${activePlayer}`).textContent = roundScore;	
		btnHold.addEventListener("click", function(){
			scores[activePlayer] += roundScore;
			var score = document.querySelector(`#score-${activePlayer}`);
			score.textContent = scores[activePlayer];
	});
}
	else{	
		roundScore = 0;
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		whosActive(activePlayer);
		
}
}

btnRoll.addEventListener("click", rollDice);