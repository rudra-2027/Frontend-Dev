function runDemo() {
  const out = document.getElementById("output");

  const userArrow = {
    name: "Rudra",
    showName: () => {
      return this.name;
    }
  };

  const userNormal = {
    name: "Rudra",
    showName() {
      return this.name;
    }
  };

  out.textContent =
    "Arrow Function Output: " + userArrow.showName() +
    "\nNormal Function Output: " + userNormal.showName() +
    "\n\nReason:\nArrow functions do not have their own 'this'.\nThey inherit 'this' from the outer (global) scope.";
}
