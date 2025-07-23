// 고객이 주문한 총 상품의 갯수, 내 풀이
function exam10(order_info) {
  const total = order_info.map((item) => ({
    customer: item.customer,
    totalCount: item.items.reduce((a, b) => a + b.qty, 0),
  }));

  const obj = {};

  for (let person of total) {
    if (obj[person.customer]) {
      obj[person.customer] += person.totalCount;
    } else {
      obj[person.customer] = person.totalCount;
    }
  }

  console.table(obj);
}

// 개선된 풀이
function exam10_ai(order_info) {
  const result = order_info.reduce((acc, order) => {
    const totalCount = order.items.reduce((sum, item) => sum + item.qty, 0);

    if (acc[order.customer]) {
      acc[order.customer] += totalCount;
    } else {
      acc[order.customer] = totalCount;
    }

    return acc;
  }, {});

  console.table(result);
}
exam10([
  {
    orderId: "ORD001",
    customer: "kim",
    items: [
      { product: "apple", qty: 3, price: 1000 },
      { product: "banana", qty: 2, price: 500 },
    ],
  },
  {
    orderId: "ORD002",
    customer: "lee",
    items: [
      { product: "apple", qty: 1, price: 1000 },
      { product: "melon", qty: 5, price: 2000 },
    ],
  },
  {
    orderId: "ORD003",
    customer: "kim",
    items: [
      { product: "banana", qty: 1, price: 500 },
      { product: "melon", qty: 2, price: 2000 },
    ],
  },
]);
