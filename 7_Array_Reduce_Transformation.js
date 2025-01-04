/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    if (nums.length === 0) return init;
    let acc = init;
    for (let i = 0; i < nums.length; i++) {
        acc = fn(acc, nums[i]);
    }
    return acc;
};

/** 
 * const nums = [1,2,3,4], init = 0
 * function sum(accum, curr) { return accum + curr; }
 * const res = reduce(nums, sum, init); // 10
*/
