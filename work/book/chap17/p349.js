const beer99 = "99 Bottles of Bbeer on the Wall " +
 "take 1 down and pass it around -- " +
 "98 bottles of beer on the wall. /";
 
 
 // 정규표현식이 기호를 다른 의미로 정해서 사용하면 그 기호를
 // 문자열로 찾아달라고 할 때 추가적인 설정이 필요하다.
 // 이스케이프 문자 역슬래쉬를 사용하면 정규표현식 설정이 아니라 
 // 그냥 문자열로 취급된다.
 
 
 // const match = beer99.match(/[\-0-9a-z.]/ig);
 
 // const match = beer99.match(/98/ig);
 // console.log(match); // [ '98' ]
 
 // const match = beer99.match(/[98]/ig);
 // console.log(match); // [ '9', '9', '9', '8' ]

 // const match = beer99.match(/[0-9]/ig);
 // console.log(match); // [ '9', '9', '1', '9', '8' ]
 // 
 // const match = beer99.match(/[0-9 a-z A-Z]/ig);
 // console.log(match); // 결과확인 
 
 // const match = beer99.match(/\//ig);
 // 결과 확인 
 
 // . 을 사용하여 임의의 글자 한글자라는 뜻으로 사용한다.
 // const match = beer99.match(/\./ig);
 // console.log(match); //  [ '.' ]
 
 // const match = beer99.match(/\-/ig);
 // const match = beer99.match(/-/ig);
 // console.log(match); // [ '-', '-' ]
 
 
 // const match = beer99.match(/[-|0-9]/ig);
 // console.log(match); // [ '9', '9', '1', '-', '-', '9', '8' ]
 
 // const match = beer99.match(/-|0|1|2|3/ig); // [ '1', '-', '-' ]
 // const match = beer99.match(/[\-0-3]/ig); // [ '1', '-', '-' ]
 // console.log(match);

 // const match = beer99.match(/[\-0-9 a-z.]/ig); // [ '1', '-', '-' ]
 // [안에 점] : 문자열 점
 // /안에 점/ : 임의의 한글자 
 const match = beer99.match(/[.]/ig); // [ '1', '-', '-' ]
 console.log(match);
 
 
 
 