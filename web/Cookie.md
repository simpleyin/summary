# Cookie的作用
1. Cookie可以保存键值对数据在客户端（用户的浏览器中），可以保存在指定的域名和路径下。
2. 用来记录：上次访问时间，SESSION_ID等。
3. 当作为SESSION_ID时，用来标志当前客户端在服务器上对应的session的id,由服务器指定。通过这种方式达到登录状态的管理。

# 使用Cookie
```js
//获取当前文档位置下的所有Cookie组成的字符串。
var allCookie = document.cookie;   
//设置一组值
document.cookie = "name=huang";
```

# Cookie的原理
1. Cookie可以在服务器返回的http报文中设置，返回给浏览器后，浏览器将header中的Cookie自动保存在本地Cookie中；
    ```
    若在服务器设置了Cookie,返回报文：
    HTTP/1.0 200 OK
    Content-Type: text/html
    Set-Cookie: key=value
    ```
2. Cookie也可通过js API进行增删查改。
3. 每次发起http请求时，报文头部自动添加当前文档的所有Cookie数据。
    ```
    请求报文:
    GET /sample_page.html HTTP/1.1
    Host: www.example.org
    Cookie: yummy_cookie=choco; tasty_cookie=strawberry
    ```
4. 会话Cookie
    * 若不指定Cookie的保存期限，则默认的Cookie会在客户端关闭（网页关闭）后消失。


# 注意
1. 用Cookie来保存用户的密码和登录转态是否安全？
2. 存入Cookie的数据应该进行URI编码。

# 阐述Cookie

# 参考
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)
