function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  const reverseStr = lowerStr.split("").reverse().join("");
  return lowerStr === reverseStr;
}

console.log(isPalindrome("RaceCar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Madam"));
