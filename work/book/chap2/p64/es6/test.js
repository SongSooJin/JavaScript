"use strict";

function say({subject, verb, object}) {
  console.log(`${subject} ${verb} ${object}`);
}

const sentences = [
  {subject: "Jsva Script", "verb": "is","object":"great"},
  {subject: "Elephants", "verb": "are","object":"large"},
];

for (let s of sentences) {
  say(s);
}