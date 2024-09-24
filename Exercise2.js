// ### 2. **Extract and Format Usernames**
// **Question:** Given a string of comma-separated emails, extract the usernames (part before the `@`), remove duplicates, and return a sorted list of usernames in alphabetical order.

// **Sample Data:**

const emails =
  "john.doe@example.com,jane.smith@test.com,john.doe@another.com,susan@test.com";
const names = new Set();
const filteredEmail = emails.split(",");
filteredEmail.forEach((item) => {
  const i = item.split("@");
  names.add(i[0]);
});
// console.log("🚀 ~ names:", Array.from(names));

const names2 = Array.from(
  new Set(emails.split(",").map((email) => email.split("@")[0]))
).sort();
console.log("🚀 ~ names2:", names2)

// **Expected Output:**

// ```javascript
// ['jane.smith', 'john.doe', 'susan']
// ```
