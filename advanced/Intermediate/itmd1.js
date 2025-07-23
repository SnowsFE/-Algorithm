// 4개의 체크 박스가 있다.(notice, free, event, dev)
// 사용자가 원하는 카테고리를 체크박스로 선택하면, 해당 카테고리에 포함된 게시글만 필터링해서 보여줘야 한다.
// 🔍 조건 selectedCategories가 빈 배열이면 결과도 빈 배열로 category가 여러 번 나와도 다 보여줘야 한다.

function itmd1(selected, posts) {
  // 아무것도 선택 안 한 상태면 전체 게시글 반환 (디폴트 해석)
  return selected.length === 0
    ? posts
    : posts.filter(({ category }) => selected.includes(category));
}

const selected = ["notice", "dev"];
const posts = [
  { id: 1, title: "공지사항입니다", category: "notice" },
  { id: 2, title: "자유게시판이에요", category: "free" },
  { id: 3, title: "이벤트 안내", category: "event" },
  { id: 4, title: "개발자 글", category: "dev" },
  { id: 5, title: "두 번째 공지", category: "notice" },
  { id: 6, title: "프론트엔드 팁", category: "dev" },
];

console.table(itmd1(selected, posts));
