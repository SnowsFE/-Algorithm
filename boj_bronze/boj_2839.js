function boj_2839(kg) {
  if (kg < 3 || kg > 5000) {
    return console.log(`범위에서 벗어난 수: ${-1}`);
  }

  // 5kg 봉지를 최대한 많이 사용하는 경우부터 시작
  for (let i = Math.floor(kg / 5); i >= 0; i--) {
    let remaining = kg - i * 5; // 5kg 봉지 i개 사용 후 남은 무게

    // 남은 무게가 3kg 봉지로 정확히 나누어 떨어지면
    if (remaining % 3 === 0) {
      let count = i + remaining / 3; // 5kg 봉지 + 3kg 봉지 개수
      return console.log(`봉지의 최소 개수: ${count}`);
    }
  }

  // 어떤 조합으로도 정확히 만들 수 없는 경우
  console.log(`조건에 맞지 않는 수: ${-1}`);
}

// 테스트
console.log("=== 테스트 결과 ===");
boj_2839(2); // -1 (만들 수 없음)
boj_2839(3); // 1 (3kg 1개)
boj_2839(4); // -1 (만들 수 없음)
boj_2839(5); // 1 (5kg 1개)
boj_2839(6); // 2 (3kg 2개)
boj_2839(7); // -1 (만들 수 없음)
boj_2839(8); // 2 (5kg 1개 + 3kg 1개)
boj_2839(9); // 3 (3kg 3개)
boj_2839(10); // 2 (5kg 2개)
boj_2839(11); // 3 (5kg 1개 + 3kg 2개)
boj_2839(12); // 4 (3kg 4개)
boj_2839(13); // 3 (5kg 2개 + 3kg 1개)
boj_2839(14); // 4 (5kg 1개 + 3kg 3개)
boj_2839(15); // 3 (5kg 3개)
boj_2839(18); // 4 (5kg 3개 + 3kg 1개)
boj_2839(255); // 51 (5kg 51개)
