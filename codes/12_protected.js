"use strict";
class User12 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this._courseCount2 = 1;
        this.city = "jaipur";
    }
    deleleToken() {
        // private method
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        // nothing in return type
        if (courseNum <= 1)
            throw new Error("should be >=1");
        this._courseCount = courseNum;
    }
}
class SubUser12 extends User12 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    chabgeCourseCount() {
        this._courseCount2 = 5;
    }
}
const user12A = new User12("abc@.com", "abc", "123");
// user11A.deleleToken(); private not accessible
