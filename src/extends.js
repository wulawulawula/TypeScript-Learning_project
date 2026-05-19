"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('hahahah');
        }
    }
    class Dog extends Animal {
        run() {
            console.log(`${this.name} is running`);
        }
    }
    class Cat extends Animal {
        sleep() {
            console.log(`${this.name} is sleeping`);
        }
    }
    const dog = new Dog('小黑', 4);
    const cat = new Cat('小花', 2);
    console.log('dog', dog);
    console.log('cat', cat);
    dog.run();
    cat.sleep();
})();
