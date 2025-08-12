// 문자열에서 단어별 등장 횟수를 세어 객체로 반환하세요.
// 대소문자 구분 없이 처리, 문장 부호(,.!?)는 무시, 단어는 공백 기준으로 구분
// {
//     hello: 2,
//     world: 3,
//     is: 1,
//     big: 2
//   }

function countWordFrequency(text) {
  return text
    .toLowerCase() // 대소문자 무시
    .replace(/[,.!?]/g, "") // 문장부호 제거
    .split(/\s+/) // 공백 기준 단어 분리
    .reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1; // 숫자로 카운트
      return acc;
    }, {});
}

console.table(
  countWordFrequency("Hello, hello world! World is big, big world.")
);
