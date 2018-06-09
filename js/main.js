
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
	if (cardsInPlay[0] ===  cardsInPlay[1]) {
		alert ("You found a match!");
	} 
	else {
			alert ("Sorry, try again.");
		}
//		refresh(3000);	
	};

// function refresh(timeout){
// 	setTimeout(() => {
// 		window.location.reload(true);
// 	}, timeout);
// }

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log ("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} 
	// if (cardsInPlay.lenght >= 3) {
	// 	alert ("Refresh your page.");
	// }
	};
	
var createBoard = function() {
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

//flipCard(0);
//flipCard(2);






