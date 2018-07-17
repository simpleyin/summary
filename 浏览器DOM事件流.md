# 浏览器DOM事件流

## 解释
通过DOM API绑定事件处理函数后(DOM0 使用on-event,DOM3使用addEventListener)，可以对事件流进行截获，获取事件相关数据。

## 原理
事件流主要分为三个阶段：捕获阶段，目标阶段，冒泡阶段。在浏览器中流从Window流向目标元素，再从目标元素返回至Window。

在事件流中，我们能在这三个阶段获取Event对象，并且能通过设置Event的属性对事件流进行控制，如在目标阶段设置Event的bubbles属性为false即可跳过冒泡阶段。
* 捕获阶段：事件流自顶向下的穿过DOM树，直到目标元素的父节点。
* 目标阶段：事件流到达触发事件的元素。
* 冒泡阶段：事件流自底向上的返回至Window节点。

如图：
![Alt text](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)

## 用途
* 通过绑定目标元素父元素相应的事件监听函数，能够代理所有子元素进行事件处理，如，点击列表\<li\>进行相应操作时，可以使用父元素如\<ol\>绑定相应函数，避免重复绑定大量li元素的操作。

## 注意
* Event对象在propagation path(行进路径)创建后开始在事件流中传递
* Event对象在各个阶段不相同（event.currentTarget不同，指向绑定该事件处理函数的元素）

## 参考
* [W3C](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
* [Mozilla, EventTarget.addEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)