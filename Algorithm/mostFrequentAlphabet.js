function mostFrequentAlphabet(word) {
  const lowerWord = word.toLowerCase();
  const counts = {};

  for (let char of lowerWord) {
    counts[char] = (counts[char] || 0) + 1;
  }

  let max = 0;
  let result = [];
  for (let char in counts) {
    if (counts[char] > max) {
      max = counts[char];
      result = [char];
    } else if (counts[char] === max) {
      result.push(char);
    }
  }

  if (result.length > 1) {
    console.log("?");
  } else {
    console.log(result[0].toUpperCase());
  }
}

mostFrequentAlphabet("Mississipi"); // ?
mostFrequentAlphabet("Mii"); // I
