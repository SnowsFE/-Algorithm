function boj_1316(input) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    let word = input[i];
    let visited = [];
    let isGroupWord = true;

    for (let j = 0; j < word.length; j++) {
      if (word[j] !== word[j - 1]) {
        if (visited.includes(word[j])) {
          isGroupWord = false;
          break;
        }
        visited.push(word[j]);
      }
    }

    if (isGroupWord) {
      count++;
    }
  }

  return count;
}

// 예제 테스트
console.log(boj_1316(["happy", "new", "year"]));
console.log(boj_1316(["aba", "abab", "abcabc", "a"]));
