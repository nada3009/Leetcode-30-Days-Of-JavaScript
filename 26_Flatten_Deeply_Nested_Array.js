/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n, tempArray = []) {
    for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index]) && n > 0) {
            flat(arr[index], n - 1, tempArray);
        } else {
            tempArray.push(arr[index]);
        }
    }
    return tempArray;
};

// var flat = function (arr, n) {
//     if (n === 0) return arr;
//     let res = [];
//     arr.forEach((item) => {
//         if (Array.isArray(item)) {
//             res.push(...flat(item, n - 1));
//         } else res.push(item);
//     })
//     return res;
// };