function sumOfRange(l, r, arr) {
    return arr.slice(l, r + 1).reduce((p, c) => {
     return c = p + c;   
    });
}

//console.log(sumOfRange(1, 1, [0, 1, 2, 3, 4, 5]));

//给出数组中的多个区间，在常数事件内求出和
function sumOfMultiRange(range, arr) {
    
}