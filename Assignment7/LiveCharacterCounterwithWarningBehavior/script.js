const box = document.getElementById("textBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");
let max = 100;

box.addEventListener("keydown", e => {
  if (box.value.length >= max && e.key.length === 1) e.preventDefault();
});

box.addEventListener("input", () => {
  let remaining = max - box.value.length;
  counter.textContent = remaining + " characters left";
  counter.style.color = remaining <= 0 ? "red" : remaining <= 20 ? "goldenrod" : "black";
});

resetBtn.onclick = () => {
  box.value = "";
  counter.textContent = "100 characters left";
  counter.style.color = "black";
};
