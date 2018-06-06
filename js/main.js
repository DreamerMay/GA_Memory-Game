
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
];
var cardsInPlay = [ ]; 

var checkForMatch = function() {
	if (cardsInPlay.length === 2 && cardsInPlay[0] ===  cardsInPlay[1]) {
		result = alert ("You found a match!");
	} else if 
		(cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
		result = alert ("Sorry, try again.");
				}	
	};

	//missing pop up alert message :( need to fix this 

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log ("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', card[cardId].cardImage);
	checkForMatch();
	};
	
var createBoard = function() {
	for (var i=0; i<cards.length; i++){
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'image/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipcard);
	document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

flipCard(0);
flipCard(2);






