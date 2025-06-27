function boj_1032(files) {
  let result = "";

  for (let i = 0; i < files[0].length; i++) {
    let char = files[0][i];
    let same = true;

    for (let j = 1; j < files.length; j++) {
      if (files[j][i] !== char) {
        same = false;
        break;
      }
    }

    result += same ? char : "?";
  }

  return result;
}

console.log(boj_1032(["config.sys", "config.inf", "config.nfo"]));
// "config.???"

console.log(boj_1032(["abc", "acc", "adc"]));
// "a?c"

console.log(boj_1032(["hello", "hello", "hello"]));
// "hello"
