// 각 사용자별로 입금합계, 출금합계, 잔액을 계산하는 함수
// {
//   kim: { deposit: 1700, withdraw: 200, balance: 1500 },
//   lee: { deposit: 500, withdraw: 100, balance: 400 },
//   park: { deposit: 300, withdraw: 0, balance: 300 }
// }
function itmd6(bank_logs) {
  const bankInfo = {};
  for (let { userId, amount, type } of bank_logs) {
    if (!bankInfo[userId])
      bankInfo[userId] = {
        deposit: 0,
        withdraw: 0,
        balance: 0,
      };

    if (type === "deposit") {
      bankInfo[userId].deposit += amount;
      bankInfo[userId].balance += amount;
    } else if (type === "withdraw") {
      bankInfo[userId].withdraw += amount;
      bankInfo[userId].balance -= amount;
    }
  }
  console.table(bankInfo);
}

const transactions = [
  { userId: "kim", amount: 1000, type: "deposit" },
  { userId: "lee", amount: 500, type: "deposit" },
  { userId: "kim", amount: 200, type: "withdraw" },
  { userId: "park", amount: 300, type: "deposit" },
  { userId: "lee", amount: 100, type: "withdraw" },
  { userId: "kim", amount: 700, type: "deposit" },
];

itmd6(transactions);
