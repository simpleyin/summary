# CSS伪类和伪元素

## 提出问题
只修改css和不修改html实现如下图的效果，最开始认为使用伪类来实现，后来才知道要使用伪元素。
```html
<div class="rect"></div>
```
<img src="https://www.simpleyin.xyz/doc/QQ20180717-113035@2x.png" width="300" height="200">

## 伪类
>伪类能够让元素在特定状态下展现指定的效果。

css伪类是作为关键字被添加到css选择器后面，如
```css
button:avtive {
    color: red;
}
```
其中:active就是选择器。

常见的伪类：
* ```:active``` 当鼠标的主键在目标元素按下和松开之间时，称该元素处于“激活”状态，元素应用伪类的状态

* ```:checked``` 该伪类表示radio(<input type="radio">),checkbox(<input type="checkbox">)或("select")元素中的option元素处于选中的转态

* ```:default``` 应用于表单元素处于默认选项

* ```:disabled``` 应用于任何被禁止的元素

* ```:empty``` 应用于没有子元素的元素

* ```:enabled``` 应用于任何启动的元素，如果一个元素能够被激活（如选择，点击或接受文本输入），都表示该元素处于enabled状态

* ```:first-child``` 应用于一组兄弟元素中的第一个元素

* ```:first-of-type``` 应用于一组兄弟元素中第一个出现指定元素的元素

* ```:focus``` 应用于获取焦点的元素，如，表单输入

* ```:hover``` 应用于被用户使用的设备（如，鼠标）虚指的元素（并没有激活,active），并且按照LVHA的顺序排列在active之前，element:link:visited:hover:active

## 伪元素
>css伪元素向指定的元素上添加修饰元素

* ```::after``` 创建一个伪元素，添加在选取元素的后面（类似于插入产生的微元素到选取元素的DOM节点后面，但实际没有进行DOM操作

    伪元素如何相对指定的元素进行定位？

        指定元素设置相对定位，伪元素设置绝对定位。伪元素就是相对于指定元素进行定位（指定元素为伪元素的父元素？）
        

## 问题解决
```css
.rect {
    width: 300px;
    height: 200px;
    background-color: teal;
    overflow: hidden;
    position: relative;
}

.rect::after {
    content: "";
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 25%;
    left: 250px;
}
```

## 参考
[Mozilla 伪类与伪元素](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements)

[Mozilla 伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)