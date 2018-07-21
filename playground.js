//问题1，为Array添加一个处理到重复元素的方法, 也可用reduce
Array.prototype.removeSame = function () {
    return this.sort((a, b) => a - b)
                .map((v, i, a) => v === a[i + 1] ? undefined : v)
                    .filter((v) => v !== undefined);
}



//问题2，用js实现用户登录的验证
function verify(account, password) {

}


console.log([0, 1, 2, 3, 4].reduce((p, c) => p + c, 1));