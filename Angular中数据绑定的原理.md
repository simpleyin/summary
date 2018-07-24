# Angular中数据绑定的原理

## 数据绑定
在前端开发中通常数据绑定指的是view与model，即html与js中间数据的关系。这种关系又分为单向绑定(model => view)，和双向绑定（model <=> view)。Angular能够实现上述的两种绑定。

## 思考
在不适用框架的情况下，怎样才能做到当js中一个变量的值发生变化，html视图中做出相应的改变呢?
```javascript
var name = "DEFAULT";
http.get("/getName").(d => name = d);
```
```html
<span>hello, my name is {{name}}</span>
```

1. 循环检测，建立一个循环检测机制，在规定的间隔时间内启动一次检测，将当前值和历史值不同的属性进行更新。但是这样做会由严重的性能问题。
2. virtual DOM?

## Angular中的变化检测(change detection)
众所周知，Angular构建的应用可以看做一颗组件树，而每个组件都对应一个视图(view)，每个view都拥有自己的DOM结构树和属性(既在html模板引用的变量)。

change detection就发生在view上。

## 参考
[Everything you need to know about change detection in Angular](https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f)