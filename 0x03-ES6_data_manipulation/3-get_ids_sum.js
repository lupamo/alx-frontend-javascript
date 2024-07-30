export default function getStudentIdsSum(studentList) {
  const mapId =  studentList.map((student) => student.id);
  const sum = mapId.reduce((acc, id) => acc + id, 0);
  return sum;
}