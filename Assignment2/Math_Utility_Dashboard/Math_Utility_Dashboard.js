
let x = 16.75;
let rounded = Math.round(x);
let sqrt = Math.sqrt(x);
let power = Math.pow(x, 3);
let random = Math.floor(Math.random() * 41) + 10;

let result = `
Given Number: ${x}
Rounded Value: ${rounded}
Square Root: ${sqrt.toFixed(3)}
Cube : ${power.toFixed(3)}
Random (10–50): ${random}
`;

console.log(result);
