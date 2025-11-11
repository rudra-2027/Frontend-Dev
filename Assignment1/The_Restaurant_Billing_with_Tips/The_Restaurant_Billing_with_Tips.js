function generateBill() {
  let cost = parseFloat(prompt("Enter base food cost (₹):"));
  let type = prompt("Dining in? (yes/no):").toLowerCase();
  let gst = cost * 0.05;

  let tax = (type === "yes") ? cost * 0.10 : 0;
  let total = cost + gst + tax;
  let tip = (total > 2000) ? total * 0.08 : 0;
  let finalTotal = total + tip;

  let message = 
    "Restaurant Bill Summary\n" +
    `Base Amount: ₹${cost.toFixed(2)}\n` +
    `GST: ₹${gst.toFixed(2)}\n` +
    `Service Tax: ₹${tax.toFixed(2)}\n` +
    `Tip: ₹${tip.toFixed(2)}\n` +
    `Final Total: ₹${finalTotal.toFixed(2)}`;

  alert(message);
}

generateBill();
