function PersonProto(name) {
  this.name = name;
}

PersonProto.prototype.showName = function () {
  return this.name;
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}

StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;

StudentProto.prototype.showBranch = function () {
  return this.branch;
};

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  showName() {
    return this.name;
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  showBranch() {
    return this.branch;
  }
}

function runDemo() {
  const p1 = new StudentProto("Ravi", "CSE");
  const p2 = new StudentClass("Ravi", "CSE");

  const out = document.getElementById("output");

  out.textContent =
    "Prototype Version:\n" +
    p1.showName() + "\n" +
    p1.showBranch() +
    "\n\nClass Version:\n" +
    p2.showName() + "\n" +
    p2.showBranch() +
    "\n\nBoth behave the same and use prototype chain under the hood.";
}
