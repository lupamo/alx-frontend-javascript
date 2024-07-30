export default function updateStudentGradeByCity(listStudents, city, newGrade) {
  return listStudents
    .filter((student) => student.location === city)
    .map((student) => {
	  const gradeObj = newGrade.find((grade) => grade.studentId === student.id);
	  return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',

	  };
    });
}
