export default function sortTasks(taskObjectsArray) {
  if (taskObjectsArray.length === 0) return taskObjectsArray;

  const completedTasks = taskObjectsArray.filter((t) => t.getCompleted());
  //   return completedTasks;

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

const earlierDueDateComesFirst = (taskA, taskB) =>
  new Date(taskA.getDueDate()) - new Date(taskB.getDueDate());

const earlierCreationDateComesFirst = (taskA, taskB) =>
  Number(taskA.getId().substring(1)) - Number(taskB.getId().substring(1));
