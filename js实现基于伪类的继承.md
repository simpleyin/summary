# js实现基于伪类的继承

## 问题

```javascript
function Fruit(size) {
    this.size = size;
}

Fruit.prototype.showSize = function() {
    console.log(this.size);
}

//现在实现一个appple类，继承自Fruit.拥有Fruit的size属性，showSize方法
//并且apple类拥有自己的属性name,自己的方法showName
//如何实现？
```
在js中可以通过原型链来实现方法的继承，而属性的继承则需要一点小技巧。

## 解决

```javascript
function Apple(size, name) {
    Fruit.call(this, size);   //将Fruit作为函数执行，将Fruit执行上下文中的this绑定为Apple上下文中的this。这其实产生了闭包，Fruit()函数运行后没有销毁。
    this.name = name;
}

Apple.prototype = Object.create(Fruit.prototype);   //覆盖Apple默认的prototype对象，Object.create会创建一个新的对象，该对象的原型链指向Fruit.prototype。
Apple.prototype.constructor = Apple;    //默认的Apple.prototype对象中的constructor是Apple，但刚才被覆盖掉，因此重新赋值。

Apple.prototype.showName = function() {
    console.log(this.name);
}

let apple = new Apple("big", "apple");  //实例化Apple类
```
### 继承方法

我们通过链接子类的prototype到父类的prototype, 这样在构造调用子类时，新的根据子类创建的对象内部的原型链就指向子类的prototype对象。
再调用父类方法时，根据原型链往上查找，apple => Apple.prototype => Fruit.prototype => Object.prototype。

### 继承属性

在使用构造调用Apple()时，构造函数Apple执行上下文中的this为构造调用新建的对象（apple），执行`Fruit.call(this, size)`就将Fruit执行上下文中的this绑定为apple。
从而apple拥有了对Fruit作用域的访问权，形成了闭包。但是这种方式并不好理解，因此就有了基于[委托的继承]()。

