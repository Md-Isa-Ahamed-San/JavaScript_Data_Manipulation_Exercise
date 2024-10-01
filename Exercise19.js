// Transpose a Matrix: Write a function that transposes a matrix (2D array).

const arr = [[1, 2, 3], [4, 5, 6]]
const subArr1 = arr[0]
const subArr2 = arr[1]
const ans = subArr1.reduce((acc,item)=>{
acc.push([])
return acc;
},[])

// Output: [[1, 4], [2, 5], [3, 6]]