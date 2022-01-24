// Pairwise Array comparation

// accepts an array and returns the total of the  differences of each value in the array
//give:[2,6,12,19];
// returns (4+6+7) -> 17

function sumDelta(arr) {
  let total = 0;

  /**
(let i = 0;i<arr.length - 1;i++  Utilizamos el -1 para evitar la comparación final con un elemento que no existe lo cual haria que devolviera Nan 
**/
  
  if(arr.length == 0){
    return 0;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let v1 = arr[i];
    let v2 = arr[i + 1];
    let delta = Math.abs(v1 - v2);
    total += delta;
  }
  return total;
}

/***
Consider these cases when you`re writing a funcion that deals  with an array
*whay if the array is empty?
*what if there`s just one value?
*what if there`s just two values?
*what if there`s just mabt values?
***/

sumDelta([2, 6, 12, 19]);
sumDelta([2, 6]);
sumDelta([2]);
sumDelta([]);
