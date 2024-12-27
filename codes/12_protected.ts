class User12 {
  private _courseCount = 1;
  protected _courseCount2 = 1;
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

class SubUser12 extends User12 {
  isFamily: boolean = true;
  chabgeCourseCount() {
    this._courseCount2 = 5;
  }
}

const user12A = new User12("abc@.com", "abc", "123");
// user11A.deleleToken(); private not accessible
