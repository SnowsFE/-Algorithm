function exam9(order_info) {
  const result = {};

  order_info.forEach((order) => {
    const totalPrice = order.items.reduce(
      (sum, item) => sum + item.qty * item.price,
      0
    );

    if (result[order.customer]) {
      result[order.customer] += totalPrice;
    } else {
      result[order.customer] = totalPrice;
    }
  });

  console.table(result);
  return result;
}

exam9([
  {
    orderId: 101,
    customer: "Alice",
    items: [
      { name: "Pen", qty: 2, price: 1.5 },
      { name: "Notebook", qty: 1, price: 3.0 },
    ],
  },
  {
    orderId: 102,
    customer: "Bob",
    items: [{ name: "Pen", qty: 5, price: 1.5 }],
  },
  {
    orderId: 103,
    customer: "Alice",
    items: [{ name: "Pencil", qty: 10, price: 0.5 }],
  },
]);
