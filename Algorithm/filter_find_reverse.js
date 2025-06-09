// 짝수 필터링하여 찾기
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvenNumbers([11, 13, 15])); // []
console.log(filterEvenNumbers([0, 8, 12, 5])); // [0, 8, 12]

// 양수 찾기
function findFirstPositive(arr) {
  return arr.find((num) => num > 0);
}

console.log(findFirstPositive([-5, -2, 0, 3, -1, 4])); // 3
console.log(findFirstPositive([-10, -3, -1])); // undefined
console.log(findFirstPositive([0, 0, 7, 2])); // 7

// 공백 유지하며 단어 뒤집기
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("Hello world"));
// => "olleH dlrow"
console.log(reverseWords("I love JavaScript"));
// => "I evol tpircSavaJ"
console.log(reverseWords("  hi  there  "));
// => "  ih  ereht  " (공백 유지)
