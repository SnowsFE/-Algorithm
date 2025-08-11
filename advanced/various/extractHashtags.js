function extractHashtags(text) {
  const matches = text.match(/#[a-z0-9_]+/gi) || [];
  return [...new Set(matches.map((tag) => tag.slice(1).toLowerCase()))];
}

console.log(
  extractHashtags("오늘 날씨 #Sunny 하고 #sunny, 내일은 #Rainy 예정")
);
/* 출력:
["sunny", "rainy"]
*/

console.log(
  extractHashtags("코딩은 #JavaScript 가 최고! #javascript #100DaysOfCode")
);
/* 출력:
["javascript", "100daysofcode"]
*/
