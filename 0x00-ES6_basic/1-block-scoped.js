export default function taskBlock(trueOrFalse) {
  const tasks = [true, false];

  if (trueOrFalse) {
    tasks[0] = true;
    tasks[1] = false;
  }
}
