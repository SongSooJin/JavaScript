const input = "As I was going to Saint Ives";

// insensitive : 대소문자를 구분하지 않는다.
// global : 줄 끝까지 계속해서 찾는다.
// multi-line : 다음 줄에서도 계속해서 찾는다.
const re = /\w{3,}/igm;
// 단어가 3-N까지 

// starting with the string (input)
input.match(re); 
// ["was", "going", "Saint", "Ives"]

input.search(re); 
// 5 (the first three-letter word starts at index 5)
// 공백도 포함

// starting with the regex (re)
re.test(input); 
// true (input contains at least one three-letter word)

re.exec(input); // ["was"] (first match)
re.exec(input); // ["going"] (exec "remembers" where it is)
re.exec(input); // ["Saint"]
re.exec(input); // ["Ives"]
re.exec(input); // null -- no more matches

// "As I was going to Saint Ives";
// note that any of these methods can be used directly with a regex literal
input.match(/\w{3,}/ig);
input.search(/\w{3,}/ig);

/\w{3,}/ig.test(input);
/\w{3,}/ig.exec(input);
// ...



