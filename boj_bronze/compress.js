function minusCompress(str) {
  let string = "";
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      string += str[i - 1];
      if (count > 1) string += count;
      count = 1;
    }
  }

  string += str[str.length - 1];
  if (count > 1) string += count;

  return string;
}

console.log(minusCompress("aaabbccc"));

function plusCompress(str) {
  let string = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      string += str[i];
      if (count > 1) string += count;
      count = 1;
    }
  }

  return string;
}

console.log(plusCompress("aaabbccc"));
