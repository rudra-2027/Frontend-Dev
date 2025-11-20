class Cart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    let total = this.items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    if (this.discount > 0) {
      total = total - (total * this.discount) / 100;
    }

    return total;
  }

  applyCoupon(code) {
    const regex = /^(SAVE|DISC)(\d{1,2})$/;

    const match = code.match(regex);

    if (match) {
      this.discount = Number(match[2]);
      return true;
    }

    return false;
  }
}

const cart = new Cart();

function addItem() {
  const name = document.getElementById("itemName").value;
  const price = Number(document.getElementById("itemPrice").value);
  const qty = Number(document.getElementById("itemQty").value);

  if (name && price > 0 && qty > 0) {
    cart.addItem(name, price, qty);
    displayTotal();
  }
}

function applyCoupon() {
  const coupon = document.getElementById("coupon").value.trim();

  const valid = cart.applyCoupon(coupon);

  if (!valid) {
    document.getElementById("outputBox").textContent =
      "Invalid coupon format! Use SAVE20 or DISC10";
    return;
  }

  displayTotal();
}

function displayTotal() {
  const output = {
    items: cart.items,
    discount: cart.discount,
    finalTotal: cart.getTotal(),
  };

  document.getElementById("outputBox").textContent = JSON.stringify(
    output,
    null,
    2
  );
}
