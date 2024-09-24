const items = [
  { categoryId: "A", images: ["img1.jpg", "img2.jpg"] },
  { categoryId: "B", images: ["img3.jpg"] },
  { categoryId: "A", images: ["img2.jpg", "img4.jpg"] },
  { categoryId: "C", images: ["img5.jpg", "img6.jpg"] },
  { categoryId: "B", images: ["img7.jpg", "img3.jpg"] },
];
const filteredObj = items.reduce((acc, item) => {
  if (acc[item.categoryId]) {
    acc[item.categoryId] = [
      ...new Set([...acc[item.categoryId], ...item.images]),
    ];
  } else {
    acc[item.categoryId] = [...item.images];
  }
  return acc;
}, {});
console.log(filteredObj);

// **Expected Output:**

// javascript
// {
//   A: ['img1.jpg', 'img2.jpg', 'img4.jpg'],
//   B: ['img3.jpg', 'img7.jpg'],
//   C: ['img5.jpg', 'img6.jpg']
// }
