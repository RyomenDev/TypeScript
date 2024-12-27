// when not sure of data type

let score1: number | string;
let score2: number | string | boolean;

score1 = 44;
score1 = "44";

type User7A = {
  name: string;
  id: number;
};
type Admin7A = {
  userName: string;
  id: number;
};

let registerUser: User7A | Admin7A = { name: "abc", id: 12 };
registerUser = { userName: "abc", id: 12 };

function getId(id: number | string) {
  //  problem when use string property on number or vice-versa
  // verify using if-else
}
getId(3);
getId("3");

const data7A: number[] = [1, 2, 3]; // array
// const data:string[]|number[]=[1,"2",3]; // wrong-error
const data7B: (string | number)[] = [1, "2", 3];

let pi: 3.14 = 3.14;
// pi=2; error

let seat: "1" | "2" | "3"; // like enum
