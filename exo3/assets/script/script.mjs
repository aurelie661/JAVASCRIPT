let todoForm = document.querySelector("#todo-form");
let todoList = document.querySelector("#todo-display");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let description = document.querySelector("#description").value;
  let deadline = document.querySelector("#dueDate").value;

  let todo = { description, deadline };
  addTodoToList(todo);

  todoForm.reset();
});

function addTodoToList(todo) {
  const divElement = document.createElement("div");
  const descSpanElement = document.createElement("span");
  const dateSpanElement = document.createElement("span");
  const buttonElement = document.createElement("button");

  descSpanElement.textContent = todo.description;
  dateSpanElement.textContent = todo.dueDate;
  buttonElement.textContent = "Complete";
  buttonElement.addEventListener("click", () => {
    if (confirm("Voulez-vous vraiment supprimer cette ToDo ?")) {
      divElement.remove();
    }
  });

  divElement.appendChild(descSpanElement);
  divElement.appendChild(dateSpanElement);
  divElement.appendChild(buttonElement);

  document.querySelector("div#todo-display").appendChild(divElement);
}
