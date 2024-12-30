"use strict";
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
