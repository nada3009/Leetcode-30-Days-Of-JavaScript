/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    const compactObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        let elem = obj[key];
        if (elem) {
            if (typeof elem === "object") elem = compactObject(elem);
            Array.isArray(obj) ? compactObj.push(elem) : compactObj[key] = elem;
        }
    }
    return compactObj;
};


// var compactObject = function (obj, temp = []) {
//     if (!(obj)) return false;
//     if (typeof obj !== 'object') return obj;
//     if (Array.isArray(obj)) {
//         // let arr = []
//         for (val of obj) {
//             if (val instanceof Object && val !== null) {
//                 compactObject(val, temp)
//             }
//             if (Boolean(val)) temp.push(val);
//         }
//         // temp.push(arr);
//     }
//     return temp;
// };

