let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let total = scores.reduce((sum, val) => sum + val, 0);
let average = (total / scores.length).toFixed(2);
let passed = scores.filter(score => score >= 50).length;

let result = `
Scores: ${scores.join(", ")}
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average}
Students Passed (>=50): ${passed} / ${scores.length}
`;

console.log(result);
