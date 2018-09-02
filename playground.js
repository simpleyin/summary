// //快排
// var mock = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
// var quickSort = function (arr) {
//     var base = arr[0];
//     var i = 0, j = arr.length - 1;
//     if (arr.length === 1) return arr;
//     while (i < j) {
//         if (arr[j] >= base) {
//             j--;
//         } else if (arr[i] <= base) {
//             i++;
//         } else {
//             swap(i, j, arr);
//             j = j - 1;
//             i = i + 1;
//         }
//     }
//     swap(0, i, arr);
//     var left = quickSort(arr.slice(0, i));
//     var right = quickSort(arr.slice(i + 1, arr.length));

    
//     return [...left, base, ...right];
// }

// var swap = function (i, j, arr) {
//     var t = arr[j];
//     arr[j] = arr[i];
//     arr[i] = t;
// }

// quickSort(mock);
var n = 1;
var a = {};
a[n] = "huang";
console.log(a);





//Fibonacci
