// 쿠 방식
function boj_2164(n) {
  const result = [];

  // 1부터 n까지 초기 배열 생성
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  while (result.length > 1) {
    result.shift(); // 제일 위 카드 버림
    const num = result.shift(); // 다음 제일 위 카드를
    result.push(num); // 맨 아래로 보냄
    console.log(result);
  }

  return result[0];
}

console.log(boj_2164(7)); // 6

// front 방식
function boj_2164(n) {
  const queue = [];

  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  let front = 0;

  while (queue.length - front > 1) {
    front++; // 맨 앞 제거
    const num = queue[front++];
    queue.push(num);
    console.log(queue);
  }

  return queue[front];
}

console.log(boj_2164(7)); // 6
