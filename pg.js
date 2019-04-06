/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice, checkTwelve;
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");
const btnNewGame = document.querySelector(".btn-new");
const diceImg = document.querySelector(".dice");
const btn = document.querySelector("#btn");
var GOAL_NUMBER = 0;
var playerOneCurrent = document.querySelector("#current-0");
function inputfn(){
	GOAL_NUMBER = document.querySelector("#inputTxt").value;
}
function init(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	dice = 0;
	checkTwelve = [0,0];
	document.querySelector("#score-0").textContent = 0;
	document.querySelector("#score-1").textContent = 0;
	document.querySelector("#current-0").textContent = 0;
	document.querySelector("#current-1").textContent = 0;
	document.querySelector("#name-0").textContent = "PLAYER 1";
	document.querySelector("#name-1").textContent = "PLAYER 2";
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("active");
	document.querySelector(".player-0-panel").classList.add("active");
}
init();



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
function rollDice() {
	if(scores[activePlayer] < GOAL_NUMBER){
		dice = Math.floor(Math.random() * 6 + 1);
		diceImg.src = `dice-${dice}.png`;
		//default activePlayer == 0;
		if(dice !== 1){
			roundScore += dice;
			document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
			checkTwelve[0] += dice;
			checkTwelve[1] += 1;
			if(checkTwelve[1] === 2 && checkTwelve[0] === 12){
				nextPlayer();
			
			}
	}
	else{ 
		nextPlayer();
	}
}
}
function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	dice = 0;
	checkTwelve = [0,0];
	document.querySelector("#current-0").textContent = 0;
	document.querySelector("#current-1").textContent = 0;
	whosActive(activePlayer);
}
function hold() {
			// input total score
			scores[activePlayer] += roundScore;
			// total score for UI
			var score = document.querySelector(`#score-${activePlayer}`);
			score.textContent = scores[activePlayer];
			//토탈 점수에 점수 넣고 라운드 점수 초기화
			roundScore = 0;
			//초기화한 라운드 점수로 ui 초기화
			var roundScoreUi = document.querySelector(`#current-${activePlayer}`).textContent;
			roundScoreUi = roundScore;
			//who won
			if (scores[activePlayer] >= GOAL_NUMBER){
				var winnerName = document.querySelector("#name-" + activePlayer);
				winnerName.textContent = "winner";
				var winnerPanel = document.querySelector(`.player-${activePlayer}-panel`);
				//winnerPanel.classList.remove("active");
				winnerPanel.classList.add("winner");
				winnerPanel.classList.remove("active");
			}
			else {
				nextPlayer();
			}
		}
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", hold);
btnNewGame.addEventListener("click", init);
btn.addEventListener("click", inputfn);