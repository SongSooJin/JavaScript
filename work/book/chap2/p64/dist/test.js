"use strict";

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;

  console.log(subject + " " + verb + " " + object);
}

var sentences = [{ subject: "Jsva Script", "verb": "is", "object": "great" }, { subject: "Elephants", "verb": "are", "object": "large" }];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var s = _step.value;

    say(s);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}