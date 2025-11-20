const body = document.body;

document.getElementById("lightBtn").onclick = () => {
  body.setAttribute("data-theme", "light");
};

document.getElementById("darkBtn").onclick = () => {
  body.setAttribute("data-theme", "dark");
};

document.getElementById("blueBtn").onclick = () => {
  body.setAttribute("data-theme", "blue");
};
