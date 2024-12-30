"use strict";
/*
! What are Generics?
    Generics are a way to create reusable and flexible components in TypeScript.
    They allow you to define a function, class, or interface that works with various types without losing type safety.
    A generic type is specified using a type variable, typically denoted as <T> or any other name.
! Key Advantages of Generics
    * Type Safety:
    Ensures that the data type is consistent and prevents type errors at compile time.
    * Reusability:
    Allows the creation of flexible and reusable code components.
    * Abstraction:
    Eliminates the need to rewrite similar code for different data types.
    * Code Clarity:
    Makes the intent of the code clear by explicitly defining the type.
! Common Use Cases
    Generic Functions
    Generic Classes
    Generic Interfaces
    Generic Constraints (to restrict the types allowed for a generic type variable)
*/
// Generic function using type variable `<Type>`
function identity15(arg) {
    return arg;
}
// Generic function with shorthand type variable `<T>`
function identity15B(arg) {
    return arg;
}
// Using the generic function `identity15` with a specific type
let output14 = identity15("mystring"); // Explicitly specifying type as string
console.log(output14); // Logs "mystring"
// Generic array of numbers
const score14 = []; // Equivalent to `number[]` but uses generic syntax
// Using generic function `identity15B` with `Bottle14` type
identity15B({ brand: "abc", type: 3 });
// ---------
// Generic function using a named function syntax
function gerercs15A(products) {
    // Perform some operations if necessary
    return products[3]; // Returns the element at index 3
}
// Generic function using an arrow function with explicit return type
const gerercs15B = (products) => {
    return products[3]; // Returns the element at index 3
};
// Generic function with <T,> syntax to separate it from JSX tags
const gerercs15C = (products) => {
    // Perform some operations if necessary
    return products[3]; // Returns the element at index 3
};
