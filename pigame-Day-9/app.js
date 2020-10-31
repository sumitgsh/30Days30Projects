/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores,roundScore,activePlayer,gamePlaying;

const elements={

	btnroll:document.querySelector('.btn-roll'),
	btnhold:document.querySelector('.btn-hold'),
	btnnew:document.querySelector('.btn-new')


};


init();

//text content used to change the values on generating ;
//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';

//BTN roll
elements.btnroll.addEventListener('click',()=>{

	if(gamePlaying){//true then execute

// 1.Random number
 var dice=Math.floor(Math.random()*6)+1;
 

//2.Display the result

var diceDOM=document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src='dice-'+ dice +'.png';


//3.Update the round score If the related number was not a 1

if(dice!== 1 ){ //!== does not perform coercion
//Add to score

roundScore =roundScore+dice;
document.querySelector('#current-'+activePlayer).textContent=roundScore;

}
	else
		{
	//Next player
	nextPlayer();
	}
}


});

//BTN Hold
elements.btnhold.addEventListener('click',()=>{

if(gamePlaying){

//Add CURRENT SCORE to Global score
scores[activePlayer]+=roundScore;


//Update the UI

document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];


//check if the player won
if(scores[activePlayer]>=20){//just for testing we use 20 but it must be 100

	document.querySelector('#name-'+activePlayer).textContent='Winner!!';
	document.querySelector('.dice').style.display='none';
	document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
	document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
	gamePlaying=false;
}
	else
	{
	//nextPlayer()

	nextPlayer();
	}
}



});

function nextPlayer()
{


	//Ternary operator
	activePlayer===0 ?activePlayer = 1:activePlayer = 0;	
	roundScore=0;

	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';

	//class selector

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	// document.querySelector('.player-0-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.add('active');

	document.querySelector('.dice').style.display='none';//for player 1 image to disappear


}

elements.btnnew.addEventListener('click',init);


function init()
{
	scores=[0,0];
	activePlayer=0;
	roundScore=0;
	gamePlaying=true;

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';

document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');


}