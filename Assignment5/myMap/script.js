Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

function runDemo() {
  const numbers = [1, 2, 3];
  const doubled = numbers.myMap(n => n * 2);

  const out = document.getElementById("output");
  out.textContent =
    "Original Array: " + JSON.stringify(numbers) +
    "\nUsing myMap: " + JSON.stringify(doubled);
}
