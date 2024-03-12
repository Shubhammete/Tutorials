var arr3 = new Array(1,2,3);
var arr2 = ["a", "b"];

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

// splice changes original arr
var joinedarr = arr.join(); // converts array elements into string, by default space is parameter if we want to join with any other character then we can pass that as a parameter 
var newsplicearr = arr.splice(1,2); //[1,3,8]  
console.log(arr);  // returns the array without the elements from 1,2 btw in splice 2 is inclusive
console.log(newsplicearr)
// slice is same but 2 is exclusive and does not change orginal arr

var newconcatarr = arr.concat(arr3);
console.log(newconcatarr) // returns a new array with all of the elements of arr concatenated with arr3;
const messedarr = [1,2,3[4,5,6],7,[[8,9]]];
const  fixedmessedarr = messedarr.flat(Infinity) // we can pass upto what nested we have to manage the array clears the nested array

// creating array from other data types
var name = "Shubham"
var namearr = Array.from(name);
console.log(namearr); //returns ['S','h','u','b','h','a','m']
var a = 23;
var b = 24;
var c = 25;
var combinedarr = Array.of(a,b,c);
console.log(combinedarr); // returns [23,24,25]


// spread operator instead contact
var spreadarr = [...arr,...arr3,...arr2]; // we can merge any no of arrays int spreadarr


// array booleans methods
console.log(arr.includes(2)) // returns true or false
console.log(arr.indexOf(3));

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

//objects
var sym = Symbol("Symbol") // symbol data structure  ->  symbol is  used to create unique key for object properties -> Symbol("Shubh") === Symbol("Shubh") is false
var obj = {}; //empty obj
var obj1 = {
    name:"Shubham",
    class:"SE",
    Mobile:12131424,
    [sym] = "Unique Symbol" // just using sym typecasts it into string
}
obj1['city'] = "Indapur" // adding element

// freezing object
Object.freeze(obj1);


//object destructing
let f = {
    name0:"Kunal",
    age0:15,
    isMarried:false,
  }
  
  let {name0,age0,isMarried} = f
  console.log(name0,age0,isMarried)
  
  const k = {...f,name0 :"Shubham",age:19}

  // array methods

  arr=[2,4,6,6,3,3,3,535,36,63]
// map ->iterates all array
arr.map((value,index,arr)=>{
    console.log(value,index)
  })
  //filter -> return new array according to condition
  let checkval = (val)=>{return val>60}
  console.log(arr.filter(check))
  
  //reduces to one value 
  let arr9=[9,4,6,7,7,4,3,2]
  let add9 = (a,b) =>{
    let sum = a+b
    return sum
    
  }
  console.log(arr9.reduce(add9))

  //converts string to array
  console.log(Array.from("dsfighierhg"))
