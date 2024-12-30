"use strict";
/*
! 1. Discriminated Unions (Tagged Unions)
A discriminated union (also known as a tagged union or sum type) is a TypeScript feature where a single variable can hold different types, but each type is "tagged" with a unique literal value or property. This allows TypeScript to safely narrow down the type based on that "tag," enabling type safety when working with union types.

Discriminated unions are extremely useful when working with multiple types that share a common structure, but each type can have distinct behavior based on a discriminant property.

* How Discriminated Unions Work
Discriminated: A type that contains a field (called a discriminator) with a literal type value that is unique for each member of the union.
Union: The variable can hold one of several types (each having the discriminator).
*/
/*
! 2. Exhaustiveness Checking
Exhaustiveness checking ensures that all possible cases of a discriminated union are handled in your code. It helps catch errors when adding new members to a discriminated union, ensuring that your code properly handles the new cases.

In TypeScript, exhaustiveness checking is often done by using a never return type inside a switch statement or if block to ensure all cases are covered. If a new case is added to the union, TypeScript will raise an error if it’s not handled in the function.

* How Exhaustiveness Checking Works
In a switch statement: TypeScript can ensure that all the cases are handled.
With a never type: If you include a never type in a case where TypeScript cannot narrow down the type, it will alert you if any type is missing from the union.
*/
function getTrueShape(shape) {
    if (shape.kind === "circle")
        return Math.PI * shape.radius ** 2;
    return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        // case "rectangle":
        //   return shape.lenth * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
