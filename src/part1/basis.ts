let a: number = 10;
let b: string = 'hello TypeScript!';
let c: boolean = true;

enum gender {
    male = 1,
    female = 2,
    unknown = 3
}

let i:{
    name:string,
    gender:gender
}

i = {
    name:'张三',
    gender:gender.unknown
}

console.log(i)