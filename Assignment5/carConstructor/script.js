function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  return this.brand + " " + this.model;
};

function runCarDemo() {
  const car1 = new Car("Toyota", "Fortuner");
  const car2 = new Car("Honda", "City");

  const out = document.getElementById("output");
  out.textContent =
    "Car 1: " + car1.getDetails() +
    "\nCar 2: " + car2.getDetails() +
    "\n\nBoth objects share the same method from Car.prototype.";
}
