function getOldestByName(employees) {
  const map = new Map();

  // 같은 이름 중 가장 나이가 많은 사람만 저장
  for (let person of employees) {
    const existing = map.get(person.name);
    if (!existing || person.age > existing.age) {
      map.set(person.name, person); // 더 나이가 많으면 갱신
    }
  }

  // Map을 배열로 바꾸고 이름 기준으로 정렬
  return [...map.values()].sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}
