class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Shoes", 900, "Fashion"),
  new Product(3, "Smartphone", 15000, "Electronics"),
  new Product(4, "Watch", 750, "Accessories"),
  new Product(5, "Office Chair", 3500, "Furniture"),
];

products.forEach((p) => p.applyDiscount(10));

function showFilteredProducts() {
  const filtered = products.filter((p) => p.price > 1000);

  const container = document.getElementById("productList");
  container.innerHTML = "";

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p><strong>ID:</strong> ${p.id}</p>
      <p><strong>Category:</strong> ${p.category}</p>
      <p><strong>Price:</strong> ₹${p.price}</p>
    `;
    container.appendChild(card);
  });
}
