class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Amit", "HR", 30000),
  new Employee(2, "Riya", "IT", 50000),
  new Employee(3, "Karan", "Finance", 45000),
  new Employee(4, "Sneha", "Marketing", 35000),
  new Employee(5, "John", "Operations", 40000),
];

employees.forEach((emp) => emp.applyBonus(10));

function showEmployees() {
  const container = document.getElementById("employeeList");

  employees.forEach((emp) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><strong>ID:</strong> ${emp.id}</p>
      <p><strong>Name:</strong> ${emp.name}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Monthly Salary:</strong> ₹${emp.salary}</p>
      <p><strong>Annual Salary:</strong> ₹${emp.getAnnualSalary()}</p>
    `;
    container.appendChild(card);
  });
}

function showTotalPayout() {
  const total = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

  document.getElementById(
    "totalPayout"
  ).textContent = `Total Annual Payout: ₹${total}`;
}

showEmployees();
showTotalPayout();
