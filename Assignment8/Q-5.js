class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleDetails) {
    super(name, rating);
    this.vehicleDetails = vehicleDetails;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (typeof this.distance !== "number" || this.distance <= 0) {
      throw new Error("Invalid distance provided for fare calculation.");
    }
    const ratePerKm = 10;
    return this.distance * ratePerKm;
  }
}

try {
  const trip1 = new Trip("Uptown", "Downtown", 15);
  console.log(`Trip 1 Fare: $${trip1.calculateFare()}`);

  const trip2 = new Trip("City Center", "Airport", -5);
  console.log(`Trip 2 Fare: $${trip2.calculateFare()}`);
} catch (error) {
  console.error(error.message);
}
