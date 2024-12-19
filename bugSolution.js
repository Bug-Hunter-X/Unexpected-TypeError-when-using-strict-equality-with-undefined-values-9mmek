function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; 
  }
  return a + b;
}

//Alternative robust solution using optional chaining
function foo(a, b) {
  return a != null && b != null ? a + b : null;
} 