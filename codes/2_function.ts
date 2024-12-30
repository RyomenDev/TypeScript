function add(num: string) {
  return num + 4; // Concatenates string and number
}

// let add1 = add(6); // ❌ Error: Argument must be a string

function fun1(name: string, isPaid: boolean = false) {
  return true; // Returns true
}

// fun1("abc", "asa"); // ❌ Error: 'asa' is not a boolean
fun1("abc"); // ✅ Valid, uses default value for 'isPaid'
