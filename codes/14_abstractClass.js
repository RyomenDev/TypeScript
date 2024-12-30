"use strict";
// if abstarct is used no object can be craeated by it
// resposibilty of class that extends it to create the class
/*
 An abstract class in TypeScript (and other object-oriented programming languages) is a class that cannot be instantiated directly. It serves as a base class for other classes to extend and provides a blueprint for subclasses. An abstract class can contain both abstract methods (which must be implemented by subclasses) and concrete methods (with actual implementation).

 abstract class Animal {
    abstract sound(): void; // Abstract method that must be implemented in subclasses

    move(): void {
        console.log("This animal is moving");
    }
}

class Dog extends Animal {
    sound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    sound(): void {
        console.log("Meow!");
    }
}

const dog = new Dog();
dog.sound();  // Output: Woof! Woof!
dog.move();   // Output: This animal is moving

const cat = new Cat();
cat.sound();  // Output: Meow!
cat.move();   // Output: This animal is moving


* Abstract Methods:
The sound() method in the Animal class is abstract. This means that every subclass (like Dog and Cat) must provide an implementation for the sound() method.
Definition: An abstract method is a method that is declared in an abstract class but does not have any implementation in the abstract class itself. It only provides the method signature (the method name, parameters, and return type). The implementation of the abstract method is left to be defined by the subclasses (or derived classes).
Purpose: Abstract methods enforce a contract for subclasses. Any subclass of an abstract class must provide an implementation for all abstract methods declared in the abstract class.
* Concrete Methods:
The move() method is implemented in the Animal class and can be used as-is by any subclass, unless they choose to override it.
Definition: A concrete method is a method that is fully implemented in a class, including the actual logic and behavior of the method. It is a regular method that can be inherited by subclasses or overridden if needed.
Purpose: Concrete methods provide the actual behavior and can be used by subclasses without modification, though subclasses can override them if necessary.

! Key Features of an Abstract Class:
Cannot be instantiated directly: You cannot create an object from an abstract class.
Abstract methods: These are methods declared in an abstract class without implementation. Subclasses must implement these methods.
Concrete methods: These are regular methods that provide a default implementation, and subclasses can either use them as-is or override them.

! Why Use Abstract Classes?
Enforcing a contract: Abstract classes ensure that certain methods are implemented by the subclasses, enforcing consistency across different classes.
Code Reusability: Abstract classes allow shared behavior (like the move() method) to be implemented once, avoiding code duplication across subclasses.
Partial Implementation: They allow partial implementation. Some methods can be implemented in the abstract class, while others can be left for subclasses to define.

! Abstract Class vs Interface:
Abstract class:
Can have both abstract methods and concrete methods.
Can hold state (properties with values).
A class can inherit only one abstract class (since TypeScript supports single inheritance).
Interface:
Only defines the structure (properties and methods) but cannot provide implementation.
A class can implement multiple interfaces (since TypeScript supports multiple interface inheritance).
*/
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
