class User10_1 {
  email: string;
  name: string;
  private readonly city: string = "jaipur";
  //   #name2:string; // private too
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

class User10_2 {
  readonly city: string = "jaipur";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}
}
