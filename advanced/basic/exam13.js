// 🔸요구사항 category 기준으로 그룹화
// 카테고리별 게시글 수를 객체로 정리해서 반환
//🔹출력 형태: { notice: 2, event: 2, product: 1}

function exam13(boards_info) {
  const obj = {};

  boards_info.map((item) => {
    obj[item.category] = (obj[item.category] || 0) + 1;
  });

  console.log(obj);
}

function exam13_method1(boards_info) {
  const obj = {};

  boards_info.forEach((item) => {
    obj[item.category] = (obj[item.category] || 0) + 1;
  });

  console.log(obj);
}

function exam13_method2(boards_info) {
  const result = boards_info.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  console.log(result);
}

exam13([
  { id: 1, title: "공지사항입니다", category: "notice" },
  { id: 2, title: "이벤트 안내", category: "event" },
  { id: 3, title: "서비스 점검", category: "notice" },
  { id: 4, title: "신상품 소개", category: "product" },
  { id: 5, title: "이벤트 종료", category: "event" },
]);

exam13_method1([
  { id: 1, title: "공지사항입니다", category: "notice" },
  { id: 2, title: "이벤트 안내", category: "event" },
  { id: 3, title: "서비스 점검", category: "notice" },
  { id: 4, title: "신상품 소개", category: "product" },
  { id: 5, title: "이벤트 종료", category: "event" },
]);

exam13_method2([
  { id: 1, title: "공지사항입니다", category: "notice" },
  { id: 2, title: "이벤트 안내", category: "event" },
  { id: 3, title: "서비스 점검", category: "notice" },
  { id: 4, title: "신상품 소개", category: "product" },
  { id: 5, title: "이벤트 종료", category: "event" },
]);
