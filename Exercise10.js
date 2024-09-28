//remove duplicates inside a array using set
const n=[1,1,2,2,3,3,4,4,5];
const uniqueNumbers = n.reduce((acc,item)=>{
acc.add(item);
return acc;
},new Set())
console.log("🚀 ~ uniqueNumbers ~ uniqueNumbers:", Array.from(uniqueNumbers))
