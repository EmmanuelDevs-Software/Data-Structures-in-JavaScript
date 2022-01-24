/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k, ) {
    const shiftCount = k % nums.length;
    const arr = nums.splice(nums.length - shiftCount);
    nums.splice(0, 0, ...arr);
};