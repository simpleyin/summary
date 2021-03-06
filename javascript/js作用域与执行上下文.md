## 问题
```javascript
function Foo() {
    var i = 0;
    return function() {
        console.log(i);
    }
}
 
var f1 = Foo(),
    f2 = Foo();
f1();
f1();
f2();
```
输出的值是多少呢？

## 闭包
> 作用域的引用已某种方式被持有称为闭包 
在上面的代码中，Foo()返回一个函数，该函数中有声明在Foo函数作用域中的变量i,虽然Foo函数已执行完毕，但我们可以通过调用f1函数获取i的值。这就叫闭包，f1函数保有了Foo函数的作用域，使得本应该被
销毁的作用域和变量都得以保留。

OK，那问题来了。f1, f2保有的Foo函数作用域是同一个作用域吗？
## 作用域(scope)

首先，我们应该明确js中只存在词法作用域，就是说作用域是在代码运行之前就确定了，作用域不会根据函数在何处被执行而改变。

观察上面的代码，可以看出f1, f2保有Foo函数的作用域都是同一作用域，作用域中都拥有变量i。

f1

<img src="https://www.simpleyin.xyz/doc/scopef1.png">

f2

<img src="https://www.simpleyin.xyz/doc/scopef2.png">

既然f1, f2都引用同一个作用域，那为什么i值会不相同？

## 执行上下文(execution context)
Ecma-262中对执行上下文的定义:
> An execution context is a specification device that is used to track the runtime evaluation of code by an ECMAScript
implementation

> An execution context contains whatever implementation specific state is necessary to track the execution progress of its associated code. 

根据：
> A new execution context is created whenever control is transferred from the executable code associated with the currently running execution context to executable code that is not associated with that execution context.

我们知道当 JavaScript 代码执行一段可执行代码(executable code, 或进入新的执行环境)时，会创建对应的执行上下文(execution context)

包括：

* 创建Scope chain
* 创建VO / AO
* 设置this的值

如var f1 = Foo(), 在执行Foo()时会创建一个新的上下文并将其压入执行上下文栈（见下一节)。

上下文对象会保存上下文中```定义```的变量对象和函数申明，这个新的上下文可抽象表示为:

```javascript
executionContextObj = {
    scopeChain: { /* 变量对象（variableObject）+ 所有父执行上下文的变量对象*/ }, //作用域链
    variableObject: { /*函数 arguments/参数，内部变量和函数声明 */ }, 
    this: {} 
}
```
由于每一次执行函数都会创建新的上下文，因此```var f1 = Foo(), f2 = Foo();```会创建两个不同的上下文，这两个上下文中也就包含了两个不相关的i变量。由于js属于词法作用域，执行```f1()```所创建的上下文就被包含在了```Foo()```所创建的上下文里，因此f1()中上下文的scopeChain绑定了Foo()上下文中的变量。

```因此f1, f2的父上下文是两个不同的上下文，两个i变量独立，因此i值不同```。题目输出的结果应该为：```0 1 0```

```闭包的原理```：Foo()执行完毕后，Foo的执行上下文对象被弹出ECS，但由于f1拥有对Foo中变量对象的引用，Foo上下文虽然被弹出ECS但是没有被js的垃圾回收机制回收，仍然存在于内存空间，因此可以访问和使用Foo上下中的变量对象。

## 执行上下文的作用
现代JS engine执行代码是即时执行的，一行一行的编译同时执行，执行上下文的作用就是为每一行代码的执行提供一个上下文，包括变量对象，this的值，以及作用域链。


## 执行上下文栈(execution context stack, ECS)
Ecam-262定义:
> The execution context stack is used to track execution contexts. The running execution context is always the top element of this stack.

执行上下文栈是一个栈结构用于存储js运行时所有的执行上下文，一旦进入新的执行环境，新的执行上下文就被创建，同时压入ECS，当该执行环境中的代码执行完毕后，该上下文从栈的顶部弹出。

## 执行环境
* 全局环境(GEC)，当js代码首次运行时进入的环境。
* 函数环境(FEC)，当函数被调用时，开始执行函数内代码时进入环境。
* Eval, eval中的文本被执行时进入的环境。

## 执行上下文栈和函数执行栈的区别？
execution context stack === call stack


## 动态与静态
* 执行上下文中的this值是由函数调用的方式决定的。即使动态的。
* 执行上下文中的作用域是由词法作用域决定的，属于静态的。

## 参考
* [javascript深入之执行上下文栈](https://github.com/mqyqingfeng/Blog/issues/4)
* [what-is-the-execution-context-in-javascript](http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/)
* [JavaScript 的执行上下文](https://juejin.im/entry/58edde2761ff4b00581b93ff)