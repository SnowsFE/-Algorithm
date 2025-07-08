function getSalaryByDept(mem_info) {
  const obj = {};

  for (let person of mem_info) {
    obj[person.dept] = (obj[person.dept] || 0) + person.salary;
    console.log(obj[person.dept]);
  }

  return Object.entries(obj)
    .map(([dept, totalSalary]) => ({ dept, totalSalary }))
    .sort((a, b) => a.dept.localeCompare(b.dept));
}

console.table(
  getSalaryByDept([
    { name: "Alice", dept: "HR", salary: 3000 },
    { name: "Bob", dept: "Engineering", salary: 4000 },
    { name: "Charlie", dept: "HR", salary: 3500 },
    { name: "David", dept: "Engineering", salary: 4500 },
    { name: "Eve", dept: "Marketing", salary: 2500 },
  ])
);
