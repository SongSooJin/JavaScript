// class Counter {
//   private count = 0;
//   public String increment() {
//     return ++count + "time(s).";
//   }
// }
// 
// Counter counter = new Counter();
// System.out.prinln(counter.increment());
// System.out.prinln(counter.increment());


// 코드공간을 분리시켜 외부자원과 충동을 막기 위하여 ....................... 
const f = (function() {
 let count = 0;
 return function increment() {
 return `${++count} time(s).`;
 }
})();

f(); // "I have been called 1 time(s)."
f(); // "I have been called 2 time(s)."
//...