// ---- 10 let variables ----
let schoolName = "NorthWest Samar State University";
let currentYear = 2026;
let isEnrollmentOpen = true;
let totalStudents = 0;
let totalTeachers = 0;
let activeStudentCount = 0;
let currentSemester = "Fall";
let profName = "Mr. Yuri";
let lastEnrolledId = null;
let announcement = "TBA";

//---10 const variables---
const institutionCode = "SCH-001";
const requiredStatus = "Active";
const classCapacity = 50;
const scoringSystem = "Status-based";
const tardyPenalty = 5;
const enrolledStudents = [
  { id: 1, name: "Rina", email: "rina@gmail.com", status: "Active" },
  { id: 2, name: "Sofia", email: "sofia@gmail.com", status: "Inactive" },
  { id: 3, name: "Kim", email: "kim@gmail.com", status: "Active" },
  { id: 4, name: "Cindy", email: "cindy@gmail.com", status: "Inactive" },
  { id: 5, name: "Mia", email: "mia@gmail.com", status: "Active" },
];
const instructor = {
  name: "Mr. Yuri",
  subject: "Prof.Elec",
  contact: { email: "instructor@gmail.com", phone: null },
};
const roomLocation = [6, 7];
const courseList = ["AUTOMATA", "PROFELEC", "READING VISUAL ART", "SOFTWARE ENGINEERING"];
const facilityOptions = { onlinePortal: true, uniformRequired: true };

// ---- 5 arrow functions ----
const formatStatus = (status) => `[${status.toUpperCase()}]`;

const getEmailDomain = (email) => email.split("@")[1];

const greetStudent = (name) => `Welcome to ${schoolName}, ${name}!`;

const calculateLateFee = (daysLate) => tardyPenalty * daysLate;

const isActive = (student) => student.status === requiredStatus;

// ---- 3 destructured arrays ----
const [firstSubject, secondSubject, ...restSubjects] = courseList;
const [row, seat] = roomLocation;
const [firstStudent, secondStudent] = enrolledStudents;

// ---- 3 destructured object literals ----
const { name: teacherName, subject: teacherSubject, contact } = instructor;
const { email, phone = "Not provided" } = contact;
const { onlinePortal, uniformRequired } = facilityOptions;

// ---- 2 arrays using spread operator ----
const extendedStudents = [
  ...enrolledStudents,
  { id: 6, name: "Ava", email: "ava@gmail.com", status: "Active" },
];
const combinedSubjects = [...courseList, "UTS", "Programming"];

// ---- 2 object literals using spread operator ----
const teacherWithId = { ...instructor, id: "CSELEC1" };
const updatedSettings = { ...facilityOptions, uniformRequired: false};

// ---- 2 arrays using .map() ----
const studentNames = enrolledStudents.map((s) => s.name);
const emailDomains = enrolledStudents.map((s) => getEmailDomain(s.email));

// ---- 2 arrays using .filter() ----
const activeStudents = extendedStudents.filter(isActive);
const probationStudents = extendedStudents.filter((s) => s.status === "Regular");

// ---- 2 object literals using optional chaining ----
const teacherEmailInfo = {
  value: contact?.email ?? "instructor@gmail.com",
};
const studentContactInfo = {
  value: firstStudent?.contact?.phone ?? "rina@gmail.com",
  advisor: instructor?.contact?.email?.toUpperCase?.() ??  "instructor@gmail.com",
};

// ---- 10 template literals ----
announcement = `${schoolName} enrollment is currently ${isEnrollmentOpen ? "open" : "closed"} for ${currentYear}.`;
const welcomeMsg = greetStudent(firstStudent.name);
const classSummary = `We have ${activeStudents.length} active students out of ${extendedStudents.length} total.`;
const statusList = `Student statuses: ${enrolledStudents.map((s) => formatStatus(s.status)).join(", ")}`;
const teacherInfo = `Teacher ${teacherName} teaches ${teacherSubject}, reachable at ${email}.`;
const seatInfo = `Seat assignment: Row ${row}, Seat ${seat}.`;
const subjectInfo = `Subjects offered: ${firstSubject}, ${secondSubject}, and ${restSubjects.join(", ")}.`;
const feeInfo = `Late fee for 3 days: ${formatStatus(String(calculateLateFee(3)))} (flat amount)`;
const settingsInfo = `Portal access: ${onlinePortal ? "enabled" : "disabled"}, Uniform required: ${uniformRequired ? "yes" : "no"}.`;
const finalRecord = `Student ID ${(lastEnrolledId = `STU-${++totalStudents}`)} enrolled | Advisor email: ${studentContactInfo.advisor} | Class size: ${(totalTeachers = studentNames.length)}`;

// ---- Output everything ----
console.log(announcement);
console.log(welcomeMsg);
console.log(classSummary);
console.log(statusList);
console.log(teacherInfo);
console.log(seatInfo);
console.log(subjectInfo);
console.log(feeInfo);
console.log(settingsInfo);
console.log(finalRecord);

console.log("\n--- Extra data ---");
console.log("Active students:", activeStudents.map((s) => s.name));
console.log("Regular students:", probationStudents.map((s) => s.name));
console.log("Teacher with ID:", teacherWithId);
console.log("Updated settings:", updatedSettings);
console.log("Teacher email info:", teacherEmailInfo);
console.log("Student contact info:", studentContactInfo);
console.log("Second student:", secondStudent);
console.log("Email domains:", emailDomains);