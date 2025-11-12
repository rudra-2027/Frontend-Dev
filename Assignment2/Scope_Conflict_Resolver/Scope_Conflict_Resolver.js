

let bonus = 5000;

function calculateSalary(isPermanent) {
  let salary = 40000;
  let totalSalary;
  if (isPermanent) {
    totalSalary = salary + bonus;
  } else {
    totalSalary = salary;
  }

  console.log(`Is Permanent: ${isPermanent}`);
  console.log(`Total Salary: ${totalSalary}`);
  console.log(`Global bonus: ${bonus}`);
  console.log("----------");
}

calculateSalary(true)
calculateSalary(false)


