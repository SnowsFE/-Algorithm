function isValidParentheses(s) {
  let stack = [];

  for (let add of s) {
    if (add === "(") {
      stack.push(add);
    } else if (add === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(isValidParentheses("()("));
console.log(isValidParentheses(")("));
console.log(isValidParentheses(")()"));
console.log(isValidParentheses("(())"));
