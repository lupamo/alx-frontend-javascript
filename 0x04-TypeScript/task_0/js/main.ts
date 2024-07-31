interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ahmed",
  lastName: "Mohammed",
  age: 20,
  location: "Nairobi",
}

const student2: Student = {
  firstName: "Lucy",
  lastName: "Atieno",
  age: 24,
  location: "Nairobi",
}

const studentList: Student[] = [student1, student2];


