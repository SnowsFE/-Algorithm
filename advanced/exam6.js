// 내 풀이
function exam6(order_info) {
  const product = new Map();

  for (let type of order_info) {
    product.set(type.name, type);
  }

  return console.table([...product.values()].sort((a, b) => a.price - b.price));
}

exam6([
  { id: 1, name: "T-shirt", price: 25000 },
  { id: 2, name: "Jeans", price: 45000 },
  { id: 3, name: "Sneakers", price: 90000 },
]);

// 간단 풀이
function exam6(order_info) {
  console.table(order_info.sort((a, b) => a.price - b.price));
}

// 중복 있을 경우 풀이
function exam6(order_info) {
  const dupleData = order_info.sort((a, b) => {
    if (a.name !== b.name) {
      return a.name.localeCompare(b.name);
    }
    return a.price - b.price;
  });
}
