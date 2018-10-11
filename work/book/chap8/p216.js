
var cards = [];

for(let suit of ['H', 'C', 'D', 'S']) // hearts, clubs, diamonds, spades
 for(let value=1; value<=13; value++)
 cards.push({ suit, value });

console.log(cards);

console.log("----------------------------------");

function cardToString(c) {
  // console.log(c);
 const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
 const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
 // constructing values each time we call cardToString is not very
 // efficient; a better solution is a reader's exercise
 for(let i=2; i<=10; i++) values[i] = i;
 // console.log(values);
return values[c.value] + suits[c.suit];
 // 2\u2665
}

// var ret = cards.filter(c => c.value === 2)
// console.log(ret);


console.log("---------------------------");

// get all cards with value 2:
var ret = cards.filter(c => c.value === 2)
.map(cardToString); // [ "2♥", "2♣", "2♦", "2♠" ]
console.log(ret);

// get all face cards that are hearts
cards.filter(c => c.value > 10 && c.suit === 'H')
.map(cardToString); // [ "J♥", "Q♥", "K♥" ]