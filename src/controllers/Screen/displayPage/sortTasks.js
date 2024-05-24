export default function sortTasks(taskObjectsArray) {
  if (taskObjectsArray.length === 0) return taskObjectsArray;

  // isolate the tasks that do have a due date
  const tasksWithDueDates = taskObjectsArray.filter((t) => t.getDueDate());
  console.log(tasksWithDueDates);

  // then, for tasks that don't have a due date, we sort by creation date (proxied by their ids)

  // use spread operator to combine them

  //   const sortedArray = taskObjectsArray.sort((a, b) => {
  //     console.log(new Date(a.getDueDate()), new Date(b.getDueDate()));
  //     return a - b;
  //   });

  //  ! ensure sorting is done after every modification of every task detail too

  return taskObjectsArray; // but sorted
}
