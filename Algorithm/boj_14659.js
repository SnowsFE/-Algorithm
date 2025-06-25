function boj_14659(N) {
  const result = [];
  let count = 0;

  for (let i = 0; i < N.length - 1; i++) {
    if (N[i] >= N[i + 1]) {
      count++; // 낮은 봉우리 처치
    } else {
      result.push(count); // 높은 봉우리 만나면 저장하고
      count = 0; // 카운트 초기화
    }
  }
  result.push(count); // 마지막 처리도 저장

  return console.log(Math.max(...result));
}

boj_14659([9, 5, 4, 3, 10, 8, 7, 6, 2, 1]);
