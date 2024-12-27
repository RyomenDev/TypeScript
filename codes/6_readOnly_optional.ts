type User6A = {
  readonly _id: string;
  name: string;
  isActive: boolean;
  creditCard?: number; // optional
};

let myUser: User6A = {
  _id: "1",
  name: "ABC",
  isActive: false,
};

myUser.name = "XYZ";
console.log(myUser);

// myUser._id="2" // error

// ---------------------------------

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
