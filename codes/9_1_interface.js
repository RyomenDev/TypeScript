"use strict";
/*
! What is an Interface?
* An interface in TypeScript defines the shape of an object.
* It specifies the structure, types of properties, and the methods an object should have.
* Interfaces provide type-checking and ensure consistency in object structure.
*/
const user9A = {
    _id: 12, // Immutable property
    email: "Ab@.com",
    userId: 2211,
    startTrail: () => {
        return "trail started"; // Implementation of the startTrail method
    },
    getCoupon: (name, off) => {
        return 10; // Implementation of the getCoupon method
    },
};
