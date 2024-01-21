//Traversing DOM

//parent node traversal

let unl = document.querySelector('ul');
console.log(unl.parentNode)
console.log(unl.parentNode.parentNode)  //use parent node as there is a problem down there
console.log(unl.parentElement)
console.log(unl.parentElement.parentElement)

const html = document.documentElement;
console.log(html)
console.log(html.parentElement)  // gives null
console.log(html.parentNode)  // returns whole document 

// child nodes traversal

console.log(unl.childNodes)  // gives all child nodes   considers space as text
console.log(unl.firstChild)  // selects first child
console.log(unl.lastChild)  //last child

unl.childNodes[1].style.backgroundColor = "blue"  // selects node to apply effect

console.log(unl.children);
console.log(unl.firstElementChild);
console.log(unl.lastElementChild)

//sibling nodes traversal
console.log(unl.previousSibling) //text
console.log(unl.nextSibling)   //text
//instead use previousElementSibling
console.log(unl.previousElementSibling)
console.log(unl.nextElementSibling)