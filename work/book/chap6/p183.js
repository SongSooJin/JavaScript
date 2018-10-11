const bruce = {
  name: "Bruce"
};
const madeline = {
  name: "Madeline"
};
// this function isn't associated with any object, yet
// it's using 'this'!
function greet() {
  return `Hello, I'm ${this.name}!`;
}

console.log(greet()); // "Hello, I'm !" - 'this' not bound
console.log(greet.call(bruce)); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
console.log(greet.call(madeline)); // "Hello, I'm Madeline!" - 'this' bound to 'madeline'

console.log("------------------------------------------------------------");

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
// update(1949, "singer");

update.call(bruce, 1949, 'singer');
console.log(bruce);
// bruce is now { name: "Bruce", birthYear: 1949,
// occupation: "singer" }
update.call(madeline, 1942, 'actress');
console.log(madeline);
// madeline is now { name: "Madeline", birthYear: 1942,
// occupation: "actress" }

console.log("------------------------------------------------------------");

// apply 함수가 배열을 낱개로 잘라서 update 함수를 호출하면서 파라미터로 전달한다.
update.apply(bruce, [1955, "actor"]);
console.log(bruce);
// bruce is now { name: "Bruce", birthYear: 1955,
// occupation: "actor" }
update.apply(madeline, [1918, "writer"]);
console.log(madeline);
// madeline is now { name: "Madeline", birthYear: 1918,
// occupation: "writer" }

console.log("-------------------------------------------------------------");

const arr = [2, 3, -5, 15, 7];


console.log(Math.min(2, 3, -5));
console.log(Math.max(2, 3, -5, 15, 7));

console.log("------------------------");

console.log(Math.min.apply(null, arr)); // -5
console.log(Math.max.apply(null, arr)); // 15

console.log("------------------------");

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // equivalent to apply(bruce, newBruce)
Math.min(...arr); // -5
Math.max(...arr); // 15



