const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("productList");
let editingItem = null;

addBtn.onclick = () => {
  if (!input.value.trim()) return;
  const li = document.createElement("li");
  li.innerHTML = `<span>${input.value}</span>
  <div>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  </div>`;
  list.appendChild(li);
  input.value = "";
};

list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.closest("li").remove();
  } else if (e.target.classList.contains("edit")) {
    const li = e.target.closest("li");
    const span = li.querySelector("span");
    const value = span.textContent;
    const inputBox = document.createElement("input");
    inputBox.value = value;
    li.prepend(inputBox);
    span.style.display = "none";
    editingItem = { li, inputBox, span };
    inputBox.focus();
  }
});

document.addEventListener("click", e => {
  if (!editingItem) return;
  if (editingItem.li.contains(e.target)) return;
  editingItem.span.textContent = editingItem.inputBox.value;
  editingItem.span.style.display = "inline";
  editingItem.inputBox.remove();
  editingItem = null;
});
