# Angular中数据绑定的原理

## 数据绑定
在前端开发中通常数据绑定指的是view与model，即html与js中间数据的关系。这种关系又分为单向绑定(model => view)，和双向绑定（model <=> view)。Angular能够实现上述的两种绑定。

## 思考
在不适用框架的情况下，怎样才能做到当js中一个变量的值发生变化，html视图中做出相应的改变呢?
```javascript
var name = "DEFAULT";
//异步请求，获得数据并对name赋值。
this.http.get("/getName").(d => name = d);
```

```html
<span>hello, my name is {{name}}</span>
```

1. 循环检测，建立一个循环检测机制，在规定的间隔时间内启动一次检测，将当前值和历史值不同的属性进行更新。但是这样做会由严重的性能问题。(脏值检测)
2. virtual DOM?
3. ES6 Proxy

## Angular中的变化检测(change detection)
Angular构建的应用可以看做一颗组件树，而每个组件都对应一个视图(view)，每个view都拥有自己的DOM结构树和属性(既在html模板引用的变量)。

change detection就发生在view上。

Angular使用刚才提到的策略1，即建立一种循环检测的机制比较新旧值，再对视图进行更新。这种检测的机制不可能一直执行，会由Angular指定何时执行。

model数据往往通过Event, XHR, Timers等进行改变，Angular使用ngZone[Zone.js]()绑定所有的异步API，使得当异步事件执行时，Angular得到通知，进而执行检测机制。

### Change Detection的执行

每个组件都拥有一个Change Detector（简称cd）,这些cd也就构成了类似组件树的cd树，change Detection执行在cd树的顶点，自上而下的遍历cd树，执行每个节点的change detector.

### 可以掌控的Change Detection

1. OnPush策略，通过指定组件的changeDetection为ChangeDetectionStrategy.OnPush策略，使得change detection执行时绕开该组件。这样能够提高脏值检测的效率

2. Observables

## DOM update

Angular编译器使用工厂模式构造组件，如有下面的html模板：

```html
<span>I am {{name}}</span>
```
Angular引擎将其编译为函数：

```javascript
function View_AComponent_0(l) {
    return jit_viewDef1(0,
    [
        jit_elementDef2(0,null,null,1,'span',...),
        jit_textDef3(null,['I am ',...])
    ],
    null,
    //updateRenderer
    function(_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.name;
        _ck(_v, 1, 0, currVal_0);
    }
    )
}
```

编译后的函数中有一个带有参数`_ck`, `_v`(分别为prodCheckAndUpdate的引用？，组件的View对象)的函数，我们叫它updateRenderer，它会在每次组件进行change detection时执行，而参数_ck, _v有cd机制确定（？）









## 参考
[Everything you need to know about change detection in Angular](https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f)
[Angular 变化检测机制](https://zhuanlan.zhihu.com/p/27901766)
[Change-Detection-in-Angular2](https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html)