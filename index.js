/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    let temp = fn(arr[i], i)
    result.push(temp)
  }

  return result
};
