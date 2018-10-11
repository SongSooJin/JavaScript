function add(a,b) { // 함수
  return a + b;
}


const o = {
  name: 'Julie',
  greetBackwards: function() { // 함수,메소드
    
    const self = this;
    // 지역함수 
    function getReverseName() {  // 함수
      let nameBackwards = '';
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  },
  
  
};
console.log(o.greetBackwards());
