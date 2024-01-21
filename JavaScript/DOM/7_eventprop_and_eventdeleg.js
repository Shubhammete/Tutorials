// Event propogation
// traversing the event through the elements

window.addEventListener("click",function(){
    console.log("Window")
},true)  // third parameter is useCapture which is true

document.addEventListener("click",function(){
    console.log("Document")
},true)

document.querySelector('.div2').addEventListener('click',function(){
    console.log("Div2")
},true)

document.querySelector('.div1').addEventListener('click',function(){
    console.log("Div1")
},true)

document.querySelector("button").addEventListener("click",function(e){
    console.log(e)
},true)
// output in console
// window
// documment
// Div2
// Div1
// e is event log shows all parameters 

// if you use false then we get reverse result
// to stop the propogation we can use stopPropogation on event log
//to stop propogation on div 2
document.querySelector('.div2').addEventListener('click',function(e){
    e.stopPropagation()
    console.log("Div2")
},true)

// if you want to make only element to be propogated once 
document.querySelector('.div2').addEventListener('click',function(){
    console.log("Div2")
},{once: true}) 
// if button pressed once it will propogate and then after second time it will not  

// to prevent default properties ..... here we put anchor tag with .button class in button as it is empty it redirects to page and refreshes it so we are not getting button property like change html "click me" to "click" instead it refershes 
document.querySelector(".button").addEventListener("click",function(e){
    e.preventDefault() // this stops its default behaviour
    console.log(e)
},true)

// event delegation
document.querySelector("#A").addEventListener("click",function(e){
    console.log("A is clicked")
    const target = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    }
})
document.querySelector("#B").addEventListener("click",function(e){
    console.log("B is clicked")
    const target = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    }
})
document.querySelector("#C").addEventListener("click",function(e){
    console.log("C is clicked")
    const target = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    }
})
document.querySelector("#D").addEventListener("click",function(e){
    console.log("D is clicked")
    const target = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    }
})

// instead of writing seperate code we can use event delegation

document.querySelector('#sport').addEventListener('click',function(e){ // sport is id name for ul
    console.log(e.target.getAttribute('id')+" is clicked");
    const target = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    }
})
// or shhort version
document.addEventListener("click", function(e) {
    if (e.target.id === "A" && e.target.matches("li")) {
        console.log("A is clicked");
        e.target.style.backgroundColor = "lightgrey";
    }
}, true);