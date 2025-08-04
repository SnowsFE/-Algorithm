// 옵션들을 카테고리별로 묶어서, 아래처럼 객체 형태로 정리
// 빈배열이면 {} 반환
// {
//   Color: ["Red", "Blue"],
//   Size: ["S", "M", "L"],
//   Storage: ["32GB", "64GB"]
// }

const itmd9 = (goods) => {
  const getItem = {};
  for (let { name, category } of goods) {
    if (!getItem[category]) {
      getItem[category] = [name];
    } else {
      getItem[category].push(name);
    }
  }
  return goods.length === 0 ? {} : getItem;
};

console.table(
  itmd9([
    { name: "Red", category: "Color" },
    { name: "Blue", category: "Color" },
    { name: "S", category: "Size" },
    { name: "M", category: "Size" },
    { name: "L", category: "Size" },
    { name: "32GB", category: "Storage" },
    { name: "64GB", category: "Storage" },
  ])
);

const itmd9_1 = (goods) => {
  return goods.reduce((acc, { name, category }) => {
    if (!acc[category]) acc[category] = [];
    acc[category].push(name);
    return acc;
  }, {});
};

console.table(
  itmd9_1([
    { name: "Red", category: "Color" },
    { name: "Blue", category: "Color" },
    { name: "S", category: "Size" },
    { name: "M", category: "Size" },
    { name: "L", category: "Size" },
    { name: "32GB", category: "Storage" },
    { name: "64GB", category: "Storage" },
  ])
);
