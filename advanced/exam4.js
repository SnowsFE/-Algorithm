// 부서별 연봉이 제일 높은 사람을 뽑아라

function maxSalary(mem_info) {
  const obj = new Map();

  for (let person of mem_info) {
    const existing = obj.get(person.dept);
    if (!existing || existing < person.salary) {
      obj.set(person.dept, person.salary);
    }
  }

  return [...obj]
    .map(([key, value]) => ({ dept: key, salary: value }))
    .sort((a, b) => a.dept.localeCompare(b.dept));
}

maxSalary([
  { name: "Alice", dept: "HR", salary: 3000 },
  { name: "Bob", dept: "Engineering", salary: 4000 },
  { name: "Charlie", dept: "HR", salary: 3500 },
  { name: "David", dept: "Engineering", salary: 4500 },
  { name: "Eve", dept: "Marketing", salary: 2500 },
]);
