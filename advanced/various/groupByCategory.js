// 카테고리 기준으로 묶인 객체를 반환
function groupByCategory(products) {
  return products.reduce((acc, product) => {
    const { category } = product;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);
    return acc;
  }, {});
}

const products = [
  { name: "셔츠", category: "의류" },
  { name: "바지", category: "의류" },
  { name: "냉장고", category: "가전" },
  { name: "노트북", category: "가전" },
  { name: "초콜릿", category: "식품" },
];

console.table(groupByCategory(products));

// {
//     "의류": [
//       { name: "셔츠", category: "의류" },
//       { name: "바지", category: "의류" }
//     ],
//     "가전": [
//       { name: "냉장고", category: "가전" },
//       { name: "노트북", category: "가전" }
//     ],
//     "식품": [
//       { name: "초콜릿", category: "식품" }
//     ]
//   }
