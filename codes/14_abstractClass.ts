// if abstarct is used no object can be craeated by it
// resposibilty of class that extends it to create the class

abstract class TakePhoto14 {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void; // mo need of definition for abstract but need to be defined in extending class
  getRealTime(): number {
    return 8;
  }
}

// const user14 = new TakePhoto14("test1", "test2"); error

class Instagram14 extends TakePhoto14 {
  // Constructor to initialize properties for TakePhoto interface
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("sepia");
  }
}

// Creating an instance of Instagram class
const myInstagram14 = new Instagram14("Portrait", "Vintage", 3);

console.log(myInstagram14.getRealTime());
