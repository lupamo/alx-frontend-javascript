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

function renderTable(students: Student[]): void {
  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  const headerFirstName = document.createElement("th");
  headerFirstName.textContent = "First Name";
  const headerLocation = document.createElement("th");
  headerLocation.textContent = "Location";
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);

  students.forEach((student) => {
    const row = document.createElement("tr");
    const cellFirstName = document.createElement("td");
    cellFirstName.textContent = student.firstName;
    const cellLocation = document.createElement("td");
    cellLocation.textContent = student.location;
    row.appendChild(cellFirstName);
    row.appendChild(cellLocation);
    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable(studentList);
