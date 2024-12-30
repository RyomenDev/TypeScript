"use strict";
/*
! What is a Generic Class?
A generic class is a class that can work with any data type (or multiple types) while preserving type safety.
It allows you to define a class with type parameters, so that the class can be used with different types of data without sacrificing type checking.
Generics in classes provide flexibility, ensuring that operations performed within the class maintain consistency in terms of types.
! Why Use Generics in Classes?
* Reusability:
A single class can work with different data types, reducing code duplication.
* Type Safety:
Ensures that only the expected types are used within the class.
* Flexibility:
Allows the class to operate on various types while maintaining specific behaviors and constraints.
* Avoids Casting:
You don’t need to cast objects to a certain type since the class automatically knows the type.
*/
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
// Define a generic class
class Box {
    constructor(value) {
        this.value = value;
    }
    // Method to get the value
    getValue() {
        return this.value;
    }
    // Method to set the value
    setValue(value) {
        this.value = value;
    }
}
// Create instances of the Box class with different types
const numberBox = new Box(10); // Type is number
const stringBox = new Box("Hello, World!"); // Type is string
console.log(numberBox.getValue()); // Output: 10
numberBox.setValue(20);
console.log(numberBox.getValue()); // Output: 20
console.log(stringBox.getValue()); // Output: Hello, World!
stringBox.setValue("New Value");
console.log(stringBox.getValue()); // Output: New Value
