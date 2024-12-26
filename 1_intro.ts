// tsc .\1_intro.ts
console.log("Akash Mishra");

let user = { name: "Akash", age: "21" };

console.log(user.name);
// console.log(user.email);

// https://www.typescriptlang.org/play

let greeting: string = "xyz";
greeting = "abc";
// greeting = 58; // wrong

let num1 = 56; // auto type inference

export {}