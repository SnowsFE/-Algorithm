const users = [
  { name: "Alice", age: 25, city: "Seoul" },
  { name: "Bob", age: 30, city: "Busan" },
  { name: "Charlie", age: 28, city: "Seoul" },
  { name: "David", age: 35, city: "Incheon" },
  { name: "Eve", age: 22, city: "Seoul" },
];

const Guzo = users
  .filter(({ city }) => city === "Seoul")
  .map(({ name }) => name.toUpperCase());

const NoGuzo = users
  .filter((user) => user.city === "Seoul")
  .map((name) => name.name.toUpperCase());

console.log(Guzo);
console.log(NoGuzo);
