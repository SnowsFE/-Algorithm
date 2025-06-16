function boj_1157(input) {
  const str = input.toUpperCase();
  const result = {};

  // 빈도 세기
  for (let char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  let maxCount = 0;
  let maxChars = [];

  // 최댓값 찾기
  for (let key in result) {
    if (result[key] > maxCount) {
      maxCount = result[key];
      maxChars = [key];
    } else if (result[key] === maxCount) {
      maxChars.push(key);
    }
  }

  // 출력
  console.log(maxChars.length > 1 ? "?" : maxChars[0]);
}

boj_1157("Mississipi");
boj_1157("zZa");
