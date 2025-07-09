// 구조분해
function destructuring(N) {
  const obj = N.map((nStr) => {
    // 1-1. 문자열을 공백 기준으로 나누고 숫자로 변환
    const [x, y] = nStr.split(" ").map(Number);
    // 1-2. 구조분해할당으로 배열 요소를 각각 x와 y에 할당
    // 1-3. { x, y } 형태의 객체를 만들어 반환
    return console.log([x, y]);
  });
}

destructuring(["3 1", "7 9", "5 3"]);
