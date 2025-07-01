// 수 N개가 주어진다.
// 이 수들을 정렬했을 때, 각 수를 몇 번째로 작은 수인지(0부터 시작하는 순위)로 바꾸는 작업을 좌표 압축이라고 한다.
// 주어진 수들을 좌표 압축하여 출력하라.

// 내 풀이
function boj_18870(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

// 참고 풀이
function boj_18870(arr) {
  const sorted = [...new Set(arr)].sort((a, b) => a - b);
  const map = new Map();

  sorted.forEach((value, index) => {
    map.set(value, index);
  });

  return arr.map((num) => map.get(num));
}

console.table(boj_18870([2, 4, -10, 4, -9]));
