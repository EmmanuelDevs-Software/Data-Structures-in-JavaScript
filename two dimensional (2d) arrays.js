//Two Dimensional (2D) Arrays

/******
Creamos un array con arrays dentro donde cada array interna
indica indica la grid de la array.

array[ROW][COLUMN]
*****/

let timeTable = [
  [1,2,3,4,5],
  [2,4,6,8,10],
  [3,6,9,12,15],
  [4,8,12,16,20],
  [5,20,15,20,25]
]

for(let row=0; row<timeTable.length;row++){
  let line = ""
  for(let column = 0;column<timeTable[row].length;column++){
      let value = timeTable[row][column];
      line += value + " ";
  }
  console.log(line)
}

