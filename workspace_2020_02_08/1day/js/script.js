
console.log("Hello world");


// var myHeight = 182;
// const myHeight02 = 182; // const 변수는 값을 바꿀수 없음
// let myHeight03 = 182;  // 될 수 있으면 let을 쓰자

// myHeight02 = 180;

// console.log(myHeight02);

// for (let i=0; i<10; i++) {
//     console.log("hellp word 10번 찍기");
// }

// console.log(i); 

let student01 = {
    name: "장성호",
    phone:"010-222-2222",
    email:"dddd@ddd.com",
    say:function() { // 객체의 메소드
        console.log("내 이름은"+this.name+"입니다.");
    }
};
student01.say();

let student02 = {
    name: "고유진", 
    phone:"010-122-2484",
    email:"ssss@ddd.com"
};


let myName = "장성호";
let myPhoneNumber = "11-11";
let my_email = "www@sss.com";
let MyAge = 20;
let myWeight = null; // 값이 null 과 아래와 같이 값을 할당하지 않은것과는 다르다.
let myWeight2;
let isOld = false;


console.log("TCL: myWeight2", myWeight2);
console.log("TCL: myWeight", myWeight);

console.log("TCL: myAge", typeof myWeight); // typeof : 값이 가지는 데이터 형태 출력

console.log("TCL: myEmail", my_email);
console.log("TCL: myPhoneNumber", myPhoneNumber);


console.log(student02.name);

function log() {
    console.log("출력 합니다.");
    console.log("출력 합니다.");
} //함수 선언

log(); // 함수 실행



 // hoist / 자바스크립트는 코드를 읽기전에 함수를 제일 위로 올려놓고 시작 / 때문에 함수호출을 선언 위에 호출하면 가능
//multiple(2,3);
//add(2,3);

var num = 10;
console.log("TCL: num", num);



// 아래와 같은 함수 호출 (익명함수) , 함수 표현식(리터럴 방식) / hoist 불가능
// let add = function(a,b) {
//     console.log(a,"+",b,"=", a+b, "입니다.");
// }

// 함수 선언식 / hoist 가능
// function add(a,b) { // add는 매개변수 a,b는 파라미터
//     console.log(a,"+",b,"=", a+b, "입니다.");

// }
// function multiple(a,b) {
//     console.log(a,"x",b,"=",a*b,"입니다.");
// }


let add = function(a,b) {
    return a+b;
}

let addZero = function(num) { 
    if (num<10) {
      return "0"+num;   // 함수는 리턴을 만나게 되면 아래의 조건들은 실행하지 않음
    } else {
        return num;
    }
}



let clock = document.querySelector("#clock");
// clock.textContent = myTime.getHours()+":"+myTime.getMinutes()+":"+myTime.getSeconds(); // textContent : 의미없는 텍스트 넣을때

setInterval(function(){
    let myTime = new Date();
    let h = addZero(myTime.getHours());
    let m = addZero(myTime.getMinutes());
    let s = addZero(myTime.getSeconds());
    // if(h<10) {
    //     h="0"+h;
    // }
    // if(m<10) {
    //     m="0"+m;
    // }
    // if(s<10) {
    //     s="0"+s;
    // }

     // clock.textContent = h+":"+m+":"+s; 
     clock.innerHTML = `<span class='hour'>${h}</span>:<span class='min'>${m}</span>:<span class='sec'>${s}</span>`
    // $("#clock").html = `<span>${h}</span>:<span>${m}</span>:<span>${s}</span>` / 제이쿼리 방식
},1000)                 



// console.log(myTime.getHours());
// console.log(addZero(myTime.getMinutes())); // addZero함수호출 안할시 3분 출력 / addZero함수 호출시 03분 출력
// console.log(myTime.getSeconds());




console.log(addZero(7));
console.log(add(2,3));


let now = new Date();
let xMax = new Date(2020,11,25); // 컴퓨터 언어의 시작은 0이기 때문에 11은 12월달을 의미 (요일도 마찬가지 0은 일요일)
let num3 = 10;
let num4 = "10";
console.log(num3 === num4);


let monthArr = ["JAN","FEB","MAR","APR","MAY"];
console.log(monthArr[4]);
console.log(monthArr[now.getMonth()]);


// let myMonth = function(pMonth) { /위의 배열을 풀어서 표현

//     if (pMonth === 0) {
//         return "JAN";
//     } else if (pMonth === 1) {
//         return "FEB";
//     }
// }
//console.log( myMonth(now.getMonth()));