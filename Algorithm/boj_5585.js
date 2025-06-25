// 📖 문제 설명
// 타로는 1000엔 지폐로 물건을 샀습니다.

// 물건 가격 N (1 ≤ N < 1000)이 주어지고, 거스름돈 1000 - N을 누적해서 동전 개수를 최소화해야 합니다.

// 사용 가능한 동전 종류:

// 500엔, 100엔, 50엔, 10엔, 5엔, 1엔

// 출력: 거스름돈으로 줄 수 있는 최소 동전 개수
function boj_5585_original(N) {
  let coin = [500, 100, 50, 10, 5, 1];
  let stockPrice = 1000 - N;
  let count = 0;

  for (let i = 0; i < coin.length; i++) {
    if (stockPrice / coin[i] > 0) {
      count += Math.floor(stockPrice / coin[i]);
      stockPrice %= coin[i];
    }
  }
  return console.log(`거스름돈의 최소 횟수 : ${count}`);
}

function boj_5585_AI(N) {
  let coin = [500, 100, 50, 10, 5, 1];
  let stockPrice = 1000 - N;
  let count = 0;

  for (let i = 0; i < coin.length; i++) {
    if (stockPrice >= coin[i]) {
      count += Math.floor(stockPrice / coin[i]);
      stockPrice %= coin[i];
    }
  }
  return console.log(`거스름돈의 최소 횟수 : ${count}`);
}

boj_5585_original(380);
boj_5585_AI(380);

boj_5585_original(999);
boj_5585_AI(999);

boj_5585_original(1);
boj_5585_AI(1);
