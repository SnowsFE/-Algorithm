// funtion() 기본 함수
// let, var, const << 메모리를 할당 할 수 있는 메소드
// 주석인데 ctrl + / = 주석처리 => 메모장 같은 역할

// 기본[상수]
function variable() {
  let a = 123; // let은 같은 변수명에 값 재할당 불가능
  console.log(`a값 : ${a}`);

  let b = [];
  b = [123, 456]; // let은 배열에 직접적으로 값을 할당 가능
  console.log(`let 배열의 길이 : ${b.length}`);

  var c = 123;
  var c = 456; // var는 같은 변수명에 값 재할당 가능 (후에 선언된 456이 출력)
  console.log(`c값 : ${c}`);

  const d = [];
  // d = [123, 456]; const는 배열의 값을 임의로 할당할 수 없음 => 직접 값을 넣는 형태,
  // 이미 값이 있을 경우 개발자가 임의로 데이터를 넣어 코드의 안정성을 해치는 것을 막을 수 있음
  // ex) const = [123,456] 이 들어있는데 const = [5235,12512] 이런것을 막으려고 오류 출력
  // push는 배열[]에 값을 할당할 수 있는 메서드
  d.push(1004, 1009); // push 메서드를 통해 배열에 값을 할당할 수 있음
  console.log(`d값:${d}`);
}
variable();

// 반복문, 조건문
function loop() {
  // 문제1.loopData 안에 숫자 0부터 5까지를 넣으시오. => 만약 숫자 0부터 100까지 출력을하고 싶다면??
  const loopData = [];

  // for문
  // for (let i = 0; i <= 100; i++) {
  //   loopData.push(i);
  // }

  // 문제2. loopData에 짝수만 남기시오.
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      loopData.push(i);
    }
  }

  // 문제3. loopData의 값을 모두 더하시오.
  let sum = 0;
  for (let i = 0; i < loopData.length; i++) {
    sum = sum + loopData[i];
  }
  console.log(`loopData의 길이:${loopData.length}, 모두 더한 값:${sum}`);

  // 문제4. 0부터 20까지 숫자 중 짝수만 출력하되, 각각의 숫자 뒤에 “은(는) 짝수입니다.” 라는 문구를 같이 출력해보세요~
  const Y = [];
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      Y.push(`${i}은(는) 짝수입니다.`);
    }
  }
  console.table(Y);
}
loop();
