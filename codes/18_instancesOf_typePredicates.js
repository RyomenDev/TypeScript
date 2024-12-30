"use strict";
/*
! 1. instanceof Operator
The instanceof operator in TypeScript (and JavaScript) is used to check if an object is an instance of a specific class or constructor function. It performs runtime type checking, allowing you to determine if an object is of a particular class or subclass.

In TypeScript, instanceof can also be used in type narrowing. When combined with instanceof, TypeScript can infer more specific types, narrowing the type of the object from a broader union type to a more specific type.

! 2. Type Predicates
Type predicates are a TypeScript feature that allows you to define a custom function that narrows down the type of a variable. They are used in user-defined type guards and are written in the form of parameter is Type.

A type predicate tells TypeScript that a given function will determine whether a variable is of a certain type, thus enabling type narrowing. This is especially useful when working with union types or when you need to perform custom checks on a variable to ensure it conforms to a specific type.
*/
// narrowing
// useful foe valyes constructed with new keyword
// new Array
// new Date()
function lagValue(x) {
    if (x instanceof Date)
        console.log(x.toUTCString());
    else
        console.log(x.toUpperCase());
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
