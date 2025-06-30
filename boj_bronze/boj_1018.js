function boj_1018(board) {
  const N = board.length;
  const M = board[0].length;
  let minPaint = Infinity;

  for (let y = 0; y <= N - 8; y++) {
    for (let x = 0; x <= M - 8; x++) {
      let countW = 0; // 시작이 W
      let countB = 0; // 시작이 B

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          // (y+i, x+j) 좌표의 실제 색
          let current = board[y + i][x + j];

          // (i + j) 합이 짝수이면 시작 색과 같아야 함
          if ((i + j) % 2 === 0) {
            if (current !== "W") countW++;
            if (current !== "B") countB++;
          } else {
            if (current !== "B") countW++;
            if (current !== "W") countB++;
          }
        }
      }
      let currentMin = Math.min(countW, countB);
      minPaint = Math.min(minPaint, currentMin);
    }
  }

  return minPaint;
}

// 예제 입력
console.log(
  boj_1018([
    "BBBBBBBBBWBWBW",
    "BBBBBBBBBBWBWB",
    "BBBBBBBBBWBWBW",
    "BBBBBBBBBBWBWB",
    "BBBBBBBBBWBWBW",
    "BBBBBBBBBBWBWB",
    "BBBBBBBBBWBWBW",
    "BBBBBBBBBBWBWB",
    "WWWWWWWWWWBWB",
    "WWWWWWWWWWBWB",
  ])
);
// 출력: 12
