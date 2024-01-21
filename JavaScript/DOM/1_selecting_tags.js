//selecting HTML elements
document.querySelector("li"); // for single element 
document.querySelector("#id") 
document.querySelector(".class")

document.querySelectorAll("---") // for all elements of given type
document.getElementById('id')// for id
document.getElementsByClassName('class') //for class
document.getElementsByTagName('h1') // for tag

// other ways to select elements
let so = document.querySelector("xyz")
so.matches("css class") 
so.closest("css class") // Finds the element in parent--> Grandparent.....
so.contains("css class") // return true if it has class