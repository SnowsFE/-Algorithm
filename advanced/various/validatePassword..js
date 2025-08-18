// 비밀번호 입력값 검증
// 최소 8자 이상
// 영문 대문자 1자 이상 포함
// 숫자 1자 이상 포함
// 특수문자(!@#$%^&*) 중 1자 이상 포함
// 조건을 모두 만족하면 true, 아니면 false 반환

function validatePassword(password) {
  if (password.length < 8) return false;

  const hasUpperCase = /[A-Z]/.test(password); // 대문자 포함
  const hasNumber = /[0-9]/.test(password); // 숫자 포함
  const hasSpecial = /[!@#$%^&*]/.test(password); // 특수문자 포함

  return hasUpperCase && hasNumber && hasSpecial;
}

// 예제 실행
console.log(validatePassword("Test123!")); // true
console.log(validatePassword("test1234")); // false (대문자 없음)
console.log(validatePassword("TESTTEST")); // false (숫자/특수문자 없음)
console.log(validatePassword("Abc12")); // false (길이 부족)
