# async and await

## 引言
async 和 await是ES6中的新标准，目的是为了将Promise操作同步化，让代码更精简直观。
> The purpose of async/await functions is to simplify the behavior of using promises synchronously and to perform some behavior on a group of Promises. Just as Promises are similar to structured callbacks, async/await is similar to combining generators and promises.

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

async function执行完毕后始终返回一个Promise对象，并且该Promise是处于Resolved状态，传递的参数为函数返回的值；或者该Promise是处于Reject状态，参数为函数中未捕获的错误。

## Await
await作为等待Promise的操作符，只能在async 函数中使用。

## 参考
[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
[async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

