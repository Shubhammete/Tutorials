let a = new Promise((resolve,reject)=>{ // creates new Promise object
    let c = 12
    if(c === 12){
        resolve("Sucess")
    }
    else{
        reject("Failed")
    }
})

a.then((message)=>{
    console.log("Your mission "+message)
}).catch((message)=>{
    console.log("Your mission "+ message)
})

// returns function and not value as above
let prom = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("solved")
})
}
// prom()

// promise API
let y1 = new Promise((resolve, reject) => {
    resolve("Promise 1")
  
})

let y2 =  new Promise((resolve, reject) => {
  
    resolve("Promise 2")
  
})

let y3 =  new Promise((resolve, reject) => {
  
    resolve("Promise 3")
  
})


// y1().then(
//   (value)=>{ 
//     console.log(value)
//   })
// y2().then(
//   (value)=>{
//     console.log(value)
//   })                          // Dont use this then
// y3().then(
//   (value)=>{
//     console.log(value)
//   }
// )

// if you want to get all value at once and according to time they are resolved
let all = Promise.all([y1,y2,y3])
all.then((value)=>{
console.log(value)
})

// if any of it get error then use this and you will get status value pair of promises
let alll = Promise.allSettled([y1,y2,y3])
alll.then((value)=>{
console.log(value)
})

// normal method which resolves first get displayed not all
let al = Promise.race([y1,y2,y3])
al.then((value)=>{
console.log(value)
})

// if error accours in race first it displays error to avoid error to display resolved first we use any not all
let allll = Promise.any([y1,y2,y3])
allll.then((value)=>{
console.log(value)
})

