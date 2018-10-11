var name = "Tom;"
var age = 33;
var address = "Seoul Korea";

var html = `
    <div>
      <h3>${name} <mark> ${age}</mark></h3>
      <p>${address}</p>
    </div>
    `; // ${변수}
    console.log(html);
  

var tag = "\n"; +
"<div>\n" +
  "<h3>"+name+ "<mark> "+age+"</mark> "+"</h3>"+
  "<p>" + address + "</p>" +
"</div>" +
"";
console.log(tag); 
        
    