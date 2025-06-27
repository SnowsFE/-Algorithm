function boj_4796(L, P, V) {
  const Vacation = { L, P, V };
  let day = 0;

  // 전체 기간을 P일씩 나누어 반복 (정확히 나누어 떨어지지 않으면 나머지는 따로 처리)
  const fullPeriods = Math.floor(Vacation.V / Vacation.P);
  const remainder = Vacation.V % Vacation.P;

  // 각 주기당 사용할 수 있는 날짜를 더함
  for (let i = 0; i < fullPeriods; i++) {
    day += Vacation.L;
  }

  // 남은 날이 있다면 L일 또는 남은 날 중 작은 값 더함
  day += Math.min(remainder, Vacation.L);

  console.log(`휴가 사용 가능일 : ${day}`);
}

function boj_4796(L, P, V) {
  const fullPeriods = Math.floor(V / P);
  const remainder = V % P;

  const result = fullPeriods * L + Math.min(remainder, L);
  console.log(`휴가 사용 가능일 : ${result}`);
}

boj_4796(5, 8, 20); // → 14
boj_4796(5, 8, 22); // → 15
boj_4796(3, 5, 12); // → 9
boj_4796(2, 7, 18); // → 6
boj_4796(7, 8, 17); // → 15
