console.log('Lodash is loaded:', typeof _ !== 'undefined');
/*
make an players array to store each player.
make 4 player objects, each of them having a name key and a hand key.
make a constructor function and create for player objects and push each of them
into players array.

make an array for storing each card.
make an array of suits.
make an array of ranks.
start a for loop through suits.
inside loop code block make another loop through ranks.
inside nested loop code block make a card object and store it in a variable.
make object variable suit property to have the value of suits array at first loop.
make object variable rank property to have the value of ranks array at second loop.
push object variable into cards array.

shuffle the cards array and assign it to a variable.
start a loop through players array.
inside loop code block set players array at loop on hand property push shuffled cards
at zero and shuffled cards at one. remove shuffled cards at zero and shuffled
cards at one.

make a findWinner function taking players array as parameter.
inside function code block, loop though players array.
inside loop code block make another loop, this time to loop through hand property
of players at loop. inside nested loops, make an if statement.
if players at first loop at hand at second loop is equal to ace, then make a new
suitNum property on players array at first loop and equal it to 11.

*/
function cardGame() {
  var players = [];
  var cards = [];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  function Player(name) {
    this.name = name;
    this.hand = [];
  }
  var bob = new Player('Bob');
  players.push(bob);
  var josh = new Player('Josh');
  players.push(josh);
  var junior = new Player('Junior');
  players.push(junior);
  var aimee = new Player('Aimee');
  players.push(aimee);

  for (var i = 0; i < suits.length; i++) {
    for (var z = 0; z < ranks.length; z++) {
      var card = {};
      card.suit = suits[i];
      card.rank = ranks[z];
      cards.push(card);
    }
  }
  var shuffledCards = _.shuffle(cards);
  for (var j = 0; j < players.length; j++) {
    players[j].hand.push(shuffledCards[0]);
    players[j].hand.push(shuffledCards[1]);
    shuffledCards.splice(0, 2);
  }

  function findWinner(players) {
    for (var i = 0; i < players.length; i++) {
      for (var z = 0; z < players[i].hand.length; z++) {
        if (players[i].hand[z] === 'diamonds') {
          players[i].suitNum = 11;
        }
      }
    }
    console.log(players);
  }
  findWinner(players);
}
cardGame();
