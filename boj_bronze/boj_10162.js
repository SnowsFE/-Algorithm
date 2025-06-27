function boj_10162(T) {
  const result = [];

  if (T % 10 !== 0) {
    return console.log(-1); // 10초 단위로 나눠지지 않으면 불가능
  }

  const A = Math.floor(T / 300);
  T %= 300;

  const B = Math.floor(T / 60);
  T %= 60;

  const C = Math.floor(T / 10);

  result.push(A, B, C);

  console.log(result.join(" "));
}

boj_10162(100); // ➜ "0 1 4"
boj_10162(189); // ➜ "-1"
boj_10162(300); // ➜ "1 0 0"
boj_10162(350); // ➜ "1 0 5"
boj_10162(125); // ➜ "0 2 0" → X (불가능하므로 "-1" 출력됨)
