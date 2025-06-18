function boj_1436(n) {
  let count = 0;
  let num = 666;

  while (true) {
    if (String(num).includes("666")) {
      count++;
      if (count === n) {
        return num;
      }
    }
    num++;
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`${i}번째 종말의 수: ${boj_1436(i)}`);
}
