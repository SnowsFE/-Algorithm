// 게시글 수(postCount) + 고유한 유저 수(userCount)
function exam15(boards_info) {
  const result = {};

  boards_info.forEach((item) => {
    const { category, user } = item;

    if (!result[category]) {
      result[category] = {
        postCount: 0,
        userSet: new Set(), // 중복 제거용
      };
    }

    result[category].postCount += 1;
    result[category].userSet.add(user);
  });

  // 최종 결과로 userSet → userCount로 바꾸기
  for (const category in result) {
    result[category].userCount = result[category].userSet.size;
    delete result[category].userSet;
  }

  console.table(result);
}

exam15([
  { id: 1, title: "공지사항입니다", category: "notice", user: "kim" },
  { id: 2, title: "자유글이에요", category: "free", user: "lee" },
  { id: 3, title: "문의합니다", category: "qna", user: "kim" },
  { id: 4, title: "재문의 드립니다", category: "qna", user: "park" },
  { id: 5, title: "리액트 관련 질문", category: "qna", user: "kim" },
  { id: 6, title: "자유글2", category: "free", user: "lee" },
  { id: 7, title: "공지 2", category: "notice", user: "hong" },
  { id: 8, title: "자유글3", category: "free", user: "kim" },
]);
