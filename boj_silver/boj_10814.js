function boj_10814(n) {
  // 입력 배열 n은 [["21", "Junkyu"], ["21", "Dohyun"], ["20", "Sunyoung"]]

  // 나이, 이름, 입력순서(index) 저장
  const arr = n.map((item, idx) => [Number(item[0]), item[1], idx]);

  // 정렬
  arr.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]; // 나이 순
    return a[2] - b[2]; // 입력 순서
  });

  // 출력 형식 맞춰서 반환
  return arr.map((item) => [item[0].toString(), item[1]]);
}

// 예제 실행
console.table(
  boj_10814([
    ["21", "Junkyu"],
    ["21", "Dohyun"],
    ["20", "Sunyoung"],
  ])
);

function test() {
  // 안정 정렬 예제
  const people = [
    { name: "Alice", age: 25, index: 0 },
    { name: "Bob", age: 30, index: 1 },
    { name: "Charlie", age: 25, index: 2 },
    { name: "David", age: 20, index: 3 },
    { name: "Eve", age: 30, index: 4 },
  ];

  console.log("정렬 전:");
  people.forEach((person) => console.log(`${person.age} ${person.name}`));

  // 안정 정렬: 나이 기준 오름차순, 나이가 같으면 원래 순서 유지
  people.sort((a, b) => {
    if (a.age !== b.age) {
      return a.age - b.age; // 나이 오름차순
    }
    return a.index - b.index; // 나이가 같으면 원래 순서 유지
  });

  console.log("\n정렬 후:");
  people.forEach((person) => console.log(`${person.age} ${person.name}`));
}

test();

// 결과:
// 20 David
// 25 Alice    (Alice가 Charlie보다 먼저 입력되었으므로 먼저 출력)
// 25 Charlie
// 30 Bob      (Bob이 Eve보다 먼저 입력되었으므로 먼저 출력)
// 30 Eve
