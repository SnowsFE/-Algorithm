function boj_1037(...numList) {
  if (numList.length <= 2) {
    return console.log(null);
  }

  const innerArr = numList.slice(1, numList.length - 1);

  const min = Math.min(...innerArr);
  const max = Math.max(...innerArr);

  return console.log(min * max);
}

boj_1037(1, 2, 4, 8, 16);
boj_1037(1, 2);
