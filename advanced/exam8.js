// 1.category 가 "notice" 인 게시글만 뽑아서 createdAt 기준 내림차순으로 정렬한다.
// 2.정렬된 notice 게시글 중 최신글 1건만 { id, title, createdAt } 만 남기고 속성명을 title → subject, createdAt → date로 변경
const exam8 = (boards_info) => {
  const result = boards_info
    .filter((item) => item.category === "notice")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 1) // 최신글 1건만
    .map((item) => ({
      id: item.id,
      subject: item.title,
      date: item.createdAt,
    }));

  console.table(result);
};

exam8([
  { id: 1, title: "Hello", createdAt: "2023-09-21", category: "notice" },
  { id: 2, title: "Event coming", createdAt: "2024-03-05", category: "event" },
  { id: 3, title: "Welcome", createdAt: "2023-12-12", category: "notice" },
  { id: 4, title: "Update!", createdAt: "2024-06-30", category: "update" },
  { id: 5, title: "Maintenance", createdAt: "2024-01-02", category: "notice" },
]);
