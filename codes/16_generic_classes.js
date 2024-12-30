"use strict";
// Function 16A: Accepts two parameters of generic types T and U
function func16A(val1, val2) {
    return {
        val1,
        val2,
    };
}
// Function 16B: Adds a constraint on U to ensure it extends `number`
function func16B(val1, val2) {
    return {
        val1,
        val2,
    };
}
// Function 16C: Adds a constraint on U to ensure it extends `Database`
function func16C(val1, val2) {
    return {
        val1,
        val2,
    };
}
// This will cause a TypeScript error because the second argument does not meet the Database constraints
// func16C(3, {}); // Uncommenting this will result in an error
// Correct example for 16C
func16C(3, { connection: "localhost", key: 123 });
// A generic class representing sellable items
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
// Example usage of Sellable class
const quizCart = new Sellable();
quizCart.addToCart({ name: "TypeScript Basics" });
const courseCart = new Sellable();
courseCart.addToCart({ name: "TypeScript Advanced", subject: "Programming" });
