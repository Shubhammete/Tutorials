//function
function shubh(x,b,c){
    console.log("Shubham");
    console.log(x,b,c);
}
shubh(2,4,6);

// Rest parameters use to take more than one input
function moreValue(a,...b){
    console.log(a)
    console.log(b+" ")
  }
  moreValue(3,4,5,58,7,7,7,65)  
  // output
  // 3
  // 4,5,58,7,7,7,65
  
  const add = (a,b) =>{
    return a+b;
  }
  
  // Or Shortcut
  
  const addInShort = (a,b) => a+b
  
  // Nesting functions
  
  function outer(){
    console.log("Outer")
    function inner(){
      console.log("Inner")
    }
    inner()  // as it has scope  of the parent so we can call it here
  }
  
  outer()  

  // closure in JS is the function remembers its scope or persists its data
function outer(){
  let x = 1
  function inner(){
    x++;
    console.log(x)
    }
    // inner()
    return inner
    }
// if inner is called the issue is it will invoke and create new function instance so it will not remember the outer scope so we use return to return the inner function so that it can be called later and it will remember the outer scope
// outer() // 2
// outer() // 2
let funcall = outer()
funcall() // 2
funcall() // 3
    
// closure

function