//arrays
var arr = [1,3,4,5,6];
arr.pop(); // [1,3,4,5]
console.log(arr);
arr.push(8); // [1,3,4,5,8]
console.log(arr);
arr.unshift(0); // [0,1,3,4,5,8]
console.log(arr);
arr.shift(); // [1,3,4,5,8]
console.log(arr);
arr.splice(2,2); //[1,3,8]
console.log(arr);


//objects
var obj = {}; //empty obj
var obj1 = {
    name:"Shubham",
    class:"SE",
    Mobile:12131424
}
obj1['city'] = "Indapur" // adding element

// Array methods
let a = [2,4,5,63,55]
console.log(a.length)  // returns length
console.log(a.toString())  //converts to string
console.log(a.join("-"))  //joins the lemnts with following parameter
// pop and push -- removes and add element in last
// shift and unshift -- removes and add element  in first
// delete a[index] to delete specific item
// lets a1 a2 a3 are arrays so combine them using 
// a1.concat(a2,a3)  this returns new array
console.log(a.sort())
console.log(a.splice(2,1,23,44,55),a)
// a.splice() returns delted element and modifies the array completely
console.log(a.slice(2,5)) //returns value from index 2 o 4
console.log(a.reverse())
// .map creates new array
arr.map((value,index,arr)=>{
  console.log(value,index,arr)
})
//filter
let check = (val)=>{return val>300}
console.log(arr.filter(check))
//or
console.log(arr.filter((a)=>{return a > 300}))
//reduces to one value
console.log(arr.reduce(check))
let arr1=[9,4,6,7,7,4,3,2]
let add1 = (a,b) =>{
  let sum = a+b
  return sum
  
}
console.log(arr1.reduce(add1))
console.log(Array.from("dsfighierhg"))



//object destructing
let f = {
    name0:"Kunal",
    age0:15,
    isMarried:false,
  }
  
  let {name0,age0,isMarried} = f
  console.log(name0,age0,isMarried)
  
  const k = {...f,name0 :"Shubham",age:19}