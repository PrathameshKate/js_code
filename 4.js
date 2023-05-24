//Primitive types

let a = null;
let b = 123;
let c = true;
let d = BigInt("234");
let e = "kate";
let f = Symbol("i am Symbol");
let g = undefined;
console.group(a,b,c,d,e,f,g)
console.log(typeof c)


//Objects in js
const item ={
    "rohan": true,
    "shubham":false,
    "rakesh":123,
    "prem":undefined
}
console.log(item["prem"])