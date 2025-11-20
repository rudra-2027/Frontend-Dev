function makeMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

function runDemo() {
  const triple = makeMultiplier(3);
  const result = triple(5);

  const out = document.getElementById("output");
  out.textContent =
    "triple(5) = " + result +
    "\n\nExplanation:\nThe inner function remembers 'multiplier' using closure.";
}
