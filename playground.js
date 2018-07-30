var A = {
    fakeName: "A"
}

var b = Object.create(A);
b.age = "13";

console.log(b.fakeName);

for (const key in b) {
    console.log("for...in: " + key);
}