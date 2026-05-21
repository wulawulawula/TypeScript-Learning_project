(
    function () {
        class Person {
            name: string;
            age: number;

            constructor(name: string, age: number) {
                this.name = name
                this.age = age
            }
        }

        const per = new Person('张三', 20)

        // 此事对象中的属性可以直接修改,但是在实际开发中，我们不希望对象中的属性被随意修改
        per.name = '李四'
        per.age = 30

        console.log(per)

        class newPerson {
            // public修饰符修饰的属性可以在类的外部访问和修改
            // private修饰符修饰的属性只能在类的内部访问和修改，在类的外部无法访问和修改
            public name: string;
            private age: number;
            protected male: boolean; // protected修饰符修饰的属性只能在类的内部访问和修改，在类的外部无法访问和修改，但是在子类中可以访问和修改
            constructor(name: string, age: number, male: boolean) {
                this.name = name
                this.age = age
                this.male = male
            }

            // 如果像修改private私有属性，需要使用getter和setter方法来访问和修改
            get _age() {
                console.log('这是getter方法')
                return this.age
            }
            set _age(value: number) {
                if (value < 0) {
                    throw new Error('年龄不能为负数')
                }
                this.age = value
            }
        }

        const newPer = new newPerson('王五', 25, true)
        newPer.name = '赵六' // 可以修改
        // newPer.male = false // 报错，无法修改
        // newPer.age = 35 // 报错，无法修改
        console.log(newPer._age) // 通过getter方法访问
        newPer._age = 35 // 通过setter方法修改



        class A {
            // protected修饰符修饰的属性只能在类的内部访问和修改，在类的外部无法访问和修改，但是在子类中可以访问和修改
            protected num: number;

            constructor(num: number) {
                this.num = num
            }

        }

        class B extends A {
            text() {
                console.log(this.num) // 可以访问父类中的protected属性
            }
        }

        const b = new B(10)
        // console.log(b.num), // 报错，无法访问父类中的protected属性
        b.text() // 可以访问父类中的protected属性

        class C {
            constructor(public name: string, public age: number) {
            }
        }

        const c = new C('小明', 18)
        console.log(c)
    }
)()