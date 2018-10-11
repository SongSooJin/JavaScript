var a = 10;
var b = 20;
var obj = {
  a,
  "b" :b 
};

console.log(obj); // {a:10, b:20}

// create a deck of playing cards
var cards = [];

for(let suit of ['H', 'C', 'D', 'S']) // hearts, clubs, diamonds, spades
 for(let value=1; value<=13; value++)
 cards.push({ suit, value });
 
 console.log(cards);
 
 console.log("----------------------------------------");
 
// get all cards with value 2:
// cards 배열이 갖고있는 아이템들을 모두
// filter 함수에 전달한 익명함수로 점증해서 true인 아이템들을
// 새 배열에 모아서 최종적으로 리턴한다.
var ret1 = cards.filter(c => c.value === 2); 
console.log(ret1);
// [
 // { suit: 'H', value: 2 },
 // { suit: 'C', value: 2 },
// { suit: 'D', value: 2 },
// { suit: 'S', value: 2 }
// ]
// (for the following, we will just list length, for compactness)
// get all diamonds:

cards.filter(c => c.suit === 'D'); // length: 13
// get all face cards

cards.filter(c => c.value > 10); // length: 12
// get all face cards that are hearts

cards.filter(c => c.value > 10 && c.suit === 'H'); // length: 3


