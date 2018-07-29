# Event loop in depth

详细讲解event loop机制，各种异步任务的优先级，调用方式

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

我的答案：1 2 3 5 4

## 概念


## 解析
test()开始执行 => 

setTimeout执行，将回调函数放入task queue中 => 

```new Promise()```执行 => 

```console.log(1)``` => 

for循环执行 => 

resolve(), 提醒event loop运行microtask队列中的任务，但由于主进程还有任务没有执行，将继续执行下面的代码 => 

```console.log(2)``` => 

```console.log(3)``` => 

主进程代码执行完毕 => 

event loop查询microtask队列是否有任务，并执行```() => console.log(5)``` => 

event loop查询task queue是否有任务，并执行```() => console.log(4)``` =>

执行完毕：输出1 2 3 5 4