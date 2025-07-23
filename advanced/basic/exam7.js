function exam7(order_info) {
  // 주문별 총 금액(qty × price)
  const result = order_info.map((item) => ({
    orderNo: item.orderNo,
    product: item.product,
    total: item.qty * item.price,
    qty: item.qty,
    price: item.price,
  }));

  console.table(result);

  // 같은 product끼리 합산
  const summary = result.reduce((acc, item) => {
    if (!acc[item.product]) {
      // product 없으면 새로 추가
      acc[item.product] = {
        product: item.product,
        totalQty: 0,
        totalAmount: 0,
      };
    }

    acc[item.product].totalQty += item.qty;
    acc[item.product].totalAmount += item.total;

    return acc;
  }, {});

  // 객체 → 배열로 변환 후 출력
  console.table(Object.values(summary));
}

exam7([
  { orderNo: 1001, product: "노트북", qty: 1, price: 1200000 },
  { orderNo: 1002, product: "마우스", qty: 2, price: 25000 },
  { orderNo: 1003, product: "키보드", qty: 1, price: 55000 },
  { orderNo: 1004, product: "모니터", qty: 2, price: 300000 },
  { orderNo: 1005, product: "마우스", qty: 1, price: 25000 },
]);
