// ADMIN → “관리자”
// USER → “사용자”
// MANAGER → “매니저”
function exam11(user_info) {
  return console.table(
    user_info.map((item) => ({
      id: item.id,
      name: item.name,
      roleName: item.role
        .replace("ADMIN", "관리자")
        .replace("USER", "사용자")
        .replace("MANAGER", "매니저"),
    }))
  );
}

exam11([
  { id: 1, name: "Alice", role: "ADMIN" },
  { id: 2, name: "Bob", role: "USER" },
  { id: 3, name: "Charlie", role: "MANAGER" },
  { id: 4, name: "Diana", role: "USER" },
]);

function transformUserRoles(user_info) {
  const roleMap = {
    ADMIN: "관리자",
    USER: "사용자",
    MANAGER: "매니저",
  };

  return console.table(
    user_info.map((item) => ({
      id: item.id,
      name: item.name,
      roleName: roleMap[item.role] || item.role,
    }))
  );
}

transformUserRoles([
  { id: 1, name: "Alice", role: "ADMIN" },
  { id: 2, name: "Bob", role: "USER" },
  { id: 3, name: "Charlie", role: "MANAGER" },
  { id: 4, name: "Diana", role: "USER" },
]);
