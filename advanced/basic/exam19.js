// 중복되지 않는 path만 name = {} 내부 path value값 형식으로 반환
function exam19(logs) {
  const obj = {};

  // 등장 횟수 세기
  logs.forEach(({ name, path }) => {
    if (!obj[name]) obj[name] = {};
    if (!obj[name][path]) obj[name][path] = 0;
    obj[name][path]++;
  });

  // 중복되지 않은 path만 걸러서 새로운 객체 생성
  const result = {};

  for (const name in obj) {
    for (const path in obj[name]) {
      if (obj[name][path] === 1) {
        if (!result[name]) result[name] = [];
        result[name].push(path);
      }
    }
  }

  console.table(result);
  return result;
}

exam19([
  { id: 1, name: "kim", path: "/home" },
  { id: 2, name: "lee", path: "/home" },
  { id: 3, name: "kim", path: "/profile" },
  { id: 4, name: "kim", path: "/home" },
  { id: 5, name: "park", path: "/home" },
  { id: 6, name: "lee", path: "/dashboard" },
  { id: 7, name: "kim", path: "/profile" },
  { id: 8, name: "lee", path: "/home" },
]);
