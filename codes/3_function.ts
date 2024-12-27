const ArrorFunc = (s: string): string => {
  return "";
};

const heros1 = ["thor", "spiderman"];
heros1.map((hero) => {
  // TypeScript infers the type of `hero` as string
  return `hero is ${hero}`; // hero is a string, so no issues
});

heros1.map((hero): string => {
  // Explicitly declare the return type of the function as string
  return `hero is ${hero}`; // The return type is now strictly a string
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function fail(errMsg: string): never {
  // throw exception or terminate execution
  throw new Error(errMsg);
}
