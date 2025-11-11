let showtime = "morning"
let isStudent = false;
let age = 21
let tickets = 4

let price;
let discount;
let serivce;

if (showtime === "morning") {
  price = 120;
} else if (showtime === "evening") {
  price = 180;
}

let base = price * tickets;

if (isStudent) {
  discount = 10;

} else if (age > 60) {
  discount = 20;
}
let discountedTotal = price * (1 - discount / 100);

if (tickets > 3) {
  serivce = 50;
}

let final = discountedTotal + serivce;

console.log("Cinema Ticket Summary");
console.log("Base Price " + base);
console.log("Discount " + discount + "%");
console.log("After Discount " + discountedTotal.toFixed(2));
console.log("Service Fee " + serivce);
console.log("Final Amount " + final);






