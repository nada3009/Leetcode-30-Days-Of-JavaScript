/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const transformedArr = [];
    for (let i = 0; i < arr.length; i++) {
        transformedArr[i] = fn(arr[i], i);
    }
    return transformedArr;
};

/** 
 * const arr = [1,2,3]
 * function plusone(n) { return n + 1; }
 * const newArray = map(arr, plusone); // [2,3,4]
*/
