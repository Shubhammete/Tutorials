//modifying attributes and classes

// its sets attribute
// li.setAttribute('type','name') type -- class id tag   name = name of type predefined
li.setAttribute('class','class-items') 
li.setAttribute('id','list')
// attribute removed
li.removeAttribute('class') 


// add or remove name of class defined in stylesheet and not attribute
li.classList.add('class-items')  // pass class name in it
li.classList.remove('class-items')


// <li id="myListItem" class="initial-class">List Item</li> predefined tag
li.setAttribute('class', 'class-items')
// <li id="myListItem" class="class-items">List Item</li>
// setAttribute sets or replaces an entire attribute. here if predefined class is there then it replaces it. Changed initial class by class items 
li.removeAttribute('class')
// <li id="myListItem">List Item</li>
// removeAttribute removes an entire attribute.
li.classList.add('class-items')
// <li id="myListItem" class="initial-class class-items">List Item</li>
// classList.add adds a class to the existing classes
// This method will add the class 'class-items' to the existing classes in the classList of the element. The element's class attribute will be updated
li.classList.remove('class-items')
// <li id="myListItem" class="initial-class class-items">List Item</li>
// This method will remove the class 'class-items' from the existing classes in the classList of the element. The element's class attribute will be updated 
// classList.remove removes a class from the existing classes.

// returns true if there exists such class
revealcontent.classList.contains('reveal-button')

// delete element
li.remove()
