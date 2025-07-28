// 조건 1. 주문들 중 status가 "completed"인 주문만 필터링
// 조건 2. 고객 별 orderCount: 완료된 주문 수, totalAmount: 완료된 주문의 총 금액 반환

function itmd4(order_info) {
  const obj = {};
  order_info
    .filter(({ status }) => status === "completed")
    .forEach(({ userId, amount }) => {
      if (!obj[userId])
        obj[userId] = {
          userId,
          orderCount: 0,
          totalAmount: 0,
        };
      obj[userId]["orderCount"]++;
      obj[userId]["totalAmount"] += amount;
    });

  const result = Object.values(obj).sort((a, b) =>
    a.userId.localeCompare(b.userId)
  );
  console.table(result);
}

itmd4([
  { userId: "user1", amount: 12000, status: "completed" },
  { userId: "user2", amount: 5000, status: "pending" },
  { userId: "user1", amount: 7000, status: "completed" },
  { userId: "user3", amount: 15000, status: "completed" },
  { userId: "user2", amount: 8000, status: "completed" },
  { userId: "user3", amount: 4000, status: "cancelled" },
]);
