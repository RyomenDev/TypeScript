"use strict";
function add(num) {
    return num + 4;
}
// let add1 = add(6);// error
function fun1(name, isPaid = false) {
    // default value
    return true;
}
// fun1("abc","asa")// error
fun1("abc"); // will taje default
