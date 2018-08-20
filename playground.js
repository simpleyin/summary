/**
 * 爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 块糖的大小，B[j] 是鲍勃拥有的第 j 块糖的大小。

因为他们是朋友，所以他们想交换一个糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）

返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。

如果有多个答案，你可以返回其中任何一个。保证答案存在。
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    let hi = B.length - 1;
    let lo = 0;
    while (lo <= hi) {
      let mid = Math.round(lo + (hi - lo) / 2);
      let cmp = (calRest(i, A) + B[mid]) - (calRest(mid, B) + A[i]);
      if (lo === hi && cmp !== 0) {
        break;
      }
      if (cmp > 0) {
        hi = mid - 1;
      } else if (cmp < 0) {
        lo = mid + 1;
      } else {
        return [A[i], B[mid]];  
      }
    }
  }
};

function calRest(index, arr) {
  return arr.reduce((p, c, i) => {
    if (index !== i) {
      return p + c;
    } else {
      return p;
    }
  }, 0)
}

console.log(fairCandySwap());

//TODO 超出时间限制