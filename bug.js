function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause an error if a and b are undefined
  }
  return a + b;
}