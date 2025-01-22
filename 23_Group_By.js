/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let grouped = {};
    this.forEach(item => {
        let val = fn(item);
        if (grouped.hasOwnProperty(val)) {
            grouped[val].push(item)
        } else grouped[val] = [item];
    })
    return grouped;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */