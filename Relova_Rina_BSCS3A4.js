// ===== 3 VARIABLES =====
let studentName = "Rina Relova";
let age = 20;
let course = "BS Computer Science";

// ===== 3 ARRAYS =====
let subjects = ["Programming", "Software Engineering", "Automata"];
let grades = [90, 85, 88];
let activities = ["Quiz", "Project", "Recitation"];

// ===== 3 CONDITIONALS =====

// Conditional 1: Check age
if (age >= 18) {
    console.log(studentName + " is an adult student.");
} else {
    console.log(studentName + " is a minor student.");
}

// Conditional 2: Check course
if (course === "BS Computer Science") {
    console.log("The student is taking a Computer Science course.");
} else {
    console.log("The student is taking another course.");
}

// Conditional 3: Check grade
if (grades[0] >= 75) {
    console.log("The student passed the first subject.");
} else {
    console.log("The student failed the first subject.");
}

// ===== 3 LOOPS =====

// Loop 1: Display subjects
console.log("\n--- Subjects ---");

for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}

// Loop 2: Display grades
console.log("\n--- Grades ---");

let index = 0;

while (index < grades.length) {
    console.log("Grade: " + grades[index]);
    index++;
}

// Loop 3: Display activities
console.log("\n--- Activities ---");

for (const activity of activities) {
    console.log(activity);
}

// ===== FINAL INFORMATION =====
console.log("\n--- Student Information ---");
console.log("Name: " + studentName);
console.log("Age: " + age);
console.log("Course: " + course);