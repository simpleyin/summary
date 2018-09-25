function main() {
    var canvas = document.getElementById("glcanvas");
    var ctx = canvas.getContext("webgl");
    //每一种上下文都有自己的绘图方法，通过调用来绘图。
    
    
    if (!initShaders(ctx, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log("Failed to initialize shaders");
        return;
    }

    ctx.clearColor(0.0, 0.0, 0.0, 1.0); //指定擦除的颜色
    ctx.clear(ctx.COLOR_BUFFER_BIT);    //执行擦除

    //drawArray()绘制图形函数。
    //参数1，绘制mode,如(ctx.POINTS, ctx.LINES, ctx.LINE_STRIP等等)
    //参数2，指定从哪个顶点开始绘制
    //指定需要绘制多少个顶点
    ctx.drawArrays(ctx.POINTS, 0, 1);


}

//顶点着色
//gl_Position: 指定点的位置
//gl_PointSize: 指定点的尺寸
// \n不是必须的，只是为了在debug时能够找到出错的行号。
//vec4 是类型名称，表示由四个浮点数组成的矢量。
//vec4(v0, v1, v2, v3)中v3表示
var VSHADER_SOURCE = 
    "void main() {\n" +
    " gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n" +
    " gl_PointSize = 10.0;\n" +
    "}\n";

// 片元着色
// gl_FragColor: 指定点的颜色
var FSHADER_SOURCE = 
    "void main() {\n" +
    " gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n" +
    " }\n";