// Task 1: Every todo list item should have a delete button attached to it. When delete button is clicked, corresponding list item should be removed from the list.
// Task 2: When a user clicks on the text of the todo item, only the text should be crossed (add line-through text decoration)
// Task 3: A user should only be able to add an actual todo item to the list (do not allow adding empty string or similar)
// Task 4: Clear the input field after the todo list items is added.

document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const todoInputElement = document.getElementById("todoInput");
    const toDoListElement = document.getElementById("toDoList"); // ul
    const errorMessageElement = document.querySelector(".error");

    // Task 3:
    const newItem = todoInputElement.value.trim();

    if (newItem === "") {     
      errorMessageElement.textContent = "There is nothing to add to the list.";
      return; // Prevent executing the rest of the function
    } else {
      // Clear any previous error message
      errorMessageElement.textContent = "";

      const toDoListItemElement = document.createElement("li"); // Node

      const todoTextElement = document.createElement("span");
      todoTextElement.textContent = newItem;
      toDoListItemElement.appendChild(todoTextElement);

      // Task 1:
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      toDoListItemElement.appendChild(deleteBtn);
      deleteBtn.classList.add("btn-delete");

      deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        toDoListItemElement.remove(); // Remove the todo item
      });

      // Task 2:
      toDoListItemElement.addEventListener("click", function () {
        todoTextElement.classList.toggle("completed"); // Toggle completed class on the li
      });

      // Task 4:
      toDoListElement.appendChild(toDoListItemElement); // append li to ul
      todoInputElement.value = ""; // clear the input field
    }
  });
