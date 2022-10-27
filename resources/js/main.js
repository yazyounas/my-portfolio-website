
/*
nav.forEach((li) =>{
 
 btn.addEventListener('mouseenter', function(event){
    let btn = event.target.parentnode.style.backgroundColor = 'red';
}, false)


*/

 /*   
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
 
const unorderList = ['list1', 'list2', 'list3', 'list4','list5','list6','list7','list8'];
const notes = [];
unorderList.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = function(event) {
  event.target.style.backgroundColor = 'grey'
  event.target.style.color = 'black'
  event.target.style.fontSize = '24px'
 
}
const keyReturn = function(event) {
  event.target.style.backgroundColor = '';
  event.target.style.color = '';
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
notes.forEach(changeColor);