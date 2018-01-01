
var score = 0;

var cards =[
{
	rank: "queen",
	suit:"hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit:"diamonds",
	cardImage: "images/queen-of-diamonds.png"
},{
	rank: "king",
	suit:"hearts",
	cardImage: "images/king-of-hearts.png"
},{
	rank: "king",
	suit:"diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function(){
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
		score += 1;
		document.querySelector('span').textContent=score;
		document.querySelector('span').style.color = "red";
	}
	else
	{
		alert("Sorry, try again!");

	}
	cardsInPlay = [];
}
}

var flipCard = function(){
	var cardId = this.getAttribute("data-id");
	var turned = this.getAttribute("src");
	/*console.log ("User flipped " + cards[cardId].rank);
	console.log ("User flipped " + cards[cardId].cardImage);
	console.log ("User flipped " + cards[cardId].suit);*/
	if (turned === 'images/back.png'){
		cardsInPlay.push(cards[cardId].rank);
		this.setAttribute('src', cards[cardId].cardImage);
		checkForMatch();
	} //no action should be taken is card is already flipped over
}


var createBoard = function(){
	var gameBoard = document.getElementById('game-board');
	document.getElementsByTagName('button')[0].addEventListener('click',resetGame);
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.setAttribute('alt',cards[i].rank + " of " + cards[i].suit);
		cardElement.addEventListener('click',flipCard);

		gameBoard.appendChild(cardElement);
		
	};
}

var resetGame = function(){
	var images = document.getElementsByTagName('img');
	for (var i = 0; i < cards.length; i++){
		images[i].setAttribute('src','images/back.png');
	}
	cardsInPlay = [];
	score=0;
	document.querySelector('span').textContent=score;
	document.querySelector('span').style.color = "black";
}

createBoard();



