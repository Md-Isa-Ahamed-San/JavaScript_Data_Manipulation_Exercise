// Merge two arrays of objects based on a common key, retaining unique entries.

const arr1 = [{ id: 1, value: 'A' }, { id: 2, value: 'B' }];
const arr2 = [{ id: 2, value: 'B' }, { id: 3, value: 'C' }];

const x = arr1.concat(arr2)
const m = new Map()
x.forEach(item=>{
    m.set(item.id,item) //here using item.id as a unique id and placing each item object to the map. 
})
console.log(Array.from(m)) 
// console.log(Array.from(m.values()))