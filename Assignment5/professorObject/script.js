function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  return "Name: " + this.name;
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
  return "Department: " + this.department;
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
  return "Subject: " + this.subject;
};

function runDemo() {
  const p1 = new Professor("Dr. Singh", "Computer Science", "AI");

  const out = document.getElementById("output");

  out.textContent =
    p1.showName() +
    "\n" +
    p1.showDepartment() +
    "\n" +
    p1.showSubject() +
    "\n\nPrototype chain working:" +
    "\nProfessor → Faculty → Person → Object";
}
