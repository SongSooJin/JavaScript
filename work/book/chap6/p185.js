function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
// update(1949, "singer");


const bruce = {
  name: "Bruce"
};

// bind : 함수를 실행하는게 아니라 함수안에서 사용 할 
// this를 전달하는 파라미터로 고정시킨 함수를 리턴한다.
// bind 처리 후에 this 는 변경이 불가하다 
const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
 // bruce is now { name: "Bruce", birthYear: 1904, occupation: "actor" }
updateBruce.call(madeline, 1274, "king");
console.log(medeline);

 // bruce is now { name: "Bruce", birthYear: 1274, occupation: "king" };
 // madeline is unchanged
 
 
 
 
 
 
 