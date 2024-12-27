class User11 {
  private _courseCount = 1;
  readonly city: string = "jaipur";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}
  private deleleToken() {
    // private method
    console.log("token deleted");
  }
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum) {
    // nothing in return type
    if (courseNum <= 1) throw new Error("should be >=1");
    this._courseCount = courseNum;
  }
}

const user11A = new User11("abc@.com", "abc", "123");
// user11A.deleleToken(); private not accessible
