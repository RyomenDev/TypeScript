"use strict";
// if abstarct is used no object can be craeated by it
// resposibilty of class that extends it to create the class
class TakePhoto14 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getRealTime() {
        return 8;
    }
}
// const user14 = new TakePhoto14("test1", "test2"); error
class Instagram14 extends TakePhoto14 {
    // Constructor to initialize properties for TakePhoto interface
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
// Creating an instance of Instagram class
const myInstagram14 = new Instagram14("Portrait", "Vintage", 3);
console.log(myInstagram14.getRealTime());
