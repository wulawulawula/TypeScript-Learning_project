"use strict";
// 使用class来定义一个类
/*
对象中主要包含两部分
1.属性
2.方法
*/
class Person {
    constructor() {
        /*
        直接定义的属性是实例属性，需要通过对象的实例来进行访问
        per.name
    
        使用static修饰的是静态属性（类属性）,可以直接通过类来访问
    
        Person.age
        */
        // 定义实例属性
        // readonly修饰的属性是只读属性，不能修改
        // readonly name: string = "张三";
        this.name = "张三";
        // 在实例前使用static关键字修饰可以定义类属性（静态属性）
        this.age = 18;
    }
    // 定义实例方法
    sayHi() {
        console.log("hi");
    }
    // 定义类（静态）方法
    static sayHello() {
        console.log("hello");
    }
}
const per = new Person();
per.name = "李四";
console.log(per.name, per.age);
per.sayHi();
Person.sayHello();
