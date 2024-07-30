export default function getStudentsByLocation(obj, location) {
  const listObj = obj.filter((obj) => obj.location === location);
  return listObj;
}
