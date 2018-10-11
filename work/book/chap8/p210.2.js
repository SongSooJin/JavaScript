var arr = [4,10,7,100,25,34,21,79];

//가장 작은 숫자를 출력하세요.
var max = arr[0];
var min = arr[0];


for(var i = 0; i < arr.length; i++){
      if(arr[i] < max ) //num[i]가 max보다 크다면
          max = arr[i]; //max 에는 num[i]의 값이 들어감
  }
  console.log(max);
console.log(arr.sort((a,b) => a > b)[0]);

// 가장 큰 숫자를 출력하세요
for(var i = 0; i < arr.length; i++){
      if(arr[i] > min ) //num[i]가 max보다 크다면
          min = arr[i]; //max 에는 num[i]의 값이 들어감
  
  }
console.log(min);

  
  console.log(arr.sort((a,b) => a < b)[0]);

var people = [
  {id:10, name:"Aaron", age:10},
  {id:30, name:"Tom", age:47},
  {id:40, name:"Iaan", age:25},
  {id:20, name:"Brad", age:35},
];

// id 값으로 오름차순 정렬을 하세요.
console.log(people.sort((a,b) => a.id > b.id));

// 나이가 가장 어린 사람의 이름을 출력하세요.
console.log(people.sort((a,b) => a.age > b.age)[0].name);

// name값으로 내림차순 정렬을 하세요.
console.log(people.sort((a,b) => a.name > b.name));




