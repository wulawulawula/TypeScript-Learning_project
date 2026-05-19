"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.age = age;
            this.name = name;
        }
        sayHello() {
            console.log('这是Animal类中提供的方法');
        }
    }
    class Dog extends Animal {
        constructor(name, age, isMale) {
            // 如果子类中写了构造函数，则必须在构造函数中调用super()方法,并进行赋值
            super(name, age);
            this.isMale = isMale;
        }
        sayHello() {
            // 在类的方法中，super代表当前类的父类
            super.sayHello(); // super关键字可以用来调用父类的方法
            console.log('这是Dog类中提供的方法');
        }
    }
    const dog = new Dog('小黑', 4, false);
    dog.sayHello();
    console.log(dog);
})();
