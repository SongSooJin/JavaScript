function StringBuilder() {
    this._array = [];
    this._index = 0;
}

StringBuilder.prototype.append = function (str) {
    this._array[this._index] = str;
    this._index++;
}

StringBuilder.prototype.toString = function () {
    return this._array.join('');
}

// var txt="";
var sb = new StringBuilder();

for (var i = 0; i < 10; i++) {
  // txt += i; // BAD!
  sb.append(i);
}

// console.log(txt);
console.log(sb.toString());