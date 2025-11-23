class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (this.marks.length === 0) return 0;

    const total = this.marks.reduce((accumulator, currentValid) => {
      return accumulator + currentValid;
    }, 0);

    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();

    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 60) return "C";
    return "F";
  }
}

const student1 = new Student("Nitin", [95, 88, 92, 90]);
console.log(
  `${
    student1.name
  } - Average: ${student1.calculateAverage()} - Grade: ${student1.getGrade()}`
);

const student2 = new Student("Sarthak", [70, 65, 72, 68]);
console.log(
  `${
    student2.name
  } - Average: ${student2.calculateAverage()} - Grade: ${student2.getGrade()}`
);

const student3 = new Student("Rudra", [50, 45, 55, 40]);
console.log(
  `${
    student3.name
  } - Average: ${student3.calculateAverage()} - Grade: ${student3.getGrade()}`
);
