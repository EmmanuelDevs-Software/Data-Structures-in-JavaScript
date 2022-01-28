var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    //Time complexity : O(\log n)O(logn). The search space is halved each time, so the time complexity is O(\log n)O(logn)
    //Space complexity : O(1)O(1).

    // let left = 1;
    // let right = n;
    // while (left < right) {
    //     let mid = left + (right - left) / 2;
    //     if (isBadVersion(mid)) {
    //         right = mid;
    //     } else {
    //         left = mid + 1;
    //     }
    // }
    // return left;
    // };

    //     Time complexity : O(n)O(n). Assume that isBadVersion(version)isBadVersion(version) takes constant time to check if a version is bad. It takes //at most n - 1n−1 checks, therefore the overall time complexity is O(n)O(n).

    //Space complexity : O(1)O(1).

    for (let i = 1; i < n; i++) {
      if (isBadVersion(i)) {
        return i;
      }
    }
    return n;
  };
};
