(function () {
    type myType = {
        name: string,
        age: number
    }

    const obj: myType = {
        name: 'John',
        age: 30
    }

    /** 接口用来定义一个类的结构 用来定义一个类中应该包含哪些属性和方法*/
    // 也可以当类型声明来使用

    interface myInterface {
        name: string,
        age: number
    }
    // 接口可以重复声明，会自动合并
    interface myInterface {
        gender: string
    }

    // 接口可以在定义类的时候，限制类的结构
    // 接口中的所有属性都不能有实际的值
    // 接口只定义对象的结构而不考虑实际的值
    // 接口中所有的方法都是抽象方法


    // 定义类时，可以使类实现一个接口
    interface myInter {
        name: string,
        sayHello(): void
    }

    // 实现接口，使声明的类满足接口的要求
    class myClass implements myInterface {
        name: string;
        age: number;
        gender: string;
        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender
        }
        sayHello() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
})()