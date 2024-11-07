// Conditionals
if(false){
    var a = 2;
   }
   else if(true){
     var a = 4;
   }
   else{
     var a = 6;
   }
   
   
   //Loops
   //for
   for(var i = 0;i<5;i++){
       console.log(i);
   }
   
   //while
   while(a <16){
    console.log(a++);
   }
   
// forEach
var ex = [1,2,3,4,5,6,7];
ex.forEach(function(x){
  console.log(x+2); // adds 2 in each value
})

//for in
var obj = {
  name:"Shubham",
  age:19,
  city:"Indapur"
}
for(var x in obj){
  console.log(x);  //name
  console.log(obj[x]);  //Shubham
}

//do-while
var f = 90;
do{
  console.log("Hello!!");
  a++;
}while(f<99)

let obj = {
  name:"Shubham",
  age:23,
  address:"Indapur",
  salary:123
}
let arr = ["234","245","355","765"]
// for each
arr.forEach(element => {
  console.log(element+" Class") 
});
arr.forEach((value,index,arr)=>{
  console.log(value,index,arr)
})
//for in
for (const key in obj) { // This also works for arrays same returns index in this case
      console.log(key)
  }
// for of
for (const iterator of arr) {
   console.log(iterator)   
}