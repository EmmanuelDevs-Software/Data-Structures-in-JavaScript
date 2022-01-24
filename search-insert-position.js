/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let positionEqual = 1;
  let positionLess = 0;

  if (target == 1) {
    return 0;
  }

  if (nums.includes(target)) {
    nums.forEach((res) => {
      if (res < target) {
        positionLess++;
      }
    });
  } else {
    nums.forEach((res) => {
      if (res < target) {
        positionLess++;
      }
    });
  }

  return positionLess;
};