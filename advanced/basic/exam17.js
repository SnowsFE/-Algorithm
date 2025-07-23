function exam17(users_log) {
  const gather = {};
  const visited = new Set();

  users_log.forEach(({ id, name, path }) => {
    const key = `${id}_${path}`;
    if (visited.has(key)) return;
    visited.add(key);

    if (!gather[name]) gather[name] = {};
    gather[name][path] = 1;
  });

  console.table(gather);
}

exam17([
  { id: 1, name: "kim", path: "/home" },
  { id: 2, name: "lee", path: "/home" },
  { id: 1, name: "kim", path: "/about" },
  { id: 3, name: "choi", path: "/home" },
  { id: 2, name: "lee", path: "/contact" },
  { id: 1, name: "kim", path: "/home" },
]);
