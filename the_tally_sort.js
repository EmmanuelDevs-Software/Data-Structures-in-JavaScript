//The tally Sort

//find min number
//find max number
// create an array to tally occurences of each number
//between min and max
//return an array that fills out the array according yo
//the tally as if original array were sorted

function randomArray(max, size) {
  let result = new Array(size);

  for (let i = 0; i < size; i++) {
    let random = Math.floor(max * Math.random());
    result[i] = random;
  }
  return result;
}

function tallySort(arr) {
  // find the max number in the array
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  console.log(arr);
  //tally all the numbes
  let tally = new Array(max);
  for (let i = 0; i < arr.length; i++) {
    // look at the number in the array
    let value = arr[i];
    // use the value of the number as an endex into the tally array
    // see if anything is defined there to determine if we`re started
    // tallying this number yet
    if (tally[value] === undefined) {
      // set it to zero occurences iuf we`ve not seen the number yet
      tally[value] = 0;
    }
    // incremente how many times we`ve seen that number
    tally[value]++;
  }
  console.log('tally:', tally);
  let result = new Array(arr.length);
  let index = 0;
  for (let i = 0; i < tally.length; i++) {
    let occurence = tally[i];
    let n = 0;
    while (occurence !== undefined && n < occurence) {
      result[index] = i;
      index++;
      n++;
    }
  }
  return result;
}

let arr = randomArray(3, 10);
tallySort(arr);
