document.getElementById("todoForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const todoInput = document.getElementById("todoInput").value;
  const toDoList = document.getElementById("toDoList");
  const listItem = document.createElement("li");
  const checkbox = document.createElement("main");
  checkbox.className = "checkbox";

  checkbox.addEventListener("click", function () {
  checkbox.classList.toggle("checked");
  listItem.classList.toggle("completed");
  });

  
  const text = document.createElement("span");
  text.textContent = todoInput;
  listItem.appendChild(checkbox);
  listItem.appendChild(text);
  toDoList.appendChild(listItem);

  document.getElementById("todoInput").value = "";
});
