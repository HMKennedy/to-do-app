function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', () => {
     event.preventDefault();

     // get the text
     let title = newToDoText.value;

     // create a new li
     let newLi = document.createElement('li');

     // create a new input
     let checkbox = document.createElement('input');

     // create delete button
     let deleteButton = document.createElement('button');

     // set the input's type to checkbox
     checkbox.type = "checkbox";

     // set the title
     newLi.textContent = title;

     // delete button text
     deleteButton.textContent = "Delete";

     // attach the checkbox to the li
     newLi.appendChild(checkbox);

     // attach delete button to the li
     newLi.appendChild(deleteButton);

     // attach the li to the ul
     toDoList.appendChild(newLi);

     // make button work
     deleteButton.addEventListener('click', function() {
       newLi.parentNode.removeChild(newLi);
     })

     //empty the input
     newToDoText.value = '';
 });
}

window.onload = function() {
    onReady();
 };
