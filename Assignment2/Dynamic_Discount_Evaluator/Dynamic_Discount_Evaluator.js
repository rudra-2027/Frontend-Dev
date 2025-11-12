const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

cart.forEach(product => {
  if (product.category === "electronics") {
    product.discountedPrice = product.price * 0.9;
  } else if (product.category === "fashion") {
    product.discountedPrice = product.price * 0.95;
  } else {
    product.discountedPrice = product.price;
  }
});
let total = cart.reduce((sum, product) => sum + product.discountedPrice, 0);
if (total > 50000) {
  total *= 0.95;
}
cart.forEach(p => {
  console.log(`${p.item} (${p.category}) → ₹${p.discountedPrice.toFixed(2)}`);
});

console.log(`Final Total: ₹${total.toFixed(2)}`);