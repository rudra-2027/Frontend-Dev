const steps = document.querySelectorAll(".step");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("passInput");
const sumName = document.getElementById("sumName");
const sumEmail = document.getElementById("sumEmail");
const sumPass = document.getElementById("sumPass");

function showStep(n) {
  steps.forEach(step => step.classList.remove("active"));
  steps[n].classList.add("active");
}

document.getElementById("next1").onclick = () => {
  if (nameInput.value.trim()) showStep(1);
};

document.getElementById("back2").onclick = () => showStep(0);
document.getElementById("next2").onclick = () => {
  if (emailInput.value.includes("@") && emailInput.value.includes(".")) showStep(2);
};

document.getElementById("back3").onclick = () => showStep(1);
document.getElementById("finish").onclick = () => {
  if (passInput.value.trim().length >= 3) {
    sumName.textContent = "Name: " + nameInput.value;
    sumEmail.textContent = "Email: " + emailInput.value;
    sumPass.textContent = "Password: " + passInput.value;
    showStep(3);
  }
};
