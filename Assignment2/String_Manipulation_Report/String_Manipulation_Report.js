let product = " wireless headphones PRO "
let product_Trime = product.trim()
product_Trime = product_Trime.toLowerCase()
product_Trime = product_Trime.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")

product_Trime = product_Trime.replace("Pro", "Pro edition")

console.log(`Original Nmae ${product}`);
console.log(`After Conversion Original Nmae ${product_Trime}`);
