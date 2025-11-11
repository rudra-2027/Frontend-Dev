function marksAnalyzer() {
  let marks = [];
  for (let i = 1; i <= 5; i++) {
    let mark = parseFloat(prompt(`Enter marks for subject ${i} (out of 100):`));
    marks.push(mark);
  }

  let total = marks.reduce((a, b) => a + b, 0);
  let average = total / 5;
  let percentage = average;
  let failed = marks.filter(m => m < 40).length;

  let grade = "";
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 75) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 40) grade = "C";
  else grade = "Fail";

  let result = (failed >= 2) ? "Repeat Year" : "Pass";

  let message =
    "Marks Report\n" +
    `Marks: ${marks.join(", ")}\n` +
    `Total: ${total}\n` +
    `Average: ${average.toFixed(2)}\n` +
    `Percentage: ${percentage.toFixed(2)}%\n` +
    `Grade: ${grade}\n` +
    `Result: ${result}`;

  alert(message);
}

marksAnalyzer();
 