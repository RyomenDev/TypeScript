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
