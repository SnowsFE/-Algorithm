// 실버 3 - 소수 구하기 (단일 함수 버전)
function boj_1929(M, N) {
  let result = [];

  for (let num = M; num <= N; num++) {
    if (num < 2) continue;

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) result.push(num);
  }

  return result;
}

// 3부터 16까지의 소수 출력
console.log(boj_1929(3, 16));

// 실버 3 - 소수 구하기 (에라토스테네스의 체 알고리즘 활용)
function boj_1929_era(M, N) {
  // N까지의 소수 여부를 저장할 배열 생성, true로 초기화
  let isPrime = Array(N + 1).fill(true);

  // 0과 1은 소수가 아니므로 false 처리
  isPrime[0] = isPrime[1] = false;

  // 2부터 √N까지 반복
  for (let i = 2; i * i <= N; i++) {
    if (isPrime[i]) {
      // i가 소수라면, i의 배수들은 모두 소수가 아니므로 false 처리
      // i*i부터 시작하는 이유는 그보다 작은 배수는 이전 반복에서 이미 처리됨
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
        // 예: i = 2일 때 j = 4,6,8,... / i = 3일 때 j = 9,12,15,...
        // 따라서 4, 6, 8, 9, 10, 12 등은 소수가 아니라고 표시됨
      }
    }
  }

  // M 이상 N 이하 범위에서 소수만 결과 배열에 담기
  let result = [];
  for (let i = M; i <= N; i++) {
    if (isPrime[i]) result.push(i); // 소수인 경우에만 추가
  }

  return result;
}

// 3부터 16까지의 소수 출력
console.log(boj_1929_era(3, 16));
