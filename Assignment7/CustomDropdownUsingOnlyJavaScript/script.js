const btn = document.getElementById("dropBtn");
const options = document.getElementById("options");

btn.onclick = () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
};

options.onclick = e => {
  if (e.target.classList.contains("opt")) {
    btn.textContent = e.target.textContent;
    options.style.display = "none";
  }
};

document.addEventListener("click", () => {
  options.style.display = "none";
}, true);
