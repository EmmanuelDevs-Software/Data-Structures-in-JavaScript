// Searching values

// Return true if the given array
// contains the given value
// contains([14,55,67,88], 67) -> true
// // contains([14,55,67,88], 66) -> false

function contains(arr, value) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

/***
Consider these cases when you`re writing a funcion that deals  with an array
*whay if the array is empty?
*what if there`s just one value?
*what if there`s just two values?
*what if there`s just mabt values?
***/

contains([14, 55, 67, 88], 67);
contains([14, 55, 67, 88], 66);
contains([], 66);

/****
retuns true is the array is sorted in ascending order
where each element is greater or equal to the element
precending it


for (let i = 1; i < arr.length; i++) ; let i stars in one for prevent the Nan when do the last comparation.

****/
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

isSorted([14, 55, 67, 88]);
isSorted([88, 14, 55, 67]);
isSorted([]);
isSorted([0, 14]);
isSorted([88]);

/*************************



*************************/

function isSorted2(arr) {
  let isAscending = true;
  let isDescending = true;
  for (let i = 1; i < arr.length; i++) {
    let v1 = arr[i - 1];
    let v2 = arr[i];
    //We know the array is ascending
    if (v1 < v2) {
      isDescending = false;
    }
    //We know the array is descending
    if (v1 > v2) {
      isAscending = false;
    }
  }
  return isAscending || isDescending;
}

isSorted2([]);
isSorted2([42]);
isSorted2([39, 42]);
isSorted2([42, 39]);
isSorted2([1, 2,3,4,5]);
isSorted2([5,4,3,2,1]);
isSorted2([1,5,2]);