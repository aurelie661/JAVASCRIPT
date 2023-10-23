import Person from "./Person.js";

const userForm = document.querySelector("#userForm");
const userCount = document.querySelector("#userCount");
const userList = document.querySelector("#userList");
const users = [];

userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const person = new Person(firstName, lastName, email, password);
  users.push(person);

  updateUserList();
  userCount.textContent = users.length;
//   console.log("Listing des Utilisateurs:", users);

  userForm.reset();
});

function updateUserList() {
  userList.innerHTML = "";
  users.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Prénom: ${person.firstName}, Nom: ${person.lastName}, Email: ${person.email}`;
    userList.appendChild(listItem);
  });
}
