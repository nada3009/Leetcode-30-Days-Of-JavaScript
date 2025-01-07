/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let flag = false; // forms a closure and remembers its previous state
    return function (...args) {
        if (!flag) {
            flag = true;
            return fn(...args);
        }
        else return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
