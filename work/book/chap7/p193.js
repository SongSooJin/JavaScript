console.log('before block'); {
  
  console.log('inside block');
  const x = 3;
  console.log(x); // logs 3

}

// console.log(`outside block; x=${x}`); // ReferenceError: x is not defined

{
 // block 1
 const x = 'blue';
 console.log(x); // logs "blue"
}
console.log(typeof x); // logs "undefined"; x out of scope
{
 // block 2
 const x = 3;
console.log(x); // logs "3"
}
console.log(typeof x); // logs "undefined"; x out of scope

{
 // outer block
 let x = 'blue';
 console.log(x); // logs "blue"
 {
 // inner block
 let x = 3;
 console.log(x); // logs "3"
 }
 console.log(x); // logs "blue"
}
console.log(typeof x); // logs "undefined"; x out of scope


