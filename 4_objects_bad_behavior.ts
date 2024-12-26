const user = {
  name: "Akash",
  email: "xyz@gmail.com",
  isActive: true,
};

function createUser1({ name: string, isPaid: boolean });

createUser1({ name: "Ben", isPaid: false });


function funreturningObject1(){}{
    return {};
}
function funreturningObject2(){name:string,price:number}{
    return {name:"abc",price:120};
}


// bad behavior
function createUser2({ name: string, isPaid: boolean });

// createUser2({ name: "Ben", isPaid: false,email:"abc@.com" }); // error
let user1 ={ name: "Ben", isPaid: false,email:"abc@.com" };
createUser2(user1) // no error -> bad behavior

export {};
