// **Question:** Extract unique categories from an array of products.

// **Sample Data:**
const products = [
    { id: 1, category: "Electronics" },
    { id: 2, category: "Clothing" },
    { id: 3, category: "Electronics" },
    { id: 4, category: "Home" },
  ];
  // this method is better as it iterate the product array once. and add it 
//   to fp set
const fp = products.reduce((acc,item)=>{
acc.add(item.category)
return acc;
},new Set())

// console.log("🚀 ~ fp ~ fp:", Array.from(fp))
//this iterates the products array twice. first map function creates an array 
// of item.category then push values 1 by 1 to the set.
const fpp = [...new Set(products.map(item=>(item.category)))]
console.log("🚀 ~ fpp:", fpp)
