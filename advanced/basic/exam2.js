// 활성 회원(isActive가 true)만 필터링

// 이름(name) 오름차순 정렬

// 이름이 같은 경우, 최근 로그인(lastLogin) 내림차순 정렬

// 이름과 마지막 로그인 날짜가 모두 같은 경우, 가입일(createdAt) 내림차순 정렬
function exam2(n) {
  return n
    .filter((item) => item.isActive === true)
    .sort((a, b) => {
      if (a.name !== b.name) {
        return a.name.localeCompare(b.name);
      }
      if (a.lastLogin !== b.lastLogin) {
        return new Date(b.lastLogin) - new Date(a.lastLogin);
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
}

const members = [
  {
    name: "Alice",
    createdAt: "2024-06-01",
    lastLogin: "2025-06-15",
    isActive: true,
  },
  {
    name: "Bob",
    createdAt: "2023-12-30",
    lastLogin: "2025-05-10",
    isActive: false,
  },
  {
    name: "Charlie",
    createdAt: "2024-01-15",
    lastLogin: "2025-06-01",
    isActive: true,
  },
  {
    name: "Alice",
    createdAt: "2024-02-10",
    lastLogin: "2025-04-30",
    isActive: false,
  },
];

console.table(exam2(members));
