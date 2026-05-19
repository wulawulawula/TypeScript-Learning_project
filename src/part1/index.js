import { hi } from "./hello";
function sum(a, b) {
    return a * b;
}
const obj = {
    name: '张三',
    age: 33
};
console.log(obj);
obj.age = 18;
console.log(obj);
console.log(sum(100, 200));
console.log(hi);
console.log(Promise);
