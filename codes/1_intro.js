"use strict";
// tsc .\1_intro.ts
console.log("Akash Mishra");
let user = { name: "Akash", age: "21" };
console.log(user.name);
// console.log(user.email);
// https://www.typescriptlang.org/play
let greeting = "xyz";
greeting = "abc"; // ✅ Valid
// greeting = 58;  // ❌ Error
let num1 = 56; // TypeScript infers 'number'
num1 = 78; // ✅ Valid
// num1 = "text"; // ❌ Error
