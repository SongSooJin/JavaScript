const words = [
  "Beachball", "Rodeo","Bali", "Angel",
 "Aardvark", "Xylophone", "November", 
 "Papaya", "Uniform", "Joker",
 "Clover", "Chocolate",
];

 
 var fn = (a, x) => {
  
  if(!a[x[0]]) {  // a 객체의 해당 프로퍼티가 없다면 
    
     a[x[0]] = []; // a객체의 해당 프로퍼티를 추가하고 빈 배열을 할당한다.
  }
  
  a[x[0]].push(x);
  return a; // 객체 
};

const alphabetical = words.reduce(fn, {});

/*
          a                                           x              return
1회전     {}                                    Beachball          {'B' : ['Beachball'] }         

2회전    {'B' : ['Beachball'] }                    Rodeo           {'B' : ['Beachball'] 'R' : ['Rodeo'] }

3회전      {'B' : ['Beachball'] 'R' : ['Rodeo'] }   Bali          {'B' : ['Beachball', 'Bali'] 'R' : ['Rodeo'] }

4회전   ...
*/

console.log(alphabetical);
// { B: [ 'Beachball', 'Bali' ],
//   R: [ 'Rodeo' ],
//   A: [ 'Angel', 'Aardvark' ],
//   X: [ 'Xylophone' ],
//   N: [ 'November' ],
//   C: [ 'Chocolate', 'Clover' ],
//   P: [ 'Papaya' ],
//   U: [ 'Uniform' ],
//   J: [ 'Joker' ] }