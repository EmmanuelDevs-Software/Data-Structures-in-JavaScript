const merge = (nums1, m, nums2, n) => {
  let result1 = [];
  let result2 = [];
  let resultFinal = [];
  if (m > n && m !== n) {
    return resultFinal.push(nums1);
  } else if (m < n && m !== n) {
    return resultFinal.push(nums2);
  } else if (m === n) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums1[i] !== 0) {
        result1.push(nums1[i]);
      }
    }

    for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] !== 0) {
        result2.push(nums2[j]);
      }
    }

    resultFinal = [...result1, ...result2].sort();
  }

  console.log(resultFinal);
  return resultFinal;
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
