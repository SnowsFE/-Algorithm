// 프론트 데이터 가공 문제
// {
//   totalPrice: 235000,
//   itemCounts: {
//     "셔츠": 3,
//     "바지": 1,
//     "신발": 3
//   }
// }

function calculateCartSummary(cart) {
  return cart.reduce(
    (acc, { name, price, quantity }) => {
      // 총 금액 더하기
      acc.totalPrice += price * quantity;

      // 품목별 개수 더하기
      acc.itemCounts[name] = (acc.itemCounts[name] || 0) + quantity;

      return acc;
    },
    { totalPrice: 0, itemCounts: {} } // 초기값
  );
}

const cart = [
  { name: "셔츠", price: 25000, quantity: 2 },
  { name: "바지", price: 40000, quantity: 1 },
  { name: "신발", price: 60000, quantity: 3 },
  { name: "셔츠", price: 25000, quantity: 1 },
];

console.table(calculateCartSummary(cart));
