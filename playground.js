var a = {
    name: "huang",
    age: "16",
    home: "China",
    level: 0
}

//字面量对象可否像数组一样使用map等操作符？

Array.prototype.map.call(a, (k, v) => {
    console.log(k);
})

var res = [1, 1, 2, 2, 3, 3, 4, 4].reduce((p, c, i, a) => {
    let l = p.length;
    if (l === 0 || p[l - 1] !== c) p.push(c);
    return p;
}, []);
console.log(res);


