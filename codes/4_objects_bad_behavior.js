"use strict";
const user4A = {
    name: "Akash",
    email: "xyz@gmail.com",
    isActive: true,
};
// Correct function definition with destructuring and proper type annotations
function createUser1({ name, isPaid }) {
    console.log(name, isPaid);
}
// Function call with correct argument matching the expected type
createUser1({ name: "Ben", isPaid: false });
function funReturningObject1() {
    return {};
}
function funReturningObject2() {
    return { name: "abc", price: 120 };
}
// bad behavior
function createUser2({ name, isPaid }) {
    console.log(name, isPaid);
}
// createUser2({ name: "Ben", isPaid: false,email:"abc@.com" }); // error
let user1 = { name: "Ben", isPaid: false, email: "abc@.com" };
createUser2(user1); // no error -> bad behavior
