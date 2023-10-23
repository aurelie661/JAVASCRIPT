import Person from "./Person.js";

let userForm = document.querySelector("#userForm");
let userCount = document.querySelector("#userCount");
let userList = document.querySelector("#userList");
let users = [];

userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let person = new Person(firstName, lastName, email, password);
  users.push(person);

  updateUserList();
  userCount.textContent = users.length;
//   console.log("Listing des Utilisateurs:", users);

  userForm.reset();
});

function updateUserList() {
  userList.innerHTML = "";
  users.forEach((person) => {
    let listItem = document.createElement("li");
    listItem.textContent = `Prénom: ${person.firstName}, Nom: ${person.lastName}, Email: ${person.email}`;
    userList.appendChild(listItem);
  });
}
