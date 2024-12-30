/*
! What is an Interface?
* An interface in TypeScript defines the shape of an object.
* It specifies the structure, types of properties, and the methods an object should have.
* Interfaces provide type-checking and ensure consistency in object structure.
*/

// Loose form of class
interface User9 {
  readonly _id: number; // Read-only property, cannot be modified after initialization
  email: string; // Mandatory string property
  userId: number; // Mandatory number property
  googleId?: string; // Optional property, can be undefined

  // startTrail=()=>string // Return type
  startTrail(): string; // Method returning a string

  getCoupon(couponName: string, value: number): number; // Method with parameters and return type
}

const user9A: User9 = {
  _id: 12, // Immutable property
  email: "Ab@.com",
  userId: 2211,
  startTrail: () => {
    return "trail started"; // Implementation of the startTrail method
  },
  getCoupon: (name: "abc", off: 10) => {
    return 10; // Implementation of the getCoupon method
  },
};
