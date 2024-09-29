// ### Calculate Average Grades

// **Question:** Given an array of student objects, calculate the average grade for each student.

// **Sample Data:**

const students = [
  { name: "Alice", grades: [90, 80, 85] },
  { name: "Bob", grades: [70, 75, 80] },
  { name: "Charlie", grades: [100, 95] },
];
const ans = students.map((student) => {
  const totalGrades = student.grades.reduce((acc, grade) => {
    return acc + grade;
  }, 0);
 
  return { name: student.name, average: totalGrades/student.grades.length+1 };
});
console.log("🚀 ~ ans:", ans);

//   expected output
//   [
//     { name: "Alice", average: 85 },
//     { name: "Bob", average: 75 },
//     { name: "Charlie", average: 97.5 },
//   ]
