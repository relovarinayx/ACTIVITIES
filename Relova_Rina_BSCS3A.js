
// 1. VARIABLES

let schoolName = "NorthWest Samar State University";
let schoolYear = 2026;
let maxStudents = 10;


// 2. OBJECT LITERALS

let schoolInfo = {
    location: "Calbayog City",
    type: "College"
};

let courseInfo = {
    course: "BSCS",
    department: "CCIS"
};


// 3. CLASS 1 - PERSON
// Abstraction

class Person {

    #age;

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }

    introduce() {
        console.log("My name is " + this.name);
    }

    // left abstract on purpose - Person alone doesn't know how it should be displayed
    displayInfo() {
        throw new Error("This method must be used by a subclass.");
    }
}


// 4. CLASS 2 - STUDENT
// Encapsulation

class Student extends Person {

    #studentID; 

    constructor(name, age, studentID, course, grade) {
        super(name, age);
        this.#studentID = studentID;
        this.course = course;
        this.grade = grade;
    }

    getStudentID() {
        return this.#studentID;
    }

    study() {
        console.log(this.name + " is studying " + this.course);
    }

    displayInfo() {
        console.log(
            "Student: " + this.name +
            " | Course: " + this.course +
            " | Grade: " + this.grade
        );
    }
}


// 5. CLASS 3 - TEACHER
// Inheritance

class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach() {
        console.log(this.name + " is teaching " + this.subject);
    }

    displayInfo() {
        console.log(
            "Teacher: " + this.name +
            " | Subject: " + this.subject
        );
    }
}


// 6. OBJECTS

let student1 = new Student(
    "Rina",
    20,
    "C234",
    "BSCS",
    90
);

let student2 = new Student(
    "Cly",
    20,
    "A234",
    "BSES",
    85
);

let student3 = new Student(
    "Sam",
    24,
    "B234",
    "BSIT",
    92
);

let teacher1 = new Teacher(
    "Mr. Yuri",
    35,
    "Object Oriented Programming"
);


// 7. ARRAYS

let students = [student1, student2, student3];

let subjects = [
    "Programming",
    "Database",
    "Web Development"
];

let grades = [90, 85, 92];


// 8. OUTPUT

console.log("School: " + schoolName);
console.log("School Year: " + schoolYear);
console.log("Location: " + schoolInfo.location);
console.log("Course: " + courseInfo.course);


// 9. CONDITIONALS

if (student1.grade >= 75) {
    console.log(student1.name + " passed.");
} else {
    console.log(student1.name + " failed.");
}


if (students.length < maxStudents) {
    console.log("There are still available slots.");
} else {
    console.log("No available slots.");
}


if (student2.getAge() >= 18) {
    console.log(student2.name + " is an adult.");
} else {
    console.log(student2.name + " is a minor.");
}


// 10. LOOPS

console.log("Students:");

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}


console.log("Subjects:");

for (let subject of subjects) {
    console.log(subject);
}


console.log("Grades:");

grades.forEach(function(grade) {
    console.log(grade);
});


// 11. METHODS

student1.introduce();
student1.study();

console.log("Student ID: " + student1.getStudentID());

teacher1.teach();


// 12. POLYMORPHISM
// Polymorphism

// mixing Student and Teacher here on purpose - same displayInfo() call,
// different output depending on the actual object type
console.log("Information:");

let people = [student1, student3, teacher1];

for (let person of people) {
    person.displayInfo();
}


// 13. ABSTRACTION
// Abstraction

// this is expected to fail - Person shouldn't be usable on its own
try {
    let person1 = new Person("Unknown", 30);
    person1.displayInfo();
} catch (error) {
    console.log("Person information must be provided by a subclass.");
}