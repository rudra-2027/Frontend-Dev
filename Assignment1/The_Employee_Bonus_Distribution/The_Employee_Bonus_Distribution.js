function annualBonusCalculator() {
  let salary = parseFloat(prompt("Enter base salary (₹):"));
  let rating = parseInt(prompt("Enter performance rating (1–5):"));
  let experience = parseInt(prompt("Enter years of experience:"));

  let percent = 0;
  if (rating === 5) percent = 20;
  else if (rating === 4) percent = 15;
  else if (rating === 3) percent = 10;
  else percent = 0;

  if (experience > 5) percent += 5;

  let calculatedBonus = (salary * percent) / 100;
  let finalBonus = calculatedBonus;

  if (salary > 100000 && finalBonus > 25000) {
    finalBonus = 25000;
  }

  let totalSalary = salary + finalBonus;

  let message =
    " Annual Bonus Summary \n\n" +
    `Base Salary: ₹${salary.toFixed(2)}\n` +
    `Performance Rating: ${rating}\n` +
    `Experience: ${experience} years\n` +
    `Calculated Bonus: ₹${calculatedBonus.toFixed(2)}\n` +
    `Final Bonus (after cap): ₹${finalBonus.toFixed(2)}\n` +
    `Total Salary after Bonus: ₹${totalSalary.toFixed(2)}`;

  alert(message);
}

annualBonusCalculator();
