/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    let len = this.length;
    return len === 0 ? -1 : this[len - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */