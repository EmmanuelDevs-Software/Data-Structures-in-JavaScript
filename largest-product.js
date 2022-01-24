//Largest Product (2D) Arrays

/******
Creamos un array con arrays dentro donde cada array interna
indica indica la grid de la array.

array[ROW][COLUMN]
*****/

function largestProduct(aa) {
  let largest = aa[0][0] * aa[0][1];
  let row1 = 0;
  let col1 = 0;
  let row2 = 0;
  let col2 = 1;

  /************
    returns the value of element in a 2d array
  for the given row and column. Or, returns a default
  value in the row is out bound(return zero) 
    ************/
  function getCell(aa, row, col) {
    if (row < 0 || col < 0) {
      return 0;
    }
    if (row >= aa.length) {
      return 0;
    }
    if (row >= aa[row].length) {
      return 0;
    }
    return [row][col];
  }

  // function updateLargest(r1, c1, r2, c2) {
  //   let value = getCell(aa, r1, c1);
  //   let other= getCell(aa, r2, c2);
  //   if (value * other > largest) {
  //     largest = value * other
  //     row1 = r1;
  //     col1 = c1;
  //     row2 = r2;
  //     col2 = c2;
  //   }
  // }

  function updateLargest(r1, c1, r2, c2) {
    let value = aa[r1][c1];
    let othen = aa[r2][c2];
    if (value * othen > largest) {
      largest = value * othen;
      row1 = r1;
      col1 = c1;
      row2 = r2;
      col2 = c2;
    }
  }

  for (let row = 0; row < aa.length; row++) {
    for (let column = 0; column < aa[row].length; column++) {
      // updateLargest(row, column, row, column - 1);  //left
      // updateLargest(row, column, row, column + 1);  //rigth
      // updateLargest(row, column, row - 1, column);  //top
      // updateLargest(row, column, row + 1, column);  //bottom

            let value = aa[row][column];

            // prevent accessing a column before the start of the row
            if (column - 1 >= 0) {
              updateLargest(row, column, row, column - 1);
              // largest = Math.max(largest, value * left);
            }

            //prevent accessing off the end of the row
            if (column + 1 < aa[row].length) {
              updateLargest(row, column, row, column + 1);
              // let right = aa[row][column + 1];
              // if (value * right > largest) {
              //   largest = value * right;
              //   row1 = row;
              //   col1 = column;
              //   row2 = row;
              //   col2 = column + 1;
              // }
              // largest = Math.max(largest, value * right);
            }

            //only access a row if it`s not before the top
            if (row - 1 >= 0) {
              updateLargest(row, column, row - 1, column);
              let top = aa[row - 1][column];
              // if (value * top > largest) {
              //   largest = value * top;
              //   row1 = row;
              //   col1 = column;
              //   row2 = row - 1;
              //   col2 = column;
              // }
              //largest = Math.max(largest, value * top);
            }

            //prevent accessing a row below the bottom of the 2d grid
            if (row + 1 < aa.length) {
              updateLargest(row, column, row + 1, column);
              // let bottom = aa[row + 1][column];
              // if (value * bottom > largest) {
              //   largest = value * bottom;
              //   row1 = row;
              //   col1 = column;
              //   row2 = row + 1;
              //   col2 = column;
              // }
              //  largest = Math.max(largest, value * bottom);
            }
    }
  }
  console.log(aa[row1][col1], '*', aa[row2][col2], '=', largest);
  return largest;
}

let aa = [
  [32, 45, 67, 99],
  [94, 34, 88, 12],
  [32, 76, 2, 74],
  [77, 33, 88, 99],
];

console.log(largestProduct(aa));
