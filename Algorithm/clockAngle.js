function clockAngle(hour, minute) {
  // 12시간 형식으로 변환 (13시 → 1시)
  hour = hour % 12;

  // 분침 각도: 1분당 6도 이동
  const minuteAngle = minute * 6;

  // 시침 각도: 1시간당 30도, 1분당 0.5도 추가 이동
  const hourAngle = hour * 30 + minute * 0.5;

  // 두 바늘 사이의 각도 차이
  let angleDiff = Math.abs(hourAngle - minuteAngle);

  // 180도보다 크면 작은 각도로 변환 (시계는 원형이므로)
  if (angleDiff > 180) {
    angleDiff = 360 - angleDiff;
  }

  return angleDiff;
}

// 테스트
console.log(`3시 00분: ${clockAngle(3, 0)}도`); // 90도
console.log(`6시 00분: ${clockAngle(6, 0)}도`); // 180도
console.log(`3시 30분: ${clockAngle(3, 30)}도`); // 75도
console.log(`12시 30분: ${clockAngle(12, 30)}도`); // 165도
console.log(`1시 05분: ${clockAngle(1, 5)}도`); // 27.5도

// 추가 테스트
console.log(`9시 15분: ${clockAngle(9, 15)}도`); // 172.5도
console.log(`6시 30분: ${clockAngle(6, 30)}도`); // 15
