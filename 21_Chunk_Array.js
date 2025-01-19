/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let res = [], temp = arr;
    while (temp.length > 0) {
        if (temp.length > size) {
            res.push(temp.splice(0, size));
        } else {
            res.push(temp.splice(0, temp.length));
        }
    }
    return res;
};
