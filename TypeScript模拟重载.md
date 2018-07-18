# TypeScript模拟重载

## 问题
众所周知在javascript中是没有重载的，实现动态参数也只能依靠(arguments参数数组等进行判断)，那在typescript中是否可以使用重载呢？

## 解决
typescript中依然没有重载，因为ts最终还是会被编译成js，无法实现在同一作用域中同时存在两个同名函数。

但是，ts提供了一种声明的形式，在调用函数时提供了参数类型的提示，除此之外和普通的js实现重载没有区别。

```typescript
function reverse(string: string): string;
function reverse<T>(array: T[]): T[];
function reverse<T>(stringOrArray: string | T[]): string | T[] {
    return typeof stringOrArray === "string"
        ? stringOrArray.split("").reverse().join("")
        : stringOrArray.slice().reverse();
}
```