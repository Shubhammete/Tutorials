//modifying text
const firstlist = document.querySelector('.class-items');
console.log(firstlist.innerHTML)//Mete
                                // <span>Family</span>
//prefer innerText to use
console.log(firstlist.innerText) // Mete Family
console.log(firstlist.textContent) // Mete
                                    // Family

li.innerText = "Batman"  //value to empty list added
