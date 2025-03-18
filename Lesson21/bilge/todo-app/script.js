document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const todoInputElement = document.getElementById("todoInput");
    console.log(todoInputElement.value);

    const toDoListItemElement = document.createElement("li"); // Node
    toDoListItemElement.textContent = todoInputElement.value;
    

    /* Task 3:
    const errorMessageElement = document.createElement("errorMessage"); // Assuming you have an element to display errors

     if (todoInputElement.value === '') {
      errorMessageElement.textContent = 'You cannot add an empty item. Please enter a valid todo.';
      return; // Exit the function if the input is invalid
    } else if ((todoInputElement.value).length < 3) {
      errorMessageElement.textContent = 'You should type items longer than 3 letters.';
      return; // Exit the function if the input is invalid
    } else {
      errorMessageElement.textContent = ''; // Clear any previous error messages
    } 
    */

    const toDoListElement = document.getElementById("toDoList");
    toDoListElement.appendChild(toDoListItemElement);
    

    //Task 2:

    const listItemText = document.createElement('span');
    listItemText.textContent = todoInputElement.value;
    

    toDoListElement.addEventListener(
      'click',
      function(e) {      
        if(e.target.tagName === 'li') {
          e.target.classList.toggle('completed'); 
        } else if(e.target.tagName === 'span') {
          e.target.parentElement.remove();
        }                   
      }
    );

    toDoListItemElement.appendChild(listItemText);
   


    /* toDoListElement.addEventListener (
        'click', function(e) {
          if(e.target.tagName === 'li') {
            e.target.classList.toggle('completed');
          } else if(e.target.tagName === 'span') {
            e.target.parentElement.remove();
          }
        }
      ); 
    */


    // Task 1:
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