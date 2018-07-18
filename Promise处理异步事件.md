# Promise处理异步事件

## 问题
一道编程填空题如下，补充完mergePromise函数使其满足cosole: [1, 2, 3]的输出
```javascript
const timeout = ms => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, ms);
});

const ajax1 = () => timeout(2000).then(() => {
	console.log('1');
	return 1;
});

const ajax2 = () => timeout(1000).then(() => {
	console.log('2');
	return 2;
});

const ajax3 = () => timeout(2000).then(() => {
	console.log('3');
	return 3;
});

const mergePromise = ajaxArray => {
    //code here
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
	console.log('done');
    console.log("data: " + data); // data 为 [1, 2, 3]
})
```

## Promise简介
> Promise对象表达了对某种承诺的实现状态。

1. 构造方法：
```javascript
var p = new Promise((resolve, reject) => {
    if ("worked fine") {
        resolve("success");
    } else {
        reject("fail");
    }
})
```
2. 链式调用：
```javascript
Promise.resolve("hi").then((data) => {
    //fulfillment 上一个Promise的状态为resolve，则执行此处代码
}, (reason) => {
    //rejection 上一个Promise的状态为reject,则执行此处代码
})
```
由于promise.then()返回一个Promise，则可在返回值上继续调用then(), catch()等方法。
then()函数中回调函数的返回值影响接下来的Promise链。
> * 若then中的回调函数范围一个值，则then返回的Promise将成为接受状态，且返回的值作为Promise resolve()中的值进行参数传递。

## 问题解决
```javascript
const mergePromise = ajaxArray => {
    //方法一, Promise.All()
    //三个promise履行的顺序依然是2, 1, 3，但输出的数字却是按照参数数组的顺序。
    return new Promise(resolve => {
        Promise.all([ajaxArray[0](), ajaxArray[1](), ajaxArray[2]()]).then(value => resolve(value));
    })

    // 方法二，promise链式调用
    // 三个promise的履行顺序为1, 2, 3。
    return new Promise(resolve => {
        var res = []
        ajaxArray[0]().then(d => {
            res.push(d);
            return ajaxArray[1]();
        }).then(d => {
            res.push(d);
            return ajaxArray[2]();
        }).then(d => {
            res.push(d);
            resolve(res);
        })
    })
};
```

## 问题扩展
1. 如何使用rxjs解决该题。
2. 如何使得三个ajax函数同时执行并返回规定的数组。


## 参考
* [google web dev](https://developers.google.com/web/fundamentals/primers/promises#queuing_asynchronous_actions)
* [Promise.prototype.then()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)