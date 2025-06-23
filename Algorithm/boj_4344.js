// 백준 4344번: 평균은 넘겠지 - [브론즈 1] .. 틀린 코드
function boj_4344(Num, ...arr) {
  if (arr.length === 0) return 0;
  let avg = arr.reduce((arr, cur) => arr + cur, 0) / arr.length;
  let result = arr.filter((item) => item >= avg);

  let ending = (result.length / Num) * 100;
  ending.toFixed(4);

  console.log(parseInt(ending));
}

boj_4344(5, [
  [5, 50, 50, 70, 80, 100],
  [7, 100, 95, 90, 80, 70, 60, 50],
  [3, 70, 90, 80],
  [3, 70, 90, 81],
  [9, 100, 99, 98, 97, 96, 95, 94, 93, 91],
]);

// 백준 4344번: 평균은 넘겠지 - [브론즈 1]
function boj_4344(testCases) {
  testCases.forEach((caseArr) => {
    const [n, ...scores] = caseArr;
    const avg = scores.reduce((sum, score) => sum + score, 0) / n;
    const overAvg = scores.filter((score) => score > avg).length;
    const percentage = ((overAvg / n) * 100).toFixed(3);

    console.log(`${percentage}%`);
  });
}

boj_4344([
  [5, 50, 50, 70, 80, 100],
  [7, 100, 95, 90, 80, 70, 60, 50],
  [3, 70, 90, 80],
  [3, 70, 90, 81],
  [9, 100, 99, 98, 97, 96, 95, 94, 93, 91],
]);
