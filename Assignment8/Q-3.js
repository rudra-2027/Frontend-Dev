function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  const discountAmount = (this.price * percent) / 100;
  return this.price - discountAmount;
};

const product1 = new Product("Laptop", 1000);
const product2 = new Product("Headphones", 200);
const product3 = new Product("Mouse", 50);

console.log(
  `Original: ${product1.name} ($${
    product1.price
  }) -> Discounted (10%): $${product1.applyDiscount(10)}`
);
console.log(
  `Original: ${product2.name} ($${
    product2.price
  }) -> Discounted (20%): $${product2.applyDiscount(20)}`
);
console.log(
  `Original: ${product3.name} ($${
    product3.price
  }) -> Discounted (5%): $${product3.applyDiscount(5)}`
);
