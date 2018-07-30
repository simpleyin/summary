# Event loop in depth

详细讲解event loop机制，各种异步任务的优先级，调用方式。

## 引言
有一道题目如下：
```javascript
(function test() {
    setTimeout(function() {console.log(4)}, 0);
    new Promise(function executor(resolve) {
        console.log(1);
        for( var i=0 ; i<10000 ; i++ ) {
            i == 9999 && resolve();
        }
        console.log(2);
    }).then(function() {
        console.log(5);
    });
    console.log(3);
})()
```
求控制台输出

我的答案：`1 2 3 5 4`

## 概念
`new Promise(function)` 属于同步调用，function参数会立即执行；

`Promise.then()` 和 `setTimeout()` 属于中的函数会异步调用；

那是由谁来决定何时调用这些异步函数呢？通知这些异步调用的消息又是由谁发出的呢？

首先浏览器环境中存在一个名为Event Loop机制，它可以被看做一个循环执行代码：

```javascript
while (queue.waitForMessage()) {
    queue.processNextMessage();
}
```

其中`queue`为任务队列，一个event loop可以有一个或多个任务队列(task queue),

## 解析
test()开始执行 => 

setTimeout执行，将回调函数放入task queue中 => 

`new Promise()`执行 => 

`console.log(1)` => 

for循环执行 => 

resolve(), 提醒event loop运行microtask队列中的任务，但由于主进程还有任务没有执行，将继续执行下面的代码 => 

`console.log(2)` => 

`console.log(3)` => 

主进程代码执行完毕 => 

event loop查询microtask队列是否有任务，并执行`() => console.log(5)` => 

event loop查询task queue是否有任务，并执行`() => console.log(4)` =>

执行完毕：输出1 2 3 5 4

## 参考
* [W3C EventLoop](https://www.w3.org/TR/html5/webappapis.html#event-loop)

* [从Promise来看JavaScript中的Event Loop、Tasks和Microtasks](https://github.com/creeperyang/blog/issues/21)

* [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

* [MDN EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)