function identity15<Type>(arg: Type): Type {
  return arg;
}
function identity15B<T>(arg: T): T {
  return arg;
}

let output14 = identity15<string>("mystring");
console.log(output14);

const score14: Array<number> = [];

interface Bottle14 {
  brand: string;
  type: number;
}

identity15B<Bottle14>({ brand: "abc", type: 3 });

// ---------

// Generic function using a named function syntax
function gerercs15A<T>(products: T[]): T {
  // Perform some operations if necessary
  return products[3]; // Returns the element at index 3
}

// Generic function using an arrow function with explicit return type
const gerercs15B = <T>(products: T[]): T => {
  return products[3]; // Returns the element at index 3
};

// Generic function with <T,> syntax to separate it from JSX tags
const gerercs15C = <T>(products: T[]): T => {
  // Perform some operations if necessary
  return products[3]; // Returns the element at index 3
};
