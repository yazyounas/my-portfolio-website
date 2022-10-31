
let navButtons = document.getElementsByClassName("nav-btn");

for (var i=0; i < navButtons.length; i++) { 
    // On mouse over.
    navButtons[i].addEventListener("mouseover", function () {
        // Change color to red.
        
        this.style.backgroundColor = 'gray';
        this.style.transform = 'scale(1.2)';
        
        
    });
    // On mouse out.
    navButtons[i].addEventListener("mouseout", function () {
      // Change back to original color.
      this.style.backgroundColor = '';
      
      this.style.transform = '';
    });
}

let Buttons = document.getElementsByClassName("btn");

for (let i=0; i < navButtons.length; i++) { 
    // On mouse over.
    Buttons[i].addEventListener("mouseover", function () {
        // Change color to red.
        this.style.color = "black";
    });
    // On mouse out.
    Buttons[i].addEventListener("mouseout", function () {
      // Change back to original color.
      this.style.color = "";
    });
}


/*
nav.forEach((li) =>{
 
 btn.addEventListener('mouseenter', function(event){
    let btn = event.target.parentnode.style.backgroundColor = 'red';
}, false)


*/
/*
let changebg = document.querySelector('.nav-btn');


function changeBackground() {
    changebg.style.backgroundColor = 'gray';
    changebg.style.fontSize= '24px';
    changebg.style.color = 'black';

    

  }
  function normalBackground() {
    changebg.style.backgroundColor = '';
    changebg.style.fontSize = '';
  }
  changebg.addEventListener('mouseover', changeBackground);
  changebg.addEventListener('mouseout', normalBackground);
*/
  // The keys and notes variables store the piano keys
 /*
const unorderList = ['list1', 'list2', 'list3', 'list4','list5','list6','list7','list8'];
const notes = [];
unorderList.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = function(event) {
  event.target.style.backgroundColor = 'red'
  
  event.target.style.fontSize = '24px'
 
}
const keyReturn = function(event) {
  event.target.style.backgroundColor = '';
  
  event.target.style.fontSize = '';
}
// Write a named function with event handler properties
let changeColor = function(note) {
  note.onmouseover = function() {
    keyPlay(event);
  }
   note.onmouseout = function(){
    keyReturn(event);
}
}
// Write a loop that runs the array elements through the function
notes.forEach(changeColor);*/