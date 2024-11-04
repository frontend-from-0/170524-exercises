document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const todoInputElement = document.getElementById("todoInput");
    console.log(todoInputElement.value);
    //task3
if(todoInputElement.value.trim() !== ''){
    const toDoListItemElement = document.createElement("li"); // Node
    toDoListItemElement.textContent = todoInputElement.value;
//task2
    const textElement = document.createElement('span');
    textElement.addEventListener('click', function() {
      textElement.style.textDecoration = 'line-through';
      textElement.style.color = 'red';
    });
   
    

    const toDoListElement = document.getElementById("toDoList");
    toDoListElement.appendChild(toDoListItemElement);

    toDoListElement.addEventListener(
      'click',
      function() {
        toDoListElement.classList.toggle('completed');
      }
    )

    //task1
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.textContent = 'Delete';
    toDoListItemElement.appendChild(deleteButtonElement);

    deleteButtonElement.addEventListener(
      'click',
      function () {
        toDoListItemElement.remove();
      }
    );
  };

  });
