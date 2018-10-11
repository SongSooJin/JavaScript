var obj = {
  a:10,
  b:20
};

console.log(obj.__proto__ === Object.prototype);

obj.__proto__ = {c:30};

console.log(obj.__proto__ === Object.prototype);

for (var variable in obj) {
    console.log(obj[variable]); // 부모객체까지 출력 
}

console.log("---------------------------");
for (var variable in obj) {
  if (obj.hasOwnProperty(variable)) { // 내 자신만 처리할떄 조건 필요 
    console.log(obj[variable]);
  }
}