function boj_9086(str) {
  if (str.length >= 2) {
    return str[0] + str[str.length - 1];
  } else if (str.length === 1) {
    return str.repeat(2);
  } else {
    return "조건에 맞지 않는 값입니다.";
  }
}

// 테스트
console.log(boj_9086("ACDKJFOWIEGHE")); // AE
console.log(boj_9086("JJ")); // JJ
console.log(boj_9086("BA")); // BA
console.log(boj_9086("A")); // AA
console.log(boj_9086("ABCDEFGHIJKLMNOPQRSTUVWXYZ")); // AZ
