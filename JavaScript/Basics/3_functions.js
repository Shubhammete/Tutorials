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
    inner()  // as it has s
  }
  
  outer()  