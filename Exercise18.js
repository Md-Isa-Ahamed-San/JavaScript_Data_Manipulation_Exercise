// Zip Two Arrays: Combine two arrays element-wise into pairs.
const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const ans = arr1.reduce((acc,item,idx)=>{
    acc.push([item,arr2[idx]])
    return acc;
},[])
console.log("🚀 ~ ans ~ ans:", ans)

// Output: [[1, 'a'], [2, 'b'], [3, 'c']]
