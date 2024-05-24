export default function sortTasks(taskObjectsArray) {
  if (taskObjectsArray.length === 0) return taskObjectsArray;

  const tasksWithDueDates = taskObjectsArray.filter((t) => t.getDueDate());
  tasksWithDueDates.sort(
    (taskA, taskB) =>
      new Date(taskA.getDueDate()) - new Date(taskB.getDueDate())
  );

  const tasksWithoutDueDates = taskObjectsArray.filter(
    (t) => t.getDueDate() === ""
  );
  tasksWithoutDueDates.sort(
    (taskA, taskB) =>
      Number(taskA.getId().substring(1)) - Number(taskB.getId().substring(1))
  );

  return [...tasksWithDueDates, ...tasksWithoutDueDates];
}
