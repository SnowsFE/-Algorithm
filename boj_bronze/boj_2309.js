// 🧩 문제명: 일곱 난쟁이
// 📘 문제 번호: 2309
// 🧠 함수 이름: boj_2309
// 🔍 문제 유형: 완전탐색 (Brute Force), 조합

// 💡 설명:
// 9명의 난쟁이 중 7명의 키만을 골라 그 키의 합이 100이 되도록 하는 조합을 찾는 문제입니다.
// 조건을 만족하는 7명의 키를 오름차순으로 출력하세요.
// 입력된 키는 모두 다르며, 항상 하나의 정답이 보장됩니다.

function boj_2309(heights) {
  const total = heights.reduce((sum, height) => sum + height, 0);

  const target = total - 100; // 가짜 난쟁이 2명의 키 합

  // 가짜 난쟁이 2명 찾기
  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[i] + heights[j] === target) {
        // 가짜 난쟁이 2명을 제외한 7명 반환
        return heights
          .filter((_, index) => index !== i && index !== j)
          .sort((a, b) => a - b);
      }
    }
  }
}

console.log(boj_2309([20, 7, 23, 19, 10, 15, 25, 8, 13])); // [7, 8, 10, 13, 19, 20, 23]
