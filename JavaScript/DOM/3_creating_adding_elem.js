// creating and adding HTML elements
const ul = document.querySelector("ul")
const li = document.createElement('li')
ul.append(li)

// add new element with existing properties
const sports = document.querySelector('#sport');
const newSport = document.createElement('li');

newSport.innerText = "E";
newSport.setAttribute('id','E') // attribute name and value
sports.appendChild(newSport)   // as sport is ul and li are there childs
console.log(newSport.id)