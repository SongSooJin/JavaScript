var html = 'HTML with <a href="/one">one link</a>,' + "and some JavaScript." +
 '<script src="stuff.js"></script>';
 
 
var matches = html.match(/area|a|link|script|source/ig);
console.log(matches);
// [ 'a', 'link', 'a', 'a', 'a', 'a', 'Script', 'script', 'script' ]


// [!CDATA[[
//   이 안쪽에 태그는 없다. 다 문자열로 취급하라.
//   <br> 이것은 태그가 아니다.
// ]]
var html = '<br> [!CDATA[[<br>]]';
var matches = html.match(/<br>/ig);
console.log(matches);
// [ '<br>', '<br>' ]