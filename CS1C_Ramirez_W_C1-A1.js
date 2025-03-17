// Student Information
const student1 = {
    firstName: "Juan",
    middleName: "Gamoso",
    lastName: "Dela Cruz",
    birthdate: "January 1, 2001",
    birthplace: "Upper Bonifacio, Baguio City, Benguet, Philippines 2600",
    address: "San Nicolas, Candon City, Ilocos Sur, Philippines 2710",
    courseYear: "Bachelor of Science in Computer Science",
    dreamJob: "Software Engineer"
};

const student2 = {
    firstName: "Maria",
    middleName: "Clara",
    lastName: "Santos",
    birthdate: "March 15, 2002",
    birthplace: "Poblacion, Vigan City, Ilocos Sur, Philippines 2700",
    address: "Barangay 3, Laoag City, Ilocos Norte, Philippines 2900",
    courseYear: "Bachelor of Science in Information Technology",
    dreamJob: "Data Analyst"
};

// Function to format and print student information
function printStudentInfo(student) {
    console.log(`[${student.firstName.toUpperCase()} ${student.middleName.toUpperCase()} ${student.lastName.toUpperCase()}] was born [${student.birthdate}] at [${student.birthplace}], and currently living at [${student.address}]. [${student.firstName.toLowerCase()} ${student.middleName.toLowerCase()} ${student.lastName.toLowerCase()}] is taking up [${student.courseYear.toLowerCase()}] and dreams to be [${student.dreamJob}] after graduation.`);
}

// Print student information
printStudentInfo(student1);
printStudentInfo(student2);
