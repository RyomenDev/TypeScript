"use strict";
// when not sure of data type
let score1;
let score2;
score1 = 44;
score1 = "44";
let registerUser = { name: "abc", id: 12 };
registerUser = { userName: "abc", id: 12 };
function getId(id) {
    //  problem when use string property on number or vice-versa
    // verify using if-else
}
getId(3);
getId("3");
const data7A = [1, 2, 3]; // array
// const data:string[]|number[]=[1,"2",3]; // wrong-error
const data7B = [1, "2", 3];
let pi = 3.14;
// pi=2; error
let seat; // like enum
