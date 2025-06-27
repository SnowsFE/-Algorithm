// 🧩 문제명: 크로아티아 알파벳
// 📘 문제 번호: 2941
// 🧠 함수 이름: boj_2941
// 🔍 문제 유형: 문자열 (String), 구현 (Implementation)

// 💡 설명:
// 예전 크로아티아 알파벳에서는 특정 문자열을 하나의 문자로 취급합니다.
// 크로아티아 알파벳은 다음과 같이 총 8가지입니다:

// c=, c-, dz=, d-, lj, nj, s=, z=
// 이 알파벳들이 포함된 문자열이 주어졌을 때,
// 실제 알파벳 개수(= 크로아티아 알파벳 규칙 적용 후) 를 세는 프로그램을 만드세요.

// ✅ 입력 형식

function boj_2941(str) {
  const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  croatia.forEach((word) => {
    str = str.replaceAll(word, "*");
  });
  return str.length;
}

console.log(boj_2941("ljes=njak")); // 6
console.log(boj_2941("ddz=z=")); // 3
console.log(boj_2941("nljj")); // 3
console.log(boj_2941("c=c=")); // 2
console.log(boj_2941("dz=ak")); // 3
