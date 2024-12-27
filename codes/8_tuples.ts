const User8A: (string | number)[] = [1, "hc"]; // order not matter

// tupple - make sure order of array
let User8B: [string, number, boolean]; // order matter
User8B = ["abc", 131, true];

type User8C = [number, boolean];
let user8C: User8C = [1, true];
// user8C[1] = "abc"; // Error: Type 'string' is not assignable to type 'boolean'.
