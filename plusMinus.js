function plusMinus(arr) {
    // Write your code here
    let leng = arr.length
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let result = [];
    let resultPositive = 0;
    let resultNegative = 0;
    let resultZero = 0;
    
    arr.forEach(res => {
        if (res > 0) {
            positive++
            let resultRaw = positive / leng;
            resultPositive = resultRaw.toFixed(leng);
        } else if (res < 0) {
            negative++
            let resultRaw = negative / leng;
            resultNegative = resultRaw.toFixed(leng);
        } else {
            zero++;
            let resultRaw = zero / leng;
            resultZero = resultRaw.toFixed(leng);
        }
    })
    console.log(resultPositive, '\n', resultNegative,'\n', resultZero)
    }
