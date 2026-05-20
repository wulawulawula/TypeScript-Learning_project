"use strict";
(function () {
    const obj = {
        name: 'John',
        age: 30
    };
    // 实现接口，使声明的类满足接口的要求
    class myClass {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        sayHello() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
})();
