
// ================================================
// INTERACTIVE PRODUCT INVENTORY & ANALYTICS DASHBOARD
// ================================================

console.log("========================================");
console.log("   INITIALIZING INVENTORY SYSTEM");
console.log("========================================");

// 1. DATA & INPUT INITIALIZATION

let inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

console.log("Initial Inventory:", inventory);

// Taking input from user
let productName = prompt("Enter Product Name:");
let productPrice = Number(prompt("Enter Product Price:"));

// 2. CONTROL FLOW & CONDITIONAL EVALUATION

if (
    productName !== null &&
    productName.trim() !== "" &&
    !isNaN(productPrice) &&
    productPrice > 0
) {
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });

    console.log("Product added successfully!");
} else {
    console.log("Invalid input! Product not added.");
}

// Assign category using if-else and switch
function getCategory(price) {
    let category;

    if (price < 100) {
        category = "Budget";
    } else if (price < 500) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    switch (category) {
        case "Budget":
            return "Budget";

        case "Standard":
            return "Standard";

        case "Premium":
            return "Premium";

        default:
            return "Unknown";
    }
}

// 3. LOOPS & FLOW CONTROL

console.log("\n--- Searching Inventory ---");

for (let i = 0; i < inventory.length; i++) {

    // Skip missing product names
    if (!inventory[i].name) {
        continue;
    }

    // Skip invalid prices
    if (inventory[i].price <= 0) {
        continue;
    }

    // Stop searching if product name is Stop
    if (inventory[i].name === "Stop") {
        break;
    }

    console.log("Found Product:", inventory[i].name);
}

// 4. FUNCTIONS & SCOPE

// Regular function to calculate total inventory value
function calculateTotal(items) {
    let total = 0;

    for (let item of items) {
        total += item.price;
    }

    return total;
}

// Arrow function for tax and discount calculation
const calculateFinalPrice = (price, tax = 0, discount = 0) => {

    let taxAmount = price * tax / 100;
    let priceWithTax = price + taxAmount;

    let discountAmount = priceWithTax * discount / 100;

    let finalPrice = priceWithTax - discountAmount;

    return finalPrice;
};

// 5. ARRAY METHODS & ITERATION

// Display inventory using forEach()
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(item => {

    console.log(
        "* Item: " + item.name +
        " ($" + item.price + ")" +
        " -> Category: " + getCategory(item.price)
    );

});

// Financial analytics
console.log("\n--- Financial Analytics ---");

// Calculate total inventory value
let totalValue = calculateTotal(inventory);

console.log("Total Inventory Value: $" + totalValue);

// Calculate tax and discount
let finalValue = calculateFinalPrice(totalValue, 10, 5);

console.log(
    "Final Value (10% Tax and 5% Discount): $" +
    finalValue.toFixed(2)
);

// Filter affordable products using filter()
let affordableItems = inventory.filter(item => {
    return item.price < 200;
});

let affordableNames = affordableItems.map(item => item.name);

console.log(
    "Filtered Affordable Items (Under $200):",
    affordableNames
);

// Generate formatted report using map()
let formattedReport = inventory.map(item => {
    return item.name.toUpperCase() + ": $" + item.price;
});

console.log("Formatted Report List:", formattedReport);

// Final summary
console.log("\n========================================");
console.log("       INVENTORY SYSTEM COMPLETED");
console.log("========================================");
console.log("Total Products:", inventory.length);
console.log("Total Inventory Value: $" + totalValue);
