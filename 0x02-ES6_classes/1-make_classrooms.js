import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classObj = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  return classObj;
}
