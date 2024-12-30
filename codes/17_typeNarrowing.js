"use strict";
/*
! What is Type Narrowing?
Type narrowing in TypeScript refers to the process of refining the type of a variable from a broader type to a more specific type. This is useful when working with union types, type guards, or conditional logic to narrow down the type of a variable so that TypeScript can infer more accurate and specific behavior.

Type narrowing allows you to write more type-safe code by providing TypeScript with additional information about a variable's type at runtime, ensuring that you only use properties or methods that are available on the specific type.

! How Does Type Narrowing Work?
TypeScript has several mechanisms to narrow types:

Using typeof Operator (Primitive Types)
Using instanceof Operator (Object Types)
Custom Type Guards (User-Defined Functions)
Control Flow Analysis (Conditional Statements)

*/
// ARRAY 0F INTEGERS - object
// null - object , etc
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(Id) {
    if (!Id) {
        console.log("please provide ID");
        return;
    }
    return Id;
}
function printAll(str) {
    if (str) {
        if (typeof str === "object") {
            for (const s of str)
                console.log(s);
        }
        else if (typeof str === "string")
            console.log(str);
    }
}
