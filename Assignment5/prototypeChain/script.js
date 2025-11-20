function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  return "Name: " + this.name;
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  return "Branch: " + this.branch;
};

function runDemo() {
  const s1 = new Student("Rudra", "CSE");

  const out = document.getElementById("output");

  out.textContent =
    s1.showName() +
    "\n" +
    s1.showBranch() +
    "\n\nPrototype chain working:" +
    "\nStudent → Person → Object";
}
