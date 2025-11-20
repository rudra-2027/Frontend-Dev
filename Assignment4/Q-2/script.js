function validateForm() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let password = document.getElementById("password");

  let nameErr = document.getElementById("nameErr");
  let emailErr = document.getElementById("emailErr");
  let phoneErr = document.getElementById("phoneErr");
  let passwordErr = document.getElementById("passwordErr");

  let nameRegex = /^[A-Za-z ]+$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^[0-9]{10}$/;
  let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

  let isValid = true;

  if (!nameRegex.test(name.value)) {
    name.style.border = "2px solid red";
    nameErr.style.display = "block";
    isValid = false;
  } else {
    name.style.border = "2px solid green";
    nameErr.style.display = "none";
  }

  if (!emailRegex.test(email.value)) {
    email.style.border = "2px solid red";
    emailErr.style.display = "block";
    isValid = false;
  } else {
    email.style.border = "2px solid green";
    emailErr.style.display = "none";
  }

  if (!phoneRegex.test(phone.value)) {
    phone.style.border = "2px solid red";
    phoneErr.style.display = "block";
    isValid = false;
  } else {
    phone.style.border = "2px solid green";
    phoneErr.style.display = "none";
  }

  if (!passwordRegex.test(password.value)) {
    password.style.border = "2px solid red";
    passwordErr.style.display = "block";
    isValid = false;
  } else {
    password.style.border = "2px solid green";
    passwordErr.style.display = "none";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
}
