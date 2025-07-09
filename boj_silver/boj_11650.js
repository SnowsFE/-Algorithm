function boj_11650(N) {
  // 1. 배열 N의 각 문자열을 {x, y} 객체로 변환
  const obj = N.map((nStr) => {
    // 1-1. 문자열을 공백 기준으로 나누고 숫자로 변환
    const [x, y] = nStr.split(" ").map(Number);
    // 1-2. 구조분해할당으로 배열 요소를 각각 x와 y에 할당
    // 1-3. { x, y } 형태의 객체를 만들어 반환
    return { x, y };
  });

  // 2. 변환된 객체 배열 obj를 정렬
  obj.sort((a, b) => {
    // 2-1. x 값이 다르면 x 오름차순으로 정렬
    if (a.x !== b.x) return a.x - b.x;
    // 2-2. x 값이 같으면 y 오름차순으로 정렬
    return a.y - b.y;
  });

  // 3. 정렬된 객체 배열을 표 형태로 출력
  console.table(obj);
}

// 함수 호출: 좌표 문자열 배열을 인자로 넘겨줌
boj_11650(["3 4", "1 1", "1 -1", "2 2", "3 3"]);
