// 숫자 배열이 주어졌을 때, 가장 많이 등장한 요소를 찾아 반환하세요.
// 등장 횟수가 동일한 값이 여러 개라면 배열로 모두 반환하세요.

function findMostFrequent(numList) {
  const count = numList.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(count));

  const result = Object.keys(count)
    .filter((key) => count[key] === maxCount)
    .map(Number); // 키가 문자열이므로 숫자로 변환

  return result.length === 1 ? result[0] : result;
}

console.log(findMostFrequent([1, 2, 2, 3, 3, 3, 4]));
// → 3

console.log(findMostFrequent([7, 7, 8, 8, 9]));
// → [7, 8]

console.log(findMostFrequent([5, 5, 5, 5]));
// → 5
