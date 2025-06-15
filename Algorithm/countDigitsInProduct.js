function countDigitsInProducts(A, B, C) {
  const product = A * B * C;
  const counts = Array(10).fill(0); // 0~9까지 각 숫자 개수 저장

  String(product)
    .split("")
    .forEach((digit) => {
      counts[Number(digit)]++;
    });

  return counts;
}

const result = countDigitsInProducts(150, 266, 427);
result.forEach((count) => console.log(count));

function countDigitsInProducts2(A, B, C) {
  const product = A * B * C;
  const counts = Array(10).fill(0); // 0~9까지 각 숫자 개수 저장

  for (const digit of String(product)) {
    counts[Number(digit)]++;
  }

  return console.log(counts);
}

countDigitsInProducts2(150, 266, 427);
