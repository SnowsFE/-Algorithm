function boj_10989(numbers) {
  if (numbers.every((n) => n >= 1 && n <= 10000)) {
    let max = Math.max(...numbers);
    let arrayList = Array(max + 1).fill(0);
    const result = [];

    for (let num of numbers) {
      arrayList[num]++;
    }

    for (let i = 0; i < arrayList.length; i++) {
      for (let j = 0; j < arrayList[i]; j++) {
        result.push(i);
      }
    }
    return result;
  } else {
    return `범위 이탈`;
  }
}

console.log(boj_10989([5, 2, 3, 4, 1])); // [1, 2, 3, 4, 5]
console.log(boj_10989([1, 2, 2, 1])); // [1, 1, 2, 2]
console.log(boj_10989([10000, 9999, 1])); // [1, 9999, 10000]
