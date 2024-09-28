// ### 5. **Create Nested Albums from Image Data**
// **Question:** Given an array of image objects, each with an `albumId`, organize the images into nested albums,
//  ensuring no duplicate albums exist. Return an array where each element is an object containing `albumId` and an array of images.

// **Sample Data:**

const images = [
  { albumId: "1", image: "pic1.jpg" },
  { albumId: "2", image: "pic2.jpg" },
  { albumId: "1", image: "pic3.jpg" },
  { albumId: "3", image: "pic4.jpg" },
  { albumId: "2", image: "pic5.jpg" },
  { albumId: "1", image: "pic6.jpg" },
];
const filteredList = images.reduce((acc, item) => {
  if (!acc[item.albumId]) {
    acc[item.albumId] = [item.image];
  } else {
    acc[item.albumId].push(item.image);
  }
  return acc;
}, {});
// console.log(filteredList);
const gg = Object.keys(filteredList).map((albumId) => ({
  albumId,
  images: filteredList[albumId],
}));
console.log(gg)
// **Expected Output:**

// [
//   { albumId: '1', images: ['pic1.jpg', 'pic3.jpg', 'pic6.jpg'] },
//   { albumId: '2', images: ['pic2.jpg', 'pic5.jpg'] },
//   { albumId: '3', images: ['pic4.jpg'] }
// ]
