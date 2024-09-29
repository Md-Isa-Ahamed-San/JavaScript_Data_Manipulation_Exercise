// ### Group Products by Type

// **Question:** Given an array of products, group them by their type.

const products = [
  { type: "fruit", name: "Apple" },
  { type: "fruit", name: "Banana" },
  { type: "vegetable", name: "Carrot" },
  { type: "fruit", name: "Orange" },
];

const ans = products.reduce((acc, item) => {
  if (!acc[item.type]) acc[item.type] = [];

  acc[item.type].push(item.name);
  return acc;
}, {});
// console.log("🚀 ~ ans ~ ans:", ans);


//   expected output
//   {
//     fruit: ["Apple", "Banana", "Orange"],
//     vegetable: ["Carrot"],
//   }
