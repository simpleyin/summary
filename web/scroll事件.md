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
> 函数在滚动事件内被多次调用，但只执行一次或规定的次数。可以通过setTimeout对函数进行延迟执行,下面代码中，将handler设置为每300ms执行一次。

    ```js
    var times = 0;
    var timer = 0;

    window.addEventListener("scroll", (e) => {
        debounce(handler, 300);
    })

    function debounce(func, time) {
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

## 节流throttle
> 

## 参考
[如何不择手段提升scroll事件的性能](https://zhuanlan.zhihu.com/p/30078937)
[Loadsh debounce](https://lodash.com/docs/4.17.10#debounce)