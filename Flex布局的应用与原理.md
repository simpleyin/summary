# Flex布局的应用与原理
> CSS3 弹性盒子(Flexible Box 或 Flexbox)，是一种用于在页面上布置元素的布局模式，使得当页面布局必须适应不同的屏幕尺寸和不同的显示设备时，元素可预测地运行。对于许多应用程序，弹性盒子模型提供了对块模型的改进，因为它不使用浮动，flex容器的边缘也不会与其内容的边缘折叠。
> 适用于随用户代理(user agent)不同或设备方向从水平转为垂直等各种变化而变换方向、调整大小、拉伸、收缩的应用程序组件。


## Flex基本概念
* flex container: 包含弹性项目的元素，通过设置display为flex或者inline-flex。（display: flex会继承吗？）
* 轴：弹性项目依次排列的方向称为主轴，与主轴垂直的成为侧轴
* 方向：确定弹性项目在轴上的一端开始排列，以及项目的先后顺序
* 行：确定弹性项目在哪一行进行排列
* 尺寸: 确定弹性项目在不同轴上的尺寸
    * flex: auto === flex: 
    * flex: initial
    * flex: none
    * flex-grow: 定义flex元素的拉伸因子，父元素尺寸改变时，动态的调整自身尺寸以满足设定的因子大小
    * flex-shrink: 指定了flex元素的收缩大小
    * flex-basis: 指定flex元素初始化的尺寸[auto, number, size]
        * 设置为number时，相对于谁的尺寸比例？
    * flex属性可简写表示上述三个设置，flex: flex-grow, flex-shrink, flex-basis。 如：flex: 1, 1, auto

## 问题1: Flex只适合一维布局吗？
可以通过设置flex的值，确定元素在主轴上的大小，如何确定元素在副轴上的大小呢？

## 问题2：为什么说弹性盒子布局主要适用于应用程序的组件及小规模的布局？
要在平面中对元素进行定位，最直接的方式就是给出坐标(x, y)，而栅格系统就是通过这种方式进行布局。其余的方法都不如栅格系统直观，容易理解。

## 圣杯布局示例
效果如下，并且在移动设备上显示时希望页面排成一列显示，方便滑动阅读
![Flex Demo](https://www.simpleyin.xyz/doc/flexdemo_1.png)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <style>
        html,body {
            margin: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            color: white;
        }
        .header {
            align-items: center;
            background-color: teal;
            flex: 1;
        }
        .main {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex: 8;
        }
            .main > .nav {
                flex: 1;
                background-color: goldenrod;
            }
            .main > .article {
                flex: 7;
                background-color: orchid;
            }
            .main > .aside {
                flex: 1;
                background-color: pink;
            }
        .footer {
            background-color: green;
            flex: 1;
        }

        @media screen and (max-width: 640px) {
            .main {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex: 8;
        }
            .main > .nav {
                flex: 1;
                background-color: goldenrod;
            }
            .main > .article {
                flex: 7;
                background-color: orchid;
            }
            .main > .aside {
                flex: 1;
                background-color: pink;
            }
        }
    </style>
</head>
<body>
    <div class="header">header</div>
    <div class="main">
        <div class="nav">nav</div>
        <div class="article">article</div>
        <div class="aside">aside</div>
    </div>
    <div class="footer">footer</div>
</body>
</html>
```

## 参考
* [MDN FLEX](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes#%E5%BC%B9%E6%80%A7%E7%9B%92%E5%AD%90%E7%9B%B8%E5%85%B3%E5%B1%9E%E6%80%A7)