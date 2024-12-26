/*
! interface and type are mostly similar - almost all feature of interface are available in type
* key distinction - type cannot be re-openned to add new properties vs an interface is always extendable 
*/

interface User {
  readonly _id: number;
  email: string;
  userId: number;
  googleId?: string;
}

// re-opening of interface
interface User {
  gitHubToken: string;
}

const user1: User = {
  _id: 12,
  email: "Ab@.com",
  userId: 2211,
  gitHubToken: "Abcde",
};

interface Admin extends User {
  // inherit User
  role: "admin" | "ta" | "learner";
}
