let todoForm = document.querySelector("#todoForm");
let todoList = document.querySelector("#todoList");

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let description = document.querySelector("#description").value;
    let deadline = document.querySelector("#deadline").value;

    let todo = { description, deadline };
    addTodoToList(todo);

    todoForm.reset();
});

function addTodoToList(todo) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `Tâche : ${todo.description} (Deadline: ${todo.deadline}) <button class="btn btn-danger">Supprimer</button>`;
    todoList.appendChild(listItem);

    let removeBtn = listItem.querySelector(".btn");
    removeBtn.addEventListener("click", function () {
        if (confirm("Voulez-vous vraiment supprimer cette ToDo ?")) {
            listItem.remove();
        }
    });
}