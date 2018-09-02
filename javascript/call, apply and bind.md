# call, apply and bind

## 作用
1. call, apply
    1. 构造对象，通过在对象内部调用call可以实现对象属性的继承
    ```js
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }

    Animal.prototype.bark = function() {
        console.log("bark: " + this.sound);
    }

    function Cat(tail, sound) {
        this.tail = tail;
        this.sound = sound;
        Animal.call(this, "cat", "white");
        return this;
    }

    /* 创建一个新的空对象与Animal.prototype进行原型链的绑定 */
    var cat = Object.create(Animal.prototype);
    /* 使用call调用绑定Cat内部this到cat对象，实现属性的绑定 */
    cat = Cat.call(cat, "long", "miao miao");

    cat.bark();
    ```
    2. 匿名函数执行
    3. 指明函数执行上下文中this的值
    4. 继承属性
2. bind
    1. 创建一个新的函数，其中this的值由bind()的参数提供

## 使用
1. call, apply
2. bind
    1. 创建一个绑定函数，对函数中的this进行绑定
    ```js
    function.bind(thisArg[, arg1[, arg2]]);
    ```
    2. 在setTimeout中使用时，如```setTimeout(this.fun, 1000);```，则event loop在调用该函数到call stack中执行时，this会指向全局.
    可以通过绑定this解决,如```setTimeout(this.fun.bind(this), 1000);```

## 原理
1. call, apply
2. bind
    1. 通过在内部调用call的方式，实现绑定this的调用。


## 问题
1. 如何在不适用call方法的前提下实现bind()的绑定this。

## 参考
[MDN bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)