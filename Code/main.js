"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = 'Welcome back!';
console.log(message);
// Variable Declaration
let x = 10;
const y = 20;
let sum;
const title = 'newTitle';
// Basic Variable Types
let isBeginner = true;
let total = 0;
let name = 'anyString';
let sentence = `My name is ${name}
I am a beginner in TypeScript`;
console.log(sentence);
// Sub types
let n = null;
let u = undefined;
// let isNew: boolean = null; // Type 'null' is not assignable to type 'boolean'
// let myName: string = undefined; // Type 'undefined' is not assignable to type 'string'.
// Array type
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
// Tuple type
let person1 = ['Chris', 22];
// Enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
// Any type
let randomValue = 10;
randomValue = true;
randomValue = 'randomString';
// Unknown type
let myVariable = 10;
console.log(myVariable.name.firstName);
myVariable();
myVariable.toUpperCase();
// Type inference
let a;
a = 10;
a = true;
let b = 10;
// Union Types
let multiType;
multiType = 20;
multiType = true;
let anyType;
anyType = 20;
anyType = true;
// Functions
function add(num1, num2 = 10) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
}
let p = {
    firstName: 'Bruce'
};
fullName(p);
// Classes
class Employee {
    constructor(name) {
        this.employeeName = name;
    }
    greet() {
        console.log('Good morning ' + this.employeeName);
    }
}
let emp1 = new Employee('keven');
console.log(emp1.employeeName);
emp1.greet();
class Manager extends Employee {
    constructor(managerName) {
        super(managerName);
    }
    delegateWork() {
        console.log('Manager delgating tasks' + this.employeeName);
    }
}
let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
