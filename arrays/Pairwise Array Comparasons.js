// Pairwise Array comparation

const weekly_weather = [70, 72, 68, 65, 74, 74, 73];
// const weeksdays = [
//   'sunday',
//   'monday',
//   'tusday',
//   'wendesday',
//   'thursday',
//   'friday',
//   'saturday',
// ];

let max_delta = Math.abs(weekly_weather[0] - weekly_weather[1]);
// weekly_weather.length - 1 .... Utilizamos el -1 para evitar que intente hacer el loop final que retornaria NaN y romperia el programa.
for (let i = 0; i < weekly_weather.length - 1; i++) {
  let delta = Math.abs(weekly_weather[i] - weekly_weather[i + 1]);
  if (delta > max_delta) {
    max_delta = delta;
  }
}

console.log('max_delta', max_delta);

// Otra opcion comparamos el de la derecha con el de la izquierda
let max_delta2 = Math.abs(weekly_weather[0] - weekly_weather[1]);
for (let i = 0; i < weekly_weather.length; i++) {
  let temp1 = weekly_weather[i - 1];
  let temp2 = weekly_weather[i];
  let delta = Math.abs(temp1 - temp2);
  if (delta > max_delta2) {
    max_delta2 = delta;
  }
}

console.log('max_delta2', max_delta2);
