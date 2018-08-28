## Session的作用
1. 服务器创建一个会话对象，用来实现客户端与服务器之间的状态管理, 保存用户的操作和历史信息。
2. 如Servlet中的httpSession, 并且能够将数据作为属性存入httpSession对象。

## 使用Session
    ```java
    HttpSession session = request.getSession();
    //创建session对象时，servlet帮我们做了很多工作：
    //1. 生成唯一的会话ID
    //2. 在响应中设置会话ID的Cookie
    ```
## 使用Session管理用户的登录状态
  客户端在每次请求上会携带上，第一次登录时生成并保存在Cookie中的session id，服务器根据请求中携带的sessionid在session集合中查找，如找到则当前链接的客户端之前
  进行过链接，在查看该session中存储的登录状态。若session未找到，则创建新的session。

## Session的原理

## 注意
1. session的会话ID, 何时发生变化？

## 阐述Session

## 参考
[gitbook](https://astaxie.gitbooks.io/build-web-application-with-golang/content/zh/06.1.html)
