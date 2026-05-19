class Animal {

        name:string;
        age:number;

        constructor(name:string,age:number){
            this.name = name;
            this.age = age;
        }

        bark(){
            console.log(this,'这是 Animal class类中提供的方法')
        }
}
 
// Animal 被称为父类，Dog和Cat被称为子类，子类通过extends关键字来继承父类
// 使用继承后，子类会拥有父类所有的属性和方法


// 如果希望在子类中添加一些父类里没有的方法，直接写在子类中即可
// 如果在子类中定义了一个和父类中同名的方法，那么子类中的方法会覆盖父类中的方法，这个过程叫做方法重写
class Dog extends Animal{
    run(){
        console.log(`${this.name}在跑`)
    }
    bark(){
        console.log('这是dog类中提供的方法,重写了父类的bark方法')
    }
}

class Cat extends Animal{

}

// 相当于执行了Dog类中的constructor方法，创建了一个Dog类的实例对象，并把这个对象赋值给dog变量
const dog = new Dog('小黑', 4)
const cat = new Cat('小花', 2)
dog.run()
dog.bark()
cat.bark()
