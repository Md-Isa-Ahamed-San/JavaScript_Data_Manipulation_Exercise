// **Question 6:** Convert an array of strings into an 
// object where each string is a key with its length as the value.
// - **Sample Data:**


const words = ['apple', 'banana', 'cherry'];
const obj = {}
words.forEach(item=>(
    obj[item]=item.length
))
// console.log(obj)

const ans = words.reduce((acc,item)=>{
acc[item] = item.length;
return acc;

},{})
console.log("🚀 ~ ans ~ ans:", ans)

// - **Expected Output:**
 
//   { apple: 5, banana: 6, cherry: 6 }
