//Minesweeper (2D) Arrays

/******
Creamos un array con arrays dentro donde cada array interna
indica indica la grid de la array.

array[ROW][COLUMN]
*****/

let minesfield = [
  ['*', '*', '', ''],
  ['*', '*', '', ''],
  ['', '', '*', ''],
  ['', '', '', ''],
];

// the output should preint the follown
//**20
//**31
//23*1
//0111

function minesweeper(minesfield) {
  function getCell(row, col) {
    if (row < 0 || col < 0) return 0;
    if (row >= minesfield.length) return 0;
    if (col >= minesfield[row].length) return 0;
    if (minesfield[row][col] === '*') return 1;
    return 0;
  }
  for (let row = 0; row < minesfield.length; row++) {
    let line = '';
    for (let col = 0; col < minesfield[row].length; col++) {
      if (getCell(row, col) === 1) {
        line += '*';
      } else {
        let bombs = 0;
        //top-left, top, top-rigth
        bombs += getCell(row - 1, col + 1);
        bombs += getCell(row - 1, col);
        bombs += getCell(row - 1, col - 1);

        bombs += getCell(row, col - 1); // left
        bombs += getCell(row, col + 1); // rigth

        //bottom-left, bottom, bottom-rigth
        bombs += getCell(row + 1, col - 1);
        bombs += getCell(row + 1, col);
        bombs += getCell(row + 1, col + 1);
        
        line += bombs
      }
    }
    console.log(line);
  }
}

minesweeper(minesfield)
