// ### 3. **Manipulate an Array of Numbers**
// **Question:** You have an array of numbers. Remove the first three elements, add three new numbers at the beginning,
//  and return the modified array without altering the original.

// **Sample Data:**


const numbers = [10, 20, 30, 40, 50, 60];
const newNumbers = [5, 15, 25];


const arr = [...newNumbers]
arr.push(...numbers.slice(3))
console.log(arr)

// **Expected Output:**

// ```javascript
// [5, 15, 25, 40, 50, 60]
// ```

