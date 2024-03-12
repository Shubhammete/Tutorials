var arr3 = new Array(1,2,3);
var arr2 = ["a", "b"];

//arrays
var arr = [1,3,4,5,6];
arr.pop(); // [1,3,4,5]
arr.push(8); // [1,3,4,5,8]
arr.unshift(0); // [0,1,3,4,5,8]
arr.shift(); // [1,3,4,5,8]

// splice and slice 
var newsplicearr = arr.splice(1,2); //[1,3,8] // splice changes original arr 
// returns the array without the elements from 1,2 btw in splice 2 is inclusive
// slice is same but 2 is exclusive and does not change orginal arr

// creating array from other data types
var name = "Shubham"
var namearr = Array.from(name); //returns ['S','h','u','b','h','a','m']
var a = 23;
var b = 24;
var c = 25;
var combinedarr = Array.of(a,b,c); // returns [23,24,25]

// spread operator instead contact
var spreadarr = [...arr,...arr3,...arr2]; // we can merge any no of arrays int spreadarr

// Array methods
let a = [2,4,5,63,55]
console.log(a.length)  // returns length
console.log(a.toString())  //converts to string
delete a[index] // to delete specific item
console.log(a.sort(compare))
function compare(a,b){
  return a+b; // in case of descending a-b
}  
console.log(a.reverse())
var joinedarr = arr.join(); // converts array elements into string, by default space is parameter if we want to join with any other character then we can pass that as a parameter 
var newconcatarr = arr.concat(arr3); // returns a new array with all of the elements of arr concatenated with arr3;
const messedarr = [1,2,3[4,5,6],7,[[8,9]]];
const  fixedmessedarr = messedarr.flat(Infinity) // we can pass upto what nested we have to manage the array clears the nested array
arr.includes(2) // returns true or false
arr.indexOf(3);
// .map creates new array
arr.map((value,index,arr)=>{
  console.log(value,index,arr)
})
//filter
let check = (val)=>{return val>300}
const newarr = arr.filter(check)
//or
arr.filter((a)=>{return a > 300})
// reduce method
  //reduces to one value 
  let arr9=[9,4,6,7,7,4,3,2]
  let add9 = (a,b) =>{
    let sum = a+b
    return sum  
  }
  
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
Object.freeze(obj1); // freezing object
//object destructing
let f = {
    name0:"Kunal",
    age0:15,
    isMarried:false,
  }
  let {name0,age0,isMarried} = f
  console.log(name0,age0,isMarried)
  
  const k = {...f,name0 :"Shubham",age:19}  // creating new obj with prop o f but adding extra into it