function identity15<Type>(arg: Type): Type {
  return arg;
}
function identity15B<T>(arg: T): T {
  return arg;
}

let output14 = identity15<string>("mystring");
console.log(output14);

const score14: Array<number> = [];

interface Bottle14 {
  brand: string;
  type: number;
}

identity15B<Bottle14>({ brand: "abc", type: 3 });
