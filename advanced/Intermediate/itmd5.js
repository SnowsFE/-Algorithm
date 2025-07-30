// 가장 자주 접속한 사용자의 ID를 반환하는 함수를 작성하세요(가장 많이 접속한 유저가 여러 명일 경우, 가장 최근에 접속한 유저를 반환하세요)
// 접속 횟수가 가장 많은 사용자 1명을 반환
// 접속 횟수가 같다면, 가장 최근 접속한 사용자를 반환
// 빈 배열이면 null 반환

function itmd5(logs) {
  if (logs.length === 0) return null;

  const mUser = {};
  let topUser = null;

  for (const { userId, timestamp } of logs) {
    if (!mUser[userId]) {
      mUser[userId] = { count: 1, last: timestamp };
    } else {
      mUser[userId].count++;
      if (timestamp > mUser[userId].last) {
        mUser[userId].last = timestamp;
      }
    }

    const current = mUser[userId];
    const top = topUser ? mUser[topUser] : null;

    if (
      !topUser ||
      current.count > top.count ||
      (current.count === top.count && current.last > top.last)
    ) {
      topUser = userId;
    }
  }

  return console.log(topUser);
}

itmd5([
  { userId: "kim", timestamp: "2025-07-29T09:00:00Z" },
  { userId: "lee", timestamp: "2025-07-29T09:10:00Z" },
  { userId: "kim", timestamp: "2025-07-29T09:15:00Z" },
  { userId: "park", timestamp: "2025-07-29T09:20:00Z" },
  { userId: "lee", timestamp: "2025-07-29T09:30:00Z" },
  { userId: "lee", timestamp: "2025-07-29T10:00:00Z" },
]);
