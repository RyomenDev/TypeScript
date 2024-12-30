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
