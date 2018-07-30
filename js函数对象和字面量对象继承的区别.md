# JS中函数对象（Function)和字面量对象(Object)继承的区别

## 问题
思考下面的代码：

示例1：
```javascript
var A = function() {
    this.fakeName = "A";    //Function.fakeName属性为函数的名称
}

var b = Object.create(A);
b.age = "13";

console.log(b.fakeName);

for (const key in b) {
    console.log("for...in: " + key);
}
```

示例2：
```javascript
var A = {
    fakeName: "A"
}

var b = Object.create(A);
b.age = "13";

console.log(b.fakeName);

for (const key in b) {
    console.log("for...in: " + key);
}
```

示例1， 示例2分别会打印出什么值呢？

答案：

1:

```shell
undefined
for...in: age
```

2:

```shell
A
for...in: fakeName
for...in: age
```

可以看出在使用Object.create()实现继承时，函数对象和字面量对象出现了不同。通过函数对象继承得到的对象无法使用for...in枚举出fakeName属性。

## 原因
* `Object.create()`方法创建一个新的对象，该对象的原型链绑定到参数对象上。

*  创建新的函数对象时，该函数对象默认拥有一个prototype属性且prototype.constructor的值为该函数对象。在function A中变量fakeName绑定到this上，而在js中this是由函数以何种方式被调用决定的，fakeName和函数对象A之间并没有关系。
因此A函数对象并不存在fakeName属性。