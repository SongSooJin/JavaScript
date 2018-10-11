let str = " something ";
console.log(str.length); // 11

let result = str.trim();

console.log(result); // somthing
console.log(result.length); // 9

let result2 = str.replace(/^\s|\s$/g,"");
console.log(result2); // somthing
console.log(result2.length); // 9


// const beer99 = "99 Bottles of Bbeer on the Wall " +
//  "take 1 down and pass it around -- " +
//  "98 bottles of beer on the wall. /";
// 
// const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);
// const match = beer99.match(/[0-9]{1,3}/);
// 
// 
// const equation = "(2 + 3.5) * 7";
// const match = equation.match(/\(\d \+ \d\.\d\) \* \d/);



let name = "Soojin Song";
name = name.replace(/(\w+)\s(\w+)/, "$2 $1");
console.log(name); // Song Soojin



 
 
 
 