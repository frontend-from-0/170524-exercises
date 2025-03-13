document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const todoInputElement = document.getElementById("todoInput");
    console.log(todoInputElement.value);

    const toDoListItemElement = document.createElement("li"); // Node
    toDoListItemElement.textContent = todoInputElement.value;

    const toDoListElement = document.getElementById("toDoList");
    toDoListElement.appendChild(toDoListItemElement);

    toDoListElement.addEventListener(
      'click',
      function() {
        toDoListElement.classList.toggle('completed');
      }
    );

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'X';
    toDoListItemElement.appendChild(btnDelete);
    btnDelete.classList.add('btn-delete');

    btnDelete.addEventListener(
      'click',
      function() {
        toDoListItemElement.remove();
      }
    );
  });



  // Task 1: Every todo list item should have a delete button attached to it. When delete button is clicked, corresponding list item should be removed from the list.
  // Task 2: When a user clicks on the text of the todo item, only the text should be crossed (add line-through text decoration)
  // Task 3: A user should only be able to add an actual todo item to the list (do not allow adding empty string or similar)
  // Task 4: Clear the input field after the todo list items is added.