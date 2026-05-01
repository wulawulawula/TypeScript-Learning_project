let a = 10;
let b = 'hello TypeScript!';
let c = true;
var gender;
(function (gender) {
    gender[gender["male"] = 1] = "male";
    gender[gender["female"] = 2] = "female";
    gender[gender["unknown"] = 3] = "unknown";
})(gender || (gender = {}));
let i;
i = {
    name: '张三',
    gender: gender.unknown
};
console.log(i);
export {};
//# sourceMappingURL=basis.js.map