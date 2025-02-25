/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
  var result = n
  var add = -1
  return function() {
    add += 1
    return result + add
  };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
