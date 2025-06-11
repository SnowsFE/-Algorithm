function runStackCommands(commands) {
  const stack = [];
  const result = [];

  commands.forEach((line) => {
    const [cmd, value] = line.split(" ");

    switch (cmd) {
      case "push":
        stack.push(Number(value));
        break;
      case "pop":
        result.push(stack.length ? stack.pop() : -1);
        break;
      case "size":
        result.push(stack.length);
        break;
      case "empty":
        result.push(stack.length ? 0 : 1);
        break;
      case "top":
        result.push(stack.length ? stack[stack.length - 1] : -1);
        break;
    }
  });

  return result;
}

const input = ["push 14", "pop", "size", "empty", "top"];

const output = runStackCommands(input);
console.log(output.join("\n"));
