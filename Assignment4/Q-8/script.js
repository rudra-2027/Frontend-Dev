let user = {
  name: "Akash",
  email: "akash@mail.com",
  age: 21,
};

document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

function showUser() {
  document.getElementById("outputBox").textContent = JSON.stringify(
    user,
    null,
    2
  );
}

showUser();

function updateUser() {
  user.name = document.getElementById("name").value;
  user.email = document.getElementById("email").value;
  user.age = document.getElementById("age").value;

  showUser();
}
