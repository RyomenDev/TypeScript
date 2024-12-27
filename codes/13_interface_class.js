"use strict";
// Class implementing both the TakePhoto and Story interfaces
class Instagram {
    // Constructor to initialize properties for TakePhoto interface
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // Implementing createStory method from the Story interface
    createStory() {
        console.log("Story created with filter: " + this.filter);
    }
}
// Creating an instance of Instagram class
const myInstagram = new Instagram("Portrait", "Vintage", 3);
// Using the class methods and properties
console.log(myInstagram.cameraMode); // Portrait
console.log(myInstagram.filter); // Vintage
console.log(myInstagram.burst); // 3
// Calling the createStory method
myInstagram.createStory(); // Story created with filter: Vintage
