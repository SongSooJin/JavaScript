class Person {
 constructor(name) {
 this.name = name;
 this.id = Person.nextId++;
 }
}
Person.nextId = 0;

let i,j,k ;

const jamie = new Person("Jamie"),
 juliet = new Person("Juliet"),
 peter = new Person("PeterJ"),
 jay = new Person("Jay");
 
 console.log(jamie); // { name: 'Jamie', id: 0 }
 console.log(juliet); // { name: 'Juliet', id: 1 }
 console.log(peter); // { name: 'Peter', id: 2 }
 console.log(jay); //  { name: 'Jay', id: 3 }
 console.log();
 
const arr = [jamie, juliet, peter, jay];

// option 1: direct comparison of ID:
var ret = arr.find(p => p.id === juliet.id); // returns juliet object
console.log(ret); // { name: 'Juliet', id: 1 }


// option 2: using "this" arg:
arr.find(p => p.id === this.id, juliet); // returns juliet object

var ret = arr.some(item => item.name.includes("J"));
console.log(ret);

var ret = arr.every(item => item.name.includes("J"));
console.log(ret);


console.log("peterJ".includes("J"));
