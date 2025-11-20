const form = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("passInput");

const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");
const success = document.getElementById("success");

function validate() {
  let ok = true;

  if (!nameInput.value.trim()) {
    nameErr.textContent = "Name is required";
    ok = false;
  } else nameErr.textContent = "";

  if (!emailInput.value.includes("@")) {
    emailErr.textContent = "Invalid email";
    ok = false;
  } else emailErr.textContent = "";

  if (passInput.value.length < 6) {
    passErr.textContent = "Password must be 6+ chars";
    ok = false;
  } else passErr.textContent = "";

  return ok;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validate()) {
    success.textContent = "Form Submitted Successfully";
    form.reset();
  }
});

[nameInput, emailInput, passInput].forEach(inp => {
  inp.addEventListener("input", () => {
    validate();
    success.textContent = "";
  });
});
