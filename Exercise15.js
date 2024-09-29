// find max using reduce
//to find max we should use reduce when the arr size is big;
const arr =[232,44,22,55,22,555];
const data = arr.reduce((max,eachValue)=>{
    max = Math.max(max,eachValue)
    return max;
},-Infinity)
console.log("🚀 ~ data ~ data:", data)

// alternative way
const ans = Math.max(...arr)