/*
! What is a Generic Class?
A generic class is a class that can work with any data type (or multiple types) while preserving type safety.
It allows you to define a class with type parameters, so that the class can be used with different types of data without sacrificing type checking.
Generics in classes provide flexibility, ensuring that operations performed within the class maintain consistency in terms of types.
! Why Use Generics in Classes?
* Reusability:
A single class can work with different data types, reducing code duplication.
* Type Safety:
Ensures that only the expected types are used within the class.
* Flexibility:
Allows the class to operate on various types while maintaining specific behaviors and constraints.
* Avoids Casting:
You don’t need to cast objects to a certain type since the class automatically knows the type.
*/

// Function 16A: Accepts two parameters of generic types T and U
function func16A<T, U>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

// Function 16B: Adds a constraint on U to ensure it extends `number`
function func16B<T, U extends number>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

// Interface for a Database structure
interface Database {
  connection: string;
  key: number;
}

// Function 16C: Adds a constraint on U to ensure it extends `Database`
function func16C<T, U extends Database>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

// This will cause a TypeScript error because the second argument does not meet the Database constraints
// func16C(3, {}); // Uncommenting this will result in an error

// Correct example for 16C
func16C(3, { connection: "localhost", key: 123 });

// Interface for a quiz
interface Quiz {
  name: string;
  // Additional properties can be added here
}

// Interface for a course
interface Course {
  name: string;
  subject: string;
  // Additional properties can be added here
}

// A generic class representing sellable items
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T): void {
    this.cart.push(product);
  }
}

// Example usage of Sellable class
const quizCart = new Sellable<Quiz>();
quizCart.addToCart({ name: "TypeScript Basics" });

const courseCart = new Sellable<Course>();
courseCart.addToCart({ name: "TypeScript Advanced", subject: "Programming" });
