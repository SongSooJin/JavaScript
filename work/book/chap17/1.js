function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


// thdtnwls93@naver.com
// fjdlks@gamil.com
// naver.co.kr
// ssss
// ass@google.
// dasd@bgfb.org
// 아이디@한국.닷컴




console.log(validateEmail("a@naver.com")); //  true
console.log(validateEmail("ass@google.")); // false
console.log(validateEmail("아이디@한국.닷컴")); //false