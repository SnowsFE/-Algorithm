function boj_2775(k, n) {
  // 백준 2775번: 부녀회장이 될테야
  // 브론즈 1 난이도

  // 문제: k층 n호에 살려면 아래층(k-1층) 1호부터 n호까지
  // 사람들의 수의 합만큼 데려와 살아야 한다.
  // 0층의 i호에는 i명이 산다.

  // dp[층][호] = 사람 수
  const dp = Array(k + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  // 0층 초기화: i호에 i명 거주
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  console.log(`이것은 dp 입니다 : ${dp}`);
  // k층까지 계산
  for (let floor = 1; floor <= k; floor++) {
    for (let room = 1; room <= n; room++) {
      // k층 n호 = (k-1)층 1호부터 n호까지의 합
      for (let prev = 1; prev <= room; prev++) {
        dp[floor][room] += dp[floor - 1][prev];
      }
    }
  }

  return dp[k][n];
}

// 테스트 케이스
console.log("=== 테스트 케이스 ===");
console.log(`boj_2775(1, 3) = ${boj_2775(1, 3)}`); // 예상: 6
console.log(`boj_2775(2, 3) = ${boj_2775(2, 3)}`); // 예상: 10
console.log(`boj_2775(0, 5) = ${boj_2775(0, 5)}`); // 예상: 5

console.log("\n=== 아파트 구조 예시 ===");
console.log("2층: 1명  4명  10명  20명");
console.log("1층: 1명  3명   6명  10명");
console.log("0층: 1명  2명   3명   4명");
