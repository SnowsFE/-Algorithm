// 각 객체는 { name, email, age } 속성을 보유
// 나이(age)가 특정 값 이상인 사용자만 걸러서 이메일(email)만 모은 배열을 반환
function getEmailsByAge(users, minAge) {
  const result = users
    .filter(({ age }) => age >= minAge)
    .map(({ email }) => email);

  return result;
}

function getEmailsByAge2(users, minAge) {
  return users.reduce((acc, { email, age }) => {
    if (age >= minAge) acc.push(email);
    return acc;
  }, []);
}

const users = [
  { name: "Alice", email: "alice@example.com", age: 25 },
  { name: "Bob", email: "bob@naver.com", age: 30 },
  { name: "Charlie", email: "charlie@gmail.com", age: 20 },
  { name: "David", email: "david@example.com", age: 35 },
];

console.log(getEmailsByAge(users, 25));
// 예상 출력: ["alice@example.com", "bob@naver.com", "david@example.com"]

console.log(getEmailsByAge(users, 30));
// 예상 출력: ["bob@naver.com", "david@example.com"]

console.log(getEmailsByAge2(users, 25));
// 예상 출력: ["alice@example.com", "bob@naver.com", "david@example.com"]

console.log(getEmailsByAge2(users, 30));
// 예상 출력: ["bob@naver.com", "david@example.com"]
