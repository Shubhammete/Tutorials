// var and const
var a = "Shubham";
var b = "Mete";
const c = "You Cannot Change Me";
let d = "Mete";
// var has function scope and let have scope limited to braces


// hoisting 
// In JS you dont get any error as a is undefined here so it will show undefined
console.log(a);  // ans == undefined
var a = 12;  
console.log(a);   // ans == 12
// undefined == which exists but dont have any value 
// not defined == which does not exists and dont have any value 


//reference and Primitives
// reference === values in (){}[]
//primitives === int string boolean undefined null etc
var a = 12;
var b = a;
b = b+2;
// a = 12 and b = 14
var a = [2,3,5,6];
var b = a;
b.pop();
// b = [2,3,5] and a = [2,3,5] because we pass reference here so its refer to original data
var b = [...a];
b.pop(); // a = [2,3,5,6] and b = [2,3,5]


// Ternary operators
let age = 19
let name = age > 10 && "Shubham"   // executes if exp is correct
console.log(name)               // Shubham
let name1 = age < 10 && "Shubham" 
console.log(name1)              // false
let name2 = age > 10 || "Shubham" // executes if exp is wrong
console.log(name2)               // true
let name3 = age < 10 || "Shubham" 
console.log(name3)               // Shubham 
let name4 = age < 10 ? "Shubham":"Kunal"   // if else
console.log(name4)               // kunal
let name5 = age > 10 ? "Shubham":"Kunal"
console.log(name5)               // Shubham
