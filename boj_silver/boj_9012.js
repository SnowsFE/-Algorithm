function boj_9012(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      result.push(i);
    } else if (str[i] === ")") {
      if (result.length === 0) {
        return false;
      }
      result.pop();
    }
  }

  return result.length === 0;
}

console.log(boj_9012("(())"));
console.log(boj_9012("(()("));
console.log(boj_9012(")()("));
