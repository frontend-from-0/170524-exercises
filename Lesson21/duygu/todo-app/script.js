document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const todoInputElement = document.getElementById("todoInput");
    console.log(todoInputElement.value);
    //task3
if(todoInputElement.value.trim() !== ''){
    const toDoListItemElement = document.createElement("li"); // Node
    
    
//task2
    const textElement = document.createElement('span');
    textElement.textContent = todoInputElement.value;
   
    textElement.addEventListener(
      'click', 
      function() {
      textElement.classList.toggle('completed');
    });

    toDoListItemElement.appendChild(textElement);
  //task4
  todoInputElement.value = '';

  const toDoListElement = document.getElementById("toDoList");
  toDoListElement.appendChild(toDoListItemElement);
    

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
