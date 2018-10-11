const cart = [
  { name: "Widget", price: 9.95 },
  { name: "Gadget", price: 22.95 }
  ];
  
  // 사상(map)
  // 배열의 아이템을 꺼내서 함수에 전달하고
  // 함수가 리턴하는 값으로 치환한다.
  
const names = cart.map(x => x.name); 
console.log(names);// ["Widget", "Gadget"]
console.log(cart);

const prices = cart.map(x => x.price); 
console.log(prices);// [9.95, 22.95]

const discountPrices = prices.map(x => x*0.8); 
console.log(discountPrices);// [7.96, 18.36]

console.log(typeof String.prototype.toLowerCase);
console.log("Hello",String.prototype.toLowerCase());

String.prototype.toLowerCase(null);

const lcNames = names.map(
  item => String.prototype.toLowerCase.call(item)
);
console.log(lcNames);

// const lcNames = names.map(String.toLowerCase); // ["widget", "gadget"]