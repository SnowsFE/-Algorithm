function boj_5622(str) {
  const dial = {
    A: 2,
    B: 2,
    C: 2,
    D: 3,
    E: 3,
    F: 3,
    G: 4,
    H: 4,
    I: 4,
    J: 5,
    K: 5,
    L: 5,
    M: 6,
    N: 6,
    O: 6,
    P: 7,
    Q: 7,
    R: 7,
    S: 7,
    T: 8,
    U: 8,
    V: 8,
    W: 9,
    X: 9,
    Y: 9,
    Z: 9,
  };
  let time = 0;
  for (let i = 0; i < str.length; i++) {
    time += dial[str[i]] + 1;
  }
  return time;
}

console.log(boj_5622("WA")); // 13
console.log(boj_5622("UNUCIC")); // 36
console.log(boj_5622("ABC")); // 9
console.log(boj_5622("Z")); // 10
console.log(boj_5622("ROCK")); // 33
