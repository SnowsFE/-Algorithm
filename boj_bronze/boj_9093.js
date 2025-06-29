function boj_9093(str) {
  return str
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
}

console.log(boj_9093("The quick brown fox jumps"));
console.log(boj_9093("Programming makes me happy"));
console.log(boj_9093("Coffee is my favorite drink"));
console.log(boj_9093("Learning new skills is fun"));
console.log(boj_9093("I love solving coding problems"));
