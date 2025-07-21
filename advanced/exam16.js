// 각 user가 어떤 category에 몇 개의 글을 썼는지
function exam16(boards_info) {
  const obj = {};

  boards_info.forEach(({ user, category }) => {
    if (!obj[user]) obj[user] = {};
    if (!obj[user][category]) obj[user][category] = 0;
    obj[user][category]++;
  });
  console.table(obj);
}

exam16([
  { user: "kim", category: "notice" },
  { user: "lee", category: "qna" },
  { user: "kim", category: "free" },
  { user: "kim", category: "qna" },
  { user: "lee", category: "free" },
  { user: "park", category: "free" },
  { user: "kim", category: "free" },
  { user: "lee", category: "notice" },
]);
