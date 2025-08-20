// 닉네임에는 *특수문자(!, @, #, $, %, ^, &, ) 가 들어가면 안 됩니다.
// 닉네임은 2자 이상, 10자 이하여야 합니다.
// 조건에 맞지 않으면 "올바르지 않은 닉네임입니다." 라는 메시지를 띄워야 합니다.

function validateNickname(nickName) {
  // 길이 조건 확인
  if (nickName.length < 2 || nickName.length > 10) {
    console.log("올바르지 않은 닉네임입니다.");
    return false;
  }

  // 특수문자 검사
  const forbiddenPattern = /[!@#$%^&*]/;
  if (forbiddenPattern.test(nickName)) {
    console.log("올바르지 않은 닉네임입니다.");
    return false;
  }

  return true; // 모든 조건 통과
}

console.log(validateNickname("홍길동")); // true
console.log(validateNickname("A")); // false (너무 짧음)
console.log(validateNickname("thisIsLongNickname")); // false (너무 김)
console.log(validateNickname("길@동")); // false (특수문자 포함)
