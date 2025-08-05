// 최소 4글자 이상
// 공백 또는 다음 특수문자 포함 시 실패: <, >, ", ', &, 공백
// 알파벳 대소문자 및 숫자만 허용

function isValidUsername(username) {
  // 길이 체크
  if (username.length < 4) return false;

  // 금지된 문자 또는 공백 포함 여부
  const forbiddenPattern = /[<>"'&\s]/;

  // 알파벳 대소문자 + 숫자만 허용
  const validPattern = /^[a-zA-Z0-9]+$/;

  return !forbiddenPattern.test(username) && validPattern.test(username);
}

console.log(isValidUsername("abc")); // false (너무 짧음)
console.log(isValidUsername("user name")); // false (공백 포함)
console.log(isValidUsername("admin<script>")); // false (금지문자 포함)
console.log(isValidUsername("user01")); // true
console.log(isValidUsername("aB19")); // true
