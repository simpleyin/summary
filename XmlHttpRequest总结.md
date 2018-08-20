## AJAX(异步javascript和XML)
> 一种网页服务器进行进行异步数据交互的技术

AJAX中最重要的部分是使用XMLHttpRequest对象，它能够接受如JSON,XML,HTML和文本信息。

## 使用AJAX进行一个请求的步骤

### step.1 构建异步请求对象并发起请求

```javascript
// Old compatibility code, no longer needed.
var httpRequest;
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
httpRequest.open("GET", "http://www.simpleyin.xyz:8080/QiangDanBao/get.seller.landmark", true);
httpRequest.send();
```
在上面的代码中根据不同的浏览器创建了不同的httpRequest对象,使用open()方法配置request对象。

send()调用时开始进行http请求。open只是改变了httpRequest对象的readyState的状态，并没有“打开”链接。

send()方法接受对服务器进行POST请求的参数（可以为哪些类型？是否必须序列化为字符串？）

使用POST请求时，可以设置Content-Type头部，指定发送的数据类型。

> 注意，在open中默认情况下URL参数不能跨域,可使用CORS机制从服务器对控制跨域访问。

### step.2 处理服务器返回数据
在上一步对httpRequest对象的onreadystatechange进行回调函数的绑定，在该回调函数中我们对request状态进行判断依次处理数据
```javascript
httpRequest.onreadystatechange = function() {
    if (this.readyState === 0) {
        //UNSENT, request not initialized, open() not called yet
        console.log(0);
    }
    else if (this.readyState === 1) {
        //OPENED, server connection established, open() has been called
        console.log(1);
    }
    else if (this.readyState === 2) {
        //HEADERS_RECEIVED, request received, send() has been called, and headers and status are available.
        console.log(2);
    }
    else if (this.readyState === 3) {
        //LOADING, processing request, Downloading, responseText holds partial data.
        console.log(3);
    }
    else if (this.readyState === 4) {
        //DONE, request finished and response is ready, the operation is complete.
        console.log(4);
        if (this.status === 200) {
            // 返回成功的响应
            console.log(this.responseText);
            console.log(this.responseXML);
        }
    }
};
```

### step.3 发送数据给服务器
表单数据使用POST方法进行发送，并设置header的Content-Type.（中文记得设置charset=UTF-8）
```javascript
httpRequest.send(JSON.parse({name: "huang", age: "25"}));
httpRequest.setRequestHeader("Content-Type", "application/json");
````

## 注意
* <form>表单提交的四种方式：
1. 方法: POST， 编码类型:  ```application/x-www-form-urlencoded```
2. 方法：POST, 编码类型：```text/plain```
3. 方法：POST, 编码类型：```multipart/form-data```
4. 方法: GET.

* 如果不在<from>标签中设置相应的action，而使用js对表单进行提交，详情见:https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Handling_responses;


## 参考
* [MDN AJAX QuickStart](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)