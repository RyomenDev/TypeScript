
const User:(string | number)[]=[1, "hc"]; // order not matter

// tupple - make sure order of array
let User:[string , number,boolean]; // order matter

User = ["abc",131,true];

type User1=[number, boolean];
let user1A:User1=[1,true];
user1A[1]="abc" // possible to change