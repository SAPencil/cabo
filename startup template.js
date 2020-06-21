

var deck = [Ah, 2h, 3h, ... Ad, 2d, 3d, ...]; OR deck = [{value: 1, suit: red}, {value: 2, suit:red} ...]

const players = [player1, player2, player3, player4] //Perhaps these elements could be objects holding more information about the players, maybe even their hands too

var player1Hand = [
    {value: 4h, visibleToPlayer1: false, visibleToPlayer2: false ...}, {value: 5s., visibleToPlayer1: false...} ...
];
var player2Hand = [...];
...

var discardPile = [...];

var cabo = false;

function deal () {
    //Pops elements at random from deck and pushes them to hands 
}

function draw(player) {
    //returns (and pops) a random card, visible to the player, from the deck which is pushed to the hand of the player (I think for simplicity it would be best to consider this a 5 card hand, and just insist that the next move is to discard)
}

function peek(card, player) {
    //Toggles visbleToPlayer__ to true for a given card on the table 
}

function spy(card, player) {
    //Toggles visbleToPlayer__ to true for a given card on the table 
}
//I'm not sure whether the two functions above should be separate. They have different roles in the game, but in essence they are the same thing if we need to specify a player for each anyway 

function swap(cardToPop, cardtoPush) {
    //Pop from one hand, push to another
}

function callCabo() {
    cabo = true;
    countdown = players.length;
}

function end() {
    if(cabo == true && countdown == 0)
    //Makes all cards visible to all players
    //Returns an object based on current hands
    {player1: score,
    player2: score,
    player3: score,
    player4: score}
}