// "바보", "멍청이"라는 단어가 포함된 로그는 제외하고 나머지만 반환
// 단어는 부분일치가 아닌 완전일치만 필터링.
// 예를 들어 "바보같은사람" → 필터 대상 아님, "멍청이!" → 필터 대상.
function itmd8(logs) {
  const badWords = ["바보", "멍청이"];
  return logs.filter((log) => !badWords.some((word) => log.includes(word)));
}

function itmd8Alternative(logs) {
  // 방법 1: 단순한 정규표현식
  const badWordsRegex = /바보|멍청이/;
  return logs.filter((log) => !badWordsRegex.test(log));
}

// 방법 2: 전역 플래그와 함께 (여러 개 매칭 시에도 동작)
function itmd8Alternative1(logs) {
  const badWordsRegex = /바보|멍청이/g;
  return logs.filter((log) => !badWordsRegex.test(log));
}

// 방법 3: 단어 경계를 고려한 정확한 매칭
function itmd8Alternative2(logs) {
  const badWordsRegex = /\b(바보|멍청이)\b/;
  return logs.filter((log) => !badWordsRegex.test(log));
}

// 방법 4: 대소문자 구분 없이 (한글에는 해당 없지만 예시로)
function itmd8Alternative3(logs) {
  const badWordsRegex = /바보|멍청이/i;
  return logs.filter((log) => !badWordsRegex.test(log));
}

const testLogs = [
  "안녕하세요",
  "넌 바보야",
  "정말 멍청이 같아",
  "멍청이!",
  "이건 멍청이라는 단어가 포함되어야 해",
  "바보같은 행동은 싫어",
];

// 수정된 방법 1: 각 함수의 결과를 객체로 만들어 table로 출력
const results = {
  "원본 배열 방식": itmd8(testLogs),
  "정규식 기본": itmd8Alternative(testLogs),
  "정규식 전역": itmd8Alternative1(testLogs),
  "정규식 단어경계": itmd8Alternative2(testLogs),
  "정규식 대소문자무시": itmd8Alternative3(testLogs),
};

console.log("=== 각 방법별 결과 ===");
for (const [method, result] of Object.entries(results)) {
  console.log(`\n${method}:`);
  console.table(result);
}

// 수정된 방법 2: 간단하게 로그로 출력
console.log("\n=== 비교 결과 ===");
console.log("원본 로그:", testLogs);
console.log("원본 배열 방식:", itmd8(testLogs));
console.log("정규식 기본:", itmd8Alternative(testLogs));
console.log("정규식 전역:", itmd8Alternative1(testLogs));
console.log("정규식 단어경계:", itmd8Alternative2(testLogs));
console.log("정규식 대소문자무시:", itmd8Alternative3(testLogs));
