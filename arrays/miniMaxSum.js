function miniMaxSum(arr) {
    // Write your code here
    /******
     *
     * El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
     *
     */
   let sum = arr.reduce((a,b) => {
       return a + b
   });

    let min = sum - Math.max(...arr)
    let max = sum - Math.min(...arr)

    console.log(min + " " + max);
}

miniMaxSum([7, 69, 2, 221, 8974])