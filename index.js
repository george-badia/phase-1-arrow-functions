// Function expression called divide
let a = 2000
let b = 10
const divide = function(a, b) {

   return a / b;
 };
 divide(a, b);
//  //contain arrow function called square
 /*const square = (num) => {
   return num * num;
 };*/
let x = 2
const square = (x) => x * x;

//  //contain arrow function called add
/* const add = (num1, num2) => {
   return num1 + num2;
 }; */
let num1 = 3
let num2 = 4
const add = (num1, num2) => num1 + num2 ;
add(num1, num2);



console.log(divide(a, b))
console.log(square(x))
console.log(add(num1, num2))