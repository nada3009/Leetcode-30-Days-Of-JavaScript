/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function (arr1, arr2) {
    let merged = {};
    arr1.forEach(obj => merged[obj.id] = { ...obj });
    arr2.forEach(obj => merged[obj.id] = { ...merged[obj.id], ...obj });
    return Object.values(merged); // JavaScript automatically sorts the positive numeric keys in an object because it follows the ECMAScript specification
    // let result = Object.values(merged).sort((a,b) => a.id - b.id);
    // return result;
};