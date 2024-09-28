// ### 4. **Aggregate and Filter Product Sales**
// **Question:** You have a list of sales transactions, each with a `productId` and a `quantity`.
//  Filter out transactions with zero quantities and calculate the total quantity sold per product.

// **Sample Data:**

const sales = [
  { productId: "P1", quantity: 10 },
  { productId: "P2", quantity: 0 },
  { productId: "P1", quantity: 5 },
  { productId: "P3", quantity: 8 },
  { productId: "P2", quantity: 3 },
];

//*best
const result2 = sales.reduce((acc, { productId, quantity }) => {
    if (quantity > 0) {
      acc[productId] = (acc[productId] || 0) + quantity;
    }
    return acc;
}, {});
console.log("🚀 ~ result2 ~ result2:", result2);

//* good
const obj = {};
const filteredSales = sales
  .filter((product) => {
    return product.quantity > 0;
  })
  .forEach((item) => {
    if (!obj[item.productId]) {
      obj[item.productId] = item.quantity;
    } else {
      obj[item.productId] = obj[item.productId] + item.quantity;
    }
  });
// console.log(obj)

//*better
const result = sales
  .filter(({ quantity }) => quantity > 0)
  .reduce((acc, { productId, quantity }) => {
    acc[productId] = (acc[productId] || 0) + quantity;
    return acc;
  }, {});
// console.log(result)



// **Expected Output:**

// {
//   P1: 15,
//   P2: 3,
//   P3: 8
// }
