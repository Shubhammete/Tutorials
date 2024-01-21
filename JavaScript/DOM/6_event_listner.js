// Event Listeners

// we can add in html for example in event.html file 
// in js file
const btn = document.querySelector('.btn2');

function alertbtn(){
    alert('I ❤️ Physics');
}
btn.addEventListener('click',alertbtn)

//ex 2 
const box = document.querySelector('.box3')

function changecolor(){
    box.style.backgroundColor = 'burlywood';
}

box.addEventListener('mouseover',changecolor)

// hiding info
// make content div  display none  
const revealbtn = document.querySelector('.reveal-btn-boxes') // selected button
const revealcontent = document.querySelector('.hidden-content') // created unused class and selected it

function revealall(){// 
    if(revealcontent.classList.contains('reveal-button')){  // if there is class defined then 
        revealcontent.classList.remove('reveal-button');  // remove button prop
    }
    else{
        revealcontent.classList.add('reveal-button');   // if not add button
    }  
}

revealbtn.addEventListener('click',revealall)
