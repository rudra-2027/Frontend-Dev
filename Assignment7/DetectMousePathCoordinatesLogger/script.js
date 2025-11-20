const box = document.getElementById("box");
const coords = document.getElementById("coords");

box.addEventListener("mousemove", e => {
  coords.textContent = "X: " + e.clientX + ", Y: " + e.clientY;
});

box.addEventListener("dblclick", e => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = x + "px";
  dot.style.top = y + "px";

  box.appendChild(dot);
});
