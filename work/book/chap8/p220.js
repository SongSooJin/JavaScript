var arr = Array(10).map(function(x) { return 5 });
console.log(arr);

var arr = Array(10); // 새 객체 만들어주기 패턴 
// var arr =  new Array(10);
arr.fill(5);
console.log(arr);


console.log("----------------------------------------");


var arr = [1, 2, 3, 4, 5];

delete arr[2]; 
// 해당 방에 값이 삭제된다. 방은 보존된다.
// 일반적으로 splice 함수를 사용하여 방 자체를 삭제한다.
console.log(arr);

var ret = arr.map(x => 0); // [0, 0, <1 empty slot>, 0, 0]

console.log(ret);
console.log(arr);


console.log("----------------------------------------");


arr[2] = 30;
arr[3] = undefined;
console.log(arr);


console.log("----------------------------------------");


var arr = [1, null, "hello", "world", true, undefined];

delete arr[3];
console.log(arr);
// [ 1, null, 'hello', <1 empty item>, true, undefined ]


arr.join(); // "1,,hello,,true,"
arr.join(''); // "1hellotrue"
arr.join(' -- '); // "1 -- -- hello -- -- true --"


console.log("----------------------------------------");


const attributes = ["Nimble", "Perceptive", "Generous"];

// const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
// html: "<ul><li>Nimble</li><li>Perceptive</li><li>Generous</li></ul>";

// 위의 코드를 가독성이 좋게 바꿈 
// const html = `
// 
//   <ul>
//     <li> ${attributes[0]} </li>
//     <li> ${attributes[1]} </li>
//     <li> ${attributes[2]} </li>
//   </ul>
//   `;


const html = `

  <ul>
    <li>  
      ${attributes.join("<li></li>")} 
    </li>
  </ul>
  `;
  
  `
  <ul>
    <li>  
      Nimble</li><li>Perceptive</li><li>Generous
    </li>
  </ul>
  `;

  
console.log(html);





