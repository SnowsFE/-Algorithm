// 내 풀이
function boj_10815(mNum, hasNum) {
  const result = [];
  hasNum.forEach((item) => {
    if (mNum.includes(item)) {
      result.push(1);
    } else {
      result.push(0);
    }
  });

  return result.join(" ");
}

console.table(boj_10815([6, 3, 2, 10, -10], [10, 9, -5, 2, 3, 4, 5, -10, 10]));

// Set 풀이
function boj_10815(mNum, hasNum) {
  const set = new Set(mNum);
  const result = [];

  hasNum.forEach((item) => {
    result.push(set.has(item) ? 1 : 0);
  });

  return result.join(" ");
}

console.table(boj_10815([6, 3, 2, 10, -10], [10, 9, -5, 2, 3, 4, 5, -10, 10]));

// Map 풀이
function boj_10815(mNum, hasNum) {
  const map = new Map();
  mNum.forEach((num) => map.set(num, true));

  return hasNum.map((num) => (map.has(num) ? 1 : 0)).join(" ");
}

console.table(boj_10815([6, 3, 2, 10, -10], [10, 9, -5, 2, 3, 4, 5, -10, 10]));
