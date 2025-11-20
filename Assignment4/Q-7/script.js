function validateLogin() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  let userErr = document.getElementById("userErr");
  let passErr = document.getElementById("passErr");
  let successMsg = document.getElementById("successMsg");

  let isValid = true;

  const userRegex = /^.{5,}$/;
  const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!userRegex.test(username.value)) {
    username.style.border = "2px solid red";
    userErr.style.display = "block";
    isValid = false;
  } else {
    username.style.border = "2px solid green";
    userErr.style.display = "none";
  }

  if (!passRegex.test(password.value)) {
    password.style.border = "2px solid red";
    passErr.style.display = "block";
    isValid = false;
  } else {
    password.style.border = "2px solid green";
    passErr.style.display = "none";
  }

  if (isValid) {
    successMsg.style.display = "block";
    successMsg.textContent = "Login Successful!";
  } else {
    successMsg.style.display = "none";
  }
}
