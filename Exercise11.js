// **Question 11:** Map an array of items to a list of 
// components with unique keys.
// - **Sample Data:**
 
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const ans = items.reduce((acc,item,idx)=>{
    acc[Math.random()*(10**18)]=item; //or use idx
    return acc;
},{})
console.log("🚀 ~ ans ~ ans:", ans)