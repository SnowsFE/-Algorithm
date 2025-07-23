// 아래 결과와 같이 나타내어라
// {
// kim: { "/home": 2, "/about": 1 },
//   lee: { "/home": 2 },
//   choi: { "/contact": 1 }
// }

function exam14(user_info) {
  const result = user_info.reduce((acc, item) => {
    if (!acc[item.user]) acc[item.user] = {};

    acc[item.user][item.path] = (acc[item.user][item.path] || 0) + 1;

    return acc;
  }, {});

  console.table(result);
}

exam14([
  { user: "kim", path: "/home" },
  { user: "lee", path: "/home" },
  { user: "kim", path: "/about" },
  { user: "lee", path: "/home" },
  { user: "kim", path: "/home" },
  { user: "choi", path: "/contact" },
]);
