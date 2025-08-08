//객체 배열에서 검색어(keyword) 가 포함된 항목만 필터링하는 함수를 작성하세요.
// users 배열은 name, email, role 속성을 가진 객체로 구성됨
// 검색어는 대소문자 구분 없이, name, email, role 중 어느 하나라도 포함되어 있으면 통과

function filterBySearch(users, keyword) {
  const lowerKeyword = keyword.toLowerCase();

  return users.filter(({ name, email, role }) => {
    return (
      name.toLowerCase().includes(lowerKeyword) ||
      email.toLowerCase().includes(lowerKeyword) ||
      role.toLowerCase().includes(lowerKeyword)
    );
  });
}

// 심화 버전
function filterBySearch2(users, keyword) {
  if (!keyword) return [];

  const lowerKeyword = keyword.toLowerCase();
  return users.filter((user) =>
    Object.values(user).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes(lowerKeyword)
    )
  );
}

const users = [
  { name: "Alice", email: "alice@example.com", role: "admin" },
  { name: "Bob", email: "bob@naver.com", role: "user" },
  { name: "Charlie", email: "charlie@gmail.com", role: "manager" },
  { name: "David", email: "david@example.com", role: "user" },
];

console.table(filterBySearch(users, "bob"));
// → [{ name: "Bob", email: "bob@naver.com", role: "user" }]

console.table(filterBySearch(users, "user"));
// → [
//     { name: "Bob", email: "bob@naver.com", role: "user" },
//     { name: "David", email: "david@example.com", role: "user" }
//   ]

console.table(filterBySearch(users, "example"));
// → [
//     { name: "Alice", email: "alice@example.com", role: "admin" },
//     { name: "David", email: "david@example.com", role: "user" }
//   ]
