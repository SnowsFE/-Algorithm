function boj_1436(n) {
  let count = 666;
  let found = 0;

  while (true) {
    if (count.toString().includes("666")) {
      found++;
      if (found === n) {
        return count;
      }
    }
    count++;
  }
}

console.log(boj_1436(1));
console.log(boj_1436(2));
console.log(boj_1436(3));
console.log(boj_1436(4));
console.log(boj_1436(5));
console.log(boj_1436(6));
console.log(boj_1436(7));
console.log(boj_1436(8));
console.log(boj_1436(9));
