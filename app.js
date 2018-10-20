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

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      // step 4 make button
      const delButton = document.createElement('button');
      delButton.textContent = "Delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      // step 4 append
      newLi.appendChild(delButton);
    });
  }

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
    });

    // step 4, 5, 6 make button work
    delButton.addEventListener('click', () => {
      toDos = deleteToDo(toDo.id);
      renderTheUI();
    });

  renderTheUI();
}

window.onload = function() {
    onReady();
 };
