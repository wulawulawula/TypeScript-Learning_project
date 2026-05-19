(
    function () {
        // abstract抽象类：抽象类是提供其他类继承的基类，不能直接实例化。抽象类中的抽象方法必须在子类中实现。
        abstract class Animal {
            name: string;
            age: number;

            constructor(name: string, age: number) {
                this.age = age;
                this.name = name;
            }

            abstract sayHello():void
        }

        class Dog extends Animal {
            isMale: boolean;
            constructor(name: string, age: number, isMale: boolean) {
                // 如果子类中写了构造函数，则必须在构造函数中调用super()方法,并进行赋值
                super(name, age)
                this.isMale = isMale
            }
            sayHello() {
                // 在类的方法中，super代表当前类的父类
                
                console.log('这是Dog类中提供的方法')
            }
        }

        const dog = new Dog('小黑', 4, false)
        dog.sayHello()
        console.log(dog)

    }
)()

