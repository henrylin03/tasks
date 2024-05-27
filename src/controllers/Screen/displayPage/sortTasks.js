export default function sortTasks(taskObjectsArray) {
  if (taskObjectsArray.length === 0) return taskObjectsArray;

  const completedTasks = taskObjectsArray.filter((t) => t.getCompleted());
  const completedTasksWithDueDates = completedTasks.filter((t) =>
    t.getDueDate(),
  );
  const completedTasksWithoutDueDates = completedTasks.filter(
    (t) => !t.getDueDate(),
  );
  const completedTasksSorted = [
    ...completedTasksWithDueDates.sort(earlierDueDateComesFirst),
    ...completedTasksWithoutDueDates.sort(earlierCreationDateComesFirst),
  ];

  const incompleteTasks = taskObjectsArray.filter((t) => !t.getCompleted());
  const incompleteTasksWithDueDates = incompleteTasks.filter((t) =>
    t.getDueDate(),
  );
  const incompleteTasksWithoutDueDates = incompleteTasks.filter(
    (t) => !t.getDueDate(),
  );

  const incompleteTasksSorted = [
    ...incompleteTasksWithDueDates.sort(earlierDueDateComesFirst),
    ...incompleteTasksWithoutDueDates.sort(earlierCreationDateComesFirst),
  ];

  return [...incompleteTasksSorted, ...completedTasksSorted];
}

const earlierDueDateComesFirst = (taskA, taskB) =>
  new Date(taskA.getDueDate()) - new Date(taskB.getDueDate());

const earlierCreationDateComesFirst = (taskA, taskB) =>
  Number(taskA.getId().substring(1)) - Number(taskB.getId().substring(1));
