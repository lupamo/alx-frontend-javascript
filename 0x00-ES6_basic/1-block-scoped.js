export default function taskBlock(trueOrFalse) {
  let task = true;
  let task2 = false;

  if (trueOrFalse) {
    task = false;
    task2 = true;
  }

  return [task, task2];
}
