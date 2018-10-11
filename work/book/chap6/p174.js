// 새로운 문법을 배울 때 그 문법을 이해했는가?
// 쉽게 판단하는 기준은 : 신규문법을 옛 문법으로
// 변경할 수 있다면 제대로 이해한 것이다.

function getSentence({ subject, verb, object}) {
  return `${subject} ${verb} ${object}`;
  
}

// 위의 코드를 옛날 문법으로 바꿈
function getSentence(obj) {
  var subject = obj.subject;
  var verb = obj.verb;
  var object = obj.object;

  return subject + ' ' + verb +' ' + object;  
}

const o = {
  subject: "I",
  verb : "love",
object : "JavaScript",
}

console.log(getSentence(o));