/*
! Interface Class:
An interface class is not a separate concept, but when we say "interface class," we may be referring to a class that implements an interface. The class must implement the structure specified by the interface.

A class that implements an interface is required to provide concrete implementations for all the methods and properties defined in the interface.

! Key Differences:
* Interface:
Only defines the structure of an object (properties and methods) but doesn’t provide any implementation.
* Class:
Defines both the structure (like an interface) and the implementation (methods and logic).
* When using class and interface together, interfaces provide a way to enforce that a class adheres to a certain structure, but the class provides the actual functionality.
*/

// Interface defining the photo settings
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

// Interface defining the story feature
interface Story {
  createStory(): void;
}

// Class implementing both the TakePhoto and Story interfaces
class Instagram implements TakePhoto, Story {
  // Constructor to initialize properties for TakePhoto interface
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  // Implementing createStory method from the Story interface
  createStory(): void {
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
