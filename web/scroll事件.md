# scroll

## scroll的场景
在浏览器中向下或向上滚动页面时，会触发DOM3的scroll event，scroll主要用于懒加载，loadmore, 回到顶部等。

## API
```js
window.addEventListener("scroll", (e) => {
    //e is event Object
    e.target;
    e.type;
    e.bubbles;
    e.cancelable;
    e.view;
    e.detail;
})
```

## 注意
1. scroll事件可能会频繁的触发，因此一些重型的任务不应当绑定到scroll事件上（如，DOM操作，大循环等），因此可在事件处理函数中加入防抖(debounce)和节流(throttle)

## 防抖debounce
> 函数在一段时间内被大量调用时不执行，等待大量调用结束后执行函数。或者被第一次调用时立即执行，屏蔽后续的大量调用。它的执行间隔是无序的。

```javascript
var times = 0;
var timer = 0;

window.addEventListener("resize", (e) => {
    debounce(handler, 300);
})

function debounce(func, time) {
    if (timer !== 0) {
        clearTimeout(timer);    //在下次定时器函数执行之前，若又触发了事件则取消之前的定时器。
    }
    timer = setTimeout(func, time);
}

function handler() {
    times++;
    var div = document.createElement("div");
    div.innerHTML = times;
    document.body.appendChild(div);
    console.log("scroll: " + times);
}
```



## 节流throttle
> 规定函数在一定时间(或者指定的一段刻度)内只执行一次，它的执行间隔是有序的。

```javascript
var times = 0;
var timer = 0;

window.addEventListener("scroll", (e) => {
    throttle(handler, 300);
})

function throttle(func, time) {
    if (timer === 0) {
        timer = setTimeout(() => {
            func();
            timer = 0;  //每次目标事件绑定函数的执行都会重置timer
        }, time);
    }
}


function handler() {
    times++;
    var div = document.createElement("div");
    div.innerHTML = times;
    document.body.appendChild(div);
    console.log("scroll: " + times);
}
```

## 使用requestAnimationFrame优化scroll事件


## 参考
[如何不择手段提升scroll事件的性能](https://zhuanlan.zhihu.com/p/30078937)
[Loadsh debounce](https://lodash.com/docs/4.17.10#debounce)
[requestAnimationFrame mdn](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
[debouncing-throttling-explained-examples](https://css-tricks.com/debouncing-throttling-explained-examples/)