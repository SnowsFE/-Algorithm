// 각 사용자별로 가장 최근 활동만 모아 정리하는 함수
// {
//   kim: { action: "logout", timestamp: "2024-07-23T09:18:00Z" },
//   lee: { action: "view_page", timestamp: "2024-07-23T09:17:00Z" },
//   park: { action: "login", timestamp: "2024-07-23T09:20:00Z" }
// }
function itmd7(last_logs) {
  const lastUser = {};
  for (const { userId, action, timestamp } of last_logs) {
    if (!lastUser[userId])
      lastUser[userId] = {
        action: action,
        timestamp: timestamp,
      };

    if (timestamp > lastUser[userId].timestamp) {
      lastUser[userId].action = action;
      lastUser[userId].timestamp = timestamp;
    }
  }

  return console.table(lastUser);
}

const logs = [
  { userId: "kim", action: "login", timestamp: "2024-07-23T09:12:00Z" },
  { userId: "lee", action: "login", timestamp: "2024-07-23T09:14:00Z" },
  { userId: "kim", action: "view_page", timestamp: "2024-07-23T09:15:00Z" },
  { userId: "kim", action: "logout", timestamp: "2024-07-23T09:18:00Z" },
  { userId: "lee", action: "view_page", timestamp: "2024-07-23T09:17:00Z" },
  { userId: "park", action: "login", timestamp: "2024-07-23T09:20:00Z" },
];

itmd7(logs);
