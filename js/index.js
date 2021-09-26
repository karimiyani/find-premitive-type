// index0f()

const num = [ 15, 25, 35, 45];
console.log(num.indexOf(15)); //0
console.log(num.indexOf(35)); //2
console.log(num.indexOf(65)); //-1
console.log(num.indexOf("65")); //-1

const num2 = [ 18, 28, 38, 48, 18];
console.log(num2.indexOf(18)); //0
console.log(num2.indexOf(18, 3)); //4

console.log(num2.includes(18)); //true

console.log(num2.includes("18")); //false



