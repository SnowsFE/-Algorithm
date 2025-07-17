// 🔸정책 조건: vip 또는 gold 등급이며, 30세 이상이면서, 총 구매 금액이 100,000원 이상
// 반환값: [{ name: "이영희", discountRate: "15%" }, { name: "박민준", discountRate: "10%" },]

function exam12(user_info) {
  user_info.filter((item) => {
    if (
      (item.membership === "gold" || item.membership === "vip") &&
      item.age >= 30 &&
      item.totalPurchase >= 100000
    ) {
    }
  });
}

exam12([
  { id: 1, name: "홍길동", age: 28, membership: "gold", totalPurchase: 120000 },
  {
    id: 2,
    name: "김철수",
    age: 17,
    membership: "silver",
    totalPurchase: 80000,
  },
  { id: 3, name: "이영희", age: 35, membership: "vip", totalPurchase: 300000 },
  { id: 4, name: "박민준", age: 42, membership: "gold", totalPurchase: 50000 },
  {
    id: 5,
    name: "최수정",
    age: 31,
    membership: "silver",
    totalPurchase: 180000,
  },
]);
