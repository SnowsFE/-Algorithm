function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("hello.world@naver.co.kr")); // true
console.log(isValidEmail("user@domain")); // false (도메인 끝 없음)
console.log(isValidEmail("user@@domain.com")); // false (@ 두 개)
console.log(isValidEmail("us!er@domain.com")); // false (! 불허용)
console.log(isValidEmail("user@domain.c")); // false (도메인 너무 짧음)
