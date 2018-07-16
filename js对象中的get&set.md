# js对象中的get, set访问器

## 问题的提出
在使用addEventlistener接口时我遇到了浏览器兼容性的问题，一些老旧的浏览器使用```addEventlistener(type: string, function: Function, useCapture: boolean)```接口，当我们使用新的接口（capture被包裹在了一个option对象中）时，旧浏览器变会出错。Mozzila给出了解决方案，通过使用对象的get特性。

## [[get]], [[put]]概念
```javascript
var obj = {
    name: "OBJ"
};

obj.name; //"OBJ"
```
观察上面的代码，当我们在obj对象上获取属性name时，其实是在对象内部执行了[[get]]操作，先在该对象上查找属性，没有找到时，会通过[[prototype]]原型链向上继续查询，若属性不存在则返回undefined。
同理[[put]]操作处理对对象赋值的情况，但更复杂：
* 属性是否属于访问描述符，若是且属性存在则调用setter.
* 属性的数据描述符中writable是否是false，若false,则赋值失败.
* 若都不是则进行赋值

## getter, setter
在ES5中getter和setter被称作属性描述符，使用属性描述符为属性提供相应的操作函数，如：
```javascript
var obj = {
    get name() {
        return this._name_;
    },

    set name(name) {
        this._name_ = name;
    }
}

obj.name; //undefined
obj.name = "OBJ";
obj.name; //OBJ
```
obj对象中name函数执行的返回值作为obj.name的值。而且，gettter, setter最好成双出现，若只在对象中定义了getter，在对对象使用普通赋值的话，赋值会失败。

## 解决问题
我们想让第三个参数既可以作为对象参数，也能作为布尔变量传入函数，则需要进行浏览器的检测。
```javascript
var passiveSupported = false;

var option = Object.defineProperty({}, "passive", {
    get: () => {
        passiveSupported = true;
    }
});

window.addEventListener("test", null, option);
element.addEventlistener("click", handler, passiveSupported ? option : false);
```
运行这段代码，会检查浏览器是否支持option为对象的API（浏览器会做[[get]]操作，触发get属性描述符对应的函数，改变passiveSupport的值），
## 注意
* setter和getter中不要使用和对象属性同名的属性绑定在this上，否则会造成死循环，如
```javascript
set name(n) {
    this.name = n;
}
```
