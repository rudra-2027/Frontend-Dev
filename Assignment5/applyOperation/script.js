function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

function double(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

console.log("Double:", applyOperation([1,2,3,4], double));
console.log("Square:", applyOperation([1,2,3,4], square));
