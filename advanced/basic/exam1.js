// ✅ 문제
// 당신은 웹서비스에서 회원 목록 페이지를 개발하고 있다.
// 이 서비스에는 아래와 같은 요구사항이 있다:

// 서버에서 사용자 데이터를 배열로 내려준다.

// 프론트에서는 이름(name) 기준으로 오름차순 정렬해서 보여줘야 한다.

// 단, 이름이 같은 사용자가 여러 명 있으면, 같은 이름끼리는 가입일(createdAt) 기준으로 내림차순 정렬해야 한다.

// ▪︎ 입력 데이터 예시 (JSON)
// [
//   { "name": "Alice", "createdAt": "2024-02-15" },
//   { "name": "Bob", "createdAt": "2024-05-20" },
//   { "name": "Alice", "createdAt": "2024-06-01" },
//   { "name": "Charlie", "createdAt": "2023-12-30" }
// ]
// ▪︎ 기대 출력
// 이 배열을 정렬 후 출력하면 아래 순서여야 한다:

// [
//   { "name": "Alice", "createdAt": "2024-06-01" },
//   { "name": "Alice", "createdAt": "2024-02-15" },
//   { "name": "Bob", "createdAt": "2024-05-20" },
//   { "name": "Charlie", "createdAt": "2023-12-30" }
// ]
// ✅ 요구사항
// JavaScript로 함수를 작성하라.
// 함수명은 sortUsers(users)로 한다.
// 이 함수는 정렬된 배열을 반환해야 한다.

// 🎯 보너스 (실무 팁)
// 실무에서는 문자열 날짜 비교보다 날짜 객체로 변환하는 게 안전하다.

// 오름/내림 기준을 꼭 주석으로 적어 두면 협업할 때 좋다.

function exam1(n) {
  return n.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    // 이름이 같으면 createdAt 내림차순
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
}

console.table(
  exam1([
    { name: "Alice", createdAt: "2024-02-15" },
    { name: "Bob", createdAt: "2024-05-20" },
    { name: "Alice", createdAt: "2024-06-01" },
    { name: "Charlie", createdAt: "2023-12-30" },
  ])
);
