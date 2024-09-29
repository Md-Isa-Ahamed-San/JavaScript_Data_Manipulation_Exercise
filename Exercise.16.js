// Merge Two Arrays of Objects by ID
// Question:** Merge two arrays of objects based on a common `id`.

const array1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const array2 = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
];

const mergedArray = array1.map((item) => {
  return {
    ...item,
    ...array2.find((obj) => obj.id === item.id),
  };
});
console.log("🚀 ~ mergedArray:", mergedArray);
// expected output
// [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
// ]
