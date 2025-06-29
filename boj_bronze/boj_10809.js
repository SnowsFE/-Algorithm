function boj_10809(S) {
  let arrayList = Array(26).fill(-1);

  for (let i = 0; i < S.length; i++) {
    let charCode = S.charCodeAt(i) - 97; // 'a'가 97
    if (arrayList[charCode] === -1) {
      arrayList[charCode] = i;
    }
  }

  return arrayList;
}

console.log(boj_10809("baekjoon"));
