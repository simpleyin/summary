# async and await

## 引言
async 和 await是ES6中的新标准，目的是为了将Promise操作同步化，让代码更精简直观。
> The purpose of async/await functions is to simplify the behavior of using promises synchronously and to perform some behavior on a group of Promises. Just as Promises are similar to structured callbacks, async/await is similar to combining generators and promises.

> Async/Await的长处在于处理多个Promise。

## Example

```javascript
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
```
上面的代码依次打印：
```shell
> "calling"
> "resolved"
```

## Async
async 函数申明符将函数定义为异步函数。

语法：
> async function name(param) { statements }

async function执行完毕后始终返回一个Promise对象，并且该Promise是处于Resolved状态，传递的参数为`函数返回的值`；或者该Promise是处于Reject状态，参数为函数中未捕获的错误。

## Await
await作为等待Promise的操作符，只能在async函数中使用。

await也可等待值，但这样不存在异步，也就没有意义。

await会“阻塞”当前的async函数中后续代码的执行，这种阻塞其实类似于通过管理Promise的状态来决定何时执行后续Promise链中的代码一样。



## 参考
[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
[async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

