setTimeout(() => console.log("c"), 0);
new Promise(resolve => {
    setTimeout(() =>console.log("a"), 0);
})
console.log("b");