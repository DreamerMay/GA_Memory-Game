
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [ ]; 
// var cardId;



checkForMatch = function() {
	if (cardsInPlay.length === 2 && cardsInPlay[0] ===  cardsInPlay[1]) {
		result = alert ("You found a match!");
	} else if 
		(cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
		result = alert ("Sorry, try again.");
				}	
	};

	//missing pop up alert message :( need to fix this 

var flipCard = function(cardId) {
	console.log ("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	}
	
	flipCard(0);
	flipCard(1);

//	test




//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);

//var cardTwo = cards[2];ß
//cardsInPlay.push(cardTwo);
//console.log("user flipped " + cardsTwo)

//if (cardsInPlay.length === 2 && cardsInPlay [0] === cardsInPlay[1]) {
//	alert ( "you have got a match!"); 
//	} else { alert ("Sorry, try again");
//};




//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardFour);


