const para1 = document.getElementsByTagName('p')[0];

console.log(para1.textContent);
// 111
// 222
// 333
console.log(para1.innerHTML);
// 111
// <span>222</span>
// 333



// 태그도 문자열로 취급하여 그대로 화면에 출력한다.
//스탠다드 문법
// para1.textContent = "<i>Modified</i> HTML file";

// textContent의 사투리 문법
// para1.textContent = "Modified HTML file"; // look for change in browser

// 태그는 처리되고 문자열은 그냥 출력된다.
para1.innerHTML = "<i>Modified</i> HTML file"; // look for change in browser


const p1 = document.createElement('p');
const p2 = document.createElement('p');

p1.textContent = "I was created dynamically!";
p2.textContent = "I was also created dynamically!";

const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];

parent.insertBefore(p1, firstChild); // 부모 객체에서 firstChild앞에 넣자.  
parent.appendChild(p2);








