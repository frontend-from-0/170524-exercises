document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addItem();
  });

  const todoInputElement = document.getElementById("todoInput");
  const toDoListElement = document.getElementById("toDoList");
  function addItem(){
    if(todoInputElement.value === ''){
      alert("There is nothing to do...");
    } else {
      const toDoListItemElement = document.createElement("li"); // Node
      toDoListItemElement.textContent = todoInputElement.value;
      toDoListElement.appendChild(toDoListItemElement);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      toDoListItemElement.appendChild(span);
      todoInputElement.value = '';
    }
    todoInputElement.value.trim() = '';
    //to save data
    saveData();
  }

  toDoListElement.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("completed");
      saveData();
    } else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
    }
  }, false);
  //saving data function
  function saveData(){
    localStorage.setItem("data",toDoListElement.innerHTML);
  }
  /*to display everytime but mine doesn't completely works (checked buttons resets and removed items comes back)*/
  function showTask(){
    toDoListElement.innerHTML = localStorage.getItem("data");
  }
  showTask();
