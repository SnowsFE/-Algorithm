function exam18(users_log) {
  const obj = {};

  users_log
    .filter((item) => item.status === "success")
    .forEach(({ user, path }) => {
      if (!obj[user]) obj[user] = {};
      obj[user][path] = (obj[user][path] || 0) + 1;
    });

  console.table(obj);
}

exam18([
  { user: "kim", status: "success", path: "/home" },
  { user: "lee", status: "fail", path: "/login" },
  { user: "kim", status: "success", path: "/profile" },
  { user: "choi", status: "success", path: "/home" },
  { user: "lee", status: "success", path: "/home" },
  { user: "kim", status: "fail", path: "/login" },
  { user: "choi", status: "success", path: "/settings" },
  { user: "kim", status: "success", path: "/home" },
]);
