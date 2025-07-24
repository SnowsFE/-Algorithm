// 유저별 totalActions 횟수와 lastAction을 구하자

// 부족한 나의 답
function recap(logs) {
  const obj = {};
  logs.forEach(({ userId, action }) => {
    if (!obj[userId]) obj[userId] = {};
    obj[userId]["totalActions"] = (obj[userId]["totalActions"] || 0) + 1;
    obj[userId]["lastAction"] = action;
  });
  console.table(obj);
}

recap([
  { userId: "kim", action: "login", timestamp: "2024-07-23T09:12:00Z" },
  { userId: "lee", action: "login", timestamp: "2024-07-23T09:14:00Z" },
  { userId: "kim", action: "view_page", timestamp: "2024-07-23T09:15:00Z" },
  { userId: "kim", action: "logout", timestamp: "2024-07-23T09:18:00Z" },
  { userId: "lee", action: "view_page", timestamp: "2024-07-23T09:17:00Z" },
  { userId: "lee", action: "logout", timestamp: "2024-07-23T09:19:00Z" },
]);

// 해답
function recap(logs) {
  const obj = {};
  logs.forEach(({ userId, action, timestamp }) => {
    if (!obj[userId]) {
      obj[userId] = {
        totalActions: 0,
        lastAction: action,
        lastTimestamp: timestamp,
      };
    }

    obj[userId].totalActions += 1;

    // 가장 최근 액션으로 갱신
    if (timestamp > obj[userId].lastTimestamp) {
      obj[userId].lastAction = action;
      obj[userId].lastTimestamp = timestamp;
    }
  });

  // lastTimestamp는 반환에 필요 없음
  for (const user in obj) {
    delete obj[user].lastTimestamp;
  }

  console.table(obj);
  return obj;
}
