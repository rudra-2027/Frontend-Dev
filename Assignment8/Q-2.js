const menu = [
    { name: "Burger", price: 5.99 },
    { name: "Pizza", price: 8.99 },
    { name: "Salad", price: 4.99 },
    { name: "Water", price: 1.99 }
];

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        const menuItem = menu.find(m => m.name === item);
        if (!menuItem) {
            throw new Error(`Item '${item}' is not on the menu.`);
        }
        return menuItem.price;
    });

    return prices.reduce((total, price) => total + price, 0);
}

try {
    const order1 = ["Burger", "Water", "Salad"];
    console.log("Order 1 Total:", calculateBill(order1));
} catch (error) {
    console.error(error.message);
}

try {
    const order2 = ["Pizza", "Sushi"];
    console.log("Order 2 Total:", calculateBill(order2));
} catch (error) {
    console.error(error.message);
}