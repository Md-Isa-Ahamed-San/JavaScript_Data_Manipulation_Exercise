// **Question 3:** Deeply clone an object and modify a nested property without affecting the original.

  const obj = { user: { name: 'John', address: { city: 'NY' } } };
  const gg = JSON.parse(JSON.stringify(obj))
  gg.user.name = "shan"
  // console.log("🚀 ~ obj:", obj)
  // console.log("🚀 ~ gg:", gg)

// - **Task:** Create a deep copy of the object and update the city to 'LA'.

const votes = ['pizza', 'pasta', 'pizza', 'salad', 'pasta', 'pizza'];

const voteCounts = votes.reduce((acc,item)=>{
  acc[item] = (acc[item]||0)+1;
  return acc;
},{})

// console.log(Object.values(voteCounts));
// Output: { pizza: 3, pasta: 2, salad: 1 }

