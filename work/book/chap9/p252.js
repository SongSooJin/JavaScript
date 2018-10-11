function divide(a,b) {
  return a/ b;
}

console.log(divide(3,2)); // 1.5
console.log(divide(3,0)); // Infinity

let arr = [10, 20];

let value1 = arr[arr.length - 1];
console.log(value1); // 20

let value2 = arr[arr.length];
console.log(value2); // undefined

function getElement(index) {
  let value = arr[index];
  if (value === undefined) {
    throw new Error("Array Index Out Of Bound");
  }
  return value;
}
console.log("---------------------------------");
try {
  let value3 = getElement(2);
  console.log("value3  =" + value3);
} catch (e) {
  console.log(e.message);
} finally {
  console.log("정상이든 비정상이든 항상 수행해야 하는 코드");
}

