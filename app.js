function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  // step 1
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      // step 2 and 3
      id: id++,

    });

    newToDoText.value = '';

    renderTheUI();
  }

// step 5 make button work
  function removeToDo(id) {
    const index = toDos.findIndex(toDo => {
      return toDo.id === id;
    });
    toDos.splice(index, 1);
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      // step 4 make button
      const deleteButton = document.createElement('button');
      deleteButton.innerText = "Delete";

      // step 4 event listener
      deleteButton.addEventListener('click', event => {
        removeToDo(toDo.id)
      })

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      // step 4 append
      newLi.appendChild(deleteButton);
    });
  }

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
    });

  renderTheUI();
}

window.onload = function() {
    onReady();
 };
