function func<T> (a:T) :T{
    return a
}

// 可以直接调用具有泛型的函数
// TS自动推断出泛型的类型为number
const res = func(10)


const resultString = func<string>('Hello') // 也可以手动指定泛型的类型为string

// 指定多个泛型

function func2<T,K>(a:T,b:K):T {
    console.log(b)
    return a
}

func2<number,string>(123,'number')


// 限制泛型的范围

interface Inter {
    length: number
}
// 泛型T必须满足Inter接口的约束，也就是说T必须具有length属性
function func3<T extends Inter>(a:T):number {
    return a.length
}

func3('Hello') // string类型具有length属性，可以调用func3函数
func3([1,2,3]) // 数组类型具有length属性，可以调用func3函数
func3({length: 10}) // 对象类型具有length属性，可以调用func3函数
// func3(123) // number类型没有length属性，无法调用func3函数

// 类也可以使用泛型

class myClass<T> {
    constructor(public name:T){

    }
}

const mc = new myClass<string>('Hello') // 创建一个myClass类的实例，并指定泛型的类型为string